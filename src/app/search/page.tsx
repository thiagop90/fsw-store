'use client'

import { WrapperProduct } from './components/wrapper-product'
import { Fragment, useEffect } from 'react'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { useInView } from 'react-intersection-observer'
import { Product } from '@prisma/client'
import { ProductCard } from '@/components/product-card'
import { computeProductTotalPrice } from '@/lib/products'
import { Skeleton } from '@/components/ui/skeleton'
import { Loader } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

type SearchPageProps = {
  searchParams: { query: string }
}

// export const generateMetadata = ({
//   searchParams: { query },
// }: SearchPageProps) => {
//   return {
//     title: query ? `Search: ${query}` : 'Search',
//   }
// }

export default function SearchPage({
  searchParams: { query },
}: SearchPageProps) {
  const { ref, inView } = useInView()
  const search = useSearchParams()
  const searchQuery = search ? search.get('q') : null
  const encodedSearchQuery = encodeURI(searchQuery || '')

  const {
    isLoading,
    isError,
    data,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'products',
    async ({ pageParam = '' }) => {
      const res = await axios.get('/api/products?cursor=' + pageParam)
      return res.data
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextId,
    },
  )

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView])

  if (isLoading)
    return (
      <WrapperProduct>
        {Array(12)
          .fill(null)
          .map((item, index) => (
            <div
              key={index}
              className="flex h-full w-full flex-col gap-2 border-b border-r p-2"
            >
              <Skeleton className="aspect-square h-full w-full" />
              <Skeleton className="h-[86px] w-full" />
            </div>
          ))}
      </WrapperProduct>
    )
  if (isError) return <div>Error!</div>
  // const products = await prismaClient.product.findMany({
  //   where: {
  //     OR: [
  //       {
  //         name: { contains: query, mode: 'insensitive' },
  //       },
  //       {
  //         category: {
  //           name: { contains: query, mode: 'insensitive' },
  //         },
  //       },
  //     ],
  //   },
  //   orderBy: { id: 'desc' },
  //   take: 20,
  // })

  // if (products.length === 0) {
  //   return (
  //     <p className="mb-4">
  //       There are no products that match{' '}
  //       <span className="font-bold">
  //         {'"'}
  //         {query}
  //         {'"'}
  //       </span>
  //     </p>
  //   )
  // }

  // const resultsText = products.length > 1 ? 'results' : 'result'

  return (
    <>
      {isSuccess && (
        <WrapperProduct>
          {data.pages.map((page) => (
            <Fragment key={page.nextId ?? 'lastPage'}>
              {page.products.map((products: Product) => (
                <ProductCard
                  key={products.id}
                  product={computeProductTotalPrice(products)}
                />
              ))}
            </Fragment>
          ))}
        </WrapperProduct>
      )}

      <div className="flex justify-center" ref={ref}>
        {isFetchingNextPage && (
          <div className="flex items-center gap-2">
            <Loader className="animate-spin text-primary" />
            Loading more products...
          </div>
        )}
      </div>
    </>
  )
}
