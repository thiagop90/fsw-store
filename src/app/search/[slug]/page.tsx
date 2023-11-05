'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { WrapperProduct } from '../components/wrapper-product'
import { ProductCard } from '@/components/product-card'
import { computeProductTotalPrice } from '@/lib/products'
import { Category, Product } from '@prisma/client'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useSearchParams } from 'next/navigation'

type CategoryItemProps = {
  params: {
    slug: string
  }
}

const fetchCategoryProducts = async (
  slug: string,
  encodedSortQuery: string,
) => {
  const response = await axios.get(
    `/api/search/${slug}?sort=${encodedSortQuery}`,
  )
  return response.data
}

// export const generateMetadata = ({ params: { slug } }: CategoryItemProps) => {
//   return {
//     title: slug.charAt(0).toUpperCase() + slug.slice(1),
//   }
// }

export default function CategoryPage({ params: { slug } }: CategoryItemProps) {
  const search = useSearchParams()
  const sortQuery = search ? search.get('sort') : null
  const encodedSortQuery = encodeURI(sortQuery || '')

  const { data, isLoading, isSuccess } = useQuery(
    ['categoryProducts', slug, encodedSortQuery],
    () => fetchCategoryProducts(slug, encodedSortQuery),
  )

  if (isLoading) {
    return (
      <>
        <div className="mb-4">
          <Skeleton className="mb-2 h-6 w-24" />
          <Skeleton className="h-5 w-16" />
        </div>
        <WrapperProduct>
          {Array(12)
            .fill(null)
            .map((item, index) => (
              <div
                key={index}
                className="flex h-full w-full flex-col gap-2 border-b border-r p-2"
              >
                <Skeleton className="aspect-square" />
                <Skeleton className="h-[82px] w-full sm:h-[86px]" />
              </div>
            ))}
        </WrapperProduct>
      </>
    )
  }

  const currentCategory = data.category.find(
    (category: Category) => category.slug === slug,
  )

  return (
    <>
      {isSuccess && currentCategory && (
        <>
          <div className="mb-4 flex flex-col font-medium ">
            <span className="mb-0.5 text-xl">{currentCategory.name}</span>
            <span className="text-sm text-muted-foreground">
              {currentCategory.products.length} products
            </span>
          </div>
          <WrapperProduct>
            {currentCategory.products.map((product: Product) => (
              <ProductCard
                key={product.id}
                product={computeProductTotalPrice(product)}
              />
            ))}
          </WrapperProduct>
        </>
      )}
    </>
  )
}
