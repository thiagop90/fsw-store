import { prismaClient } from '@/lib/prisma'
import { WrapperProduct } from '../components/wrapper-product'
import { Prisma } from '@prisma/client'
import { ProductCard } from '@/components/product-card'
import { computeProductTotalPrice } from '@/helpers/compute-price'

type CategoryItemProps = {
  params: {
    slug: string
  }
  searchParams: {
    sort: string
  }
}

export const generateMetadata = ({ params: { slug } }: CategoryItemProps) => {
  return {
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
  }
}

export default async function CategoryProducts({
  params,
  searchParams,
}: CategoryItemProps) {
  let orderByObj: Prisma.ProductOrderByWithRelationInput = {}
  const sortParam = searchParams.sort
  if (!sortParam) {
    orderByObj = { id: 'desc' }
  } else if (sortParam === 'price-desc') {
    orderByObj = { basePrice: 'desc' }
  } else if (sortParam === 'price-asc') {
    orderByObj = { basePrice: 'asc' }
  }

  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: {
        orderBy: orderByObj,
      },
    },
  })

  if (!category) {
    return <h2 className="text-center">Category not found</h2>
  }

  return (
    <>
      <div className="mb-4 flex flex-col font-medium ">
        <span className="mb-0.5 text-xl">{category.name}</span>
        <span className="text-sm text-muted-foreground">
          {category.products.length} products
        </span>
      </div>
      <WrapperProduct>
        {category.products.map((product) => (
          <ProductCard
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </WrapperProduct>
    </>
  )
}
