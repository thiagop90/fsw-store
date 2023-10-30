import { prismaClient } from '@/lib/prisma'
import { Metadata } from 'next'
import { WrapperProduct } from './components/wrapper-product'

type SearchPageProps = {
  searchParams: { query: string }
}

export function generateMetaData({
  searchParams: { query },
}: SearchPageProps): Metadata {
  return {
    title: `Search: ${query} - FSW Store`,
  }
}

export default async function SearchPage({
  searchParams: { query },
}: SearchPageProps) {
  const products = await prismaClient.product.findMany({
    where: {
      OR: [
        {
          name: { contains: query, mode: 'insensitive' },
        },
        {
          category: {
            name: { contains: query, mode: 'insensitive' },
          },
        },
      ],
    },
    orderBy: { id: 'desc' },
    take: 20,
  })

  if (products.length === 0) {
    return (
      <>
        <p className="mb-4">
          There are no products that match{' '}
          <span className="font-bold">
            {'"'}
            {query}
            {'"'}
          </span>
        </p>
      </>
    )
  }

  const resultsText = products.length > 1 ? 'results' : 'result'

  return (
    <>
      {query && (
        <p className="mb-4">
          Showing {products.length} {resultsText} for{' '}
          <span className="font-bold">
            {'"'}
            {query}
            {'"'}
          </span>
        </p>
      )}
      <WrapperProduct products={products} />
    </>
  )
}
