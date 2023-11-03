import { prismaClient } from '@/lib/prisma'
import { WrapperProduct } from '../components/wrapper-product'
import { Product } from '@prisma/client'
import { ProductCard } from '@/components/product-card'
import { computeProductTotalPrice } from '@/lib/products'

type CategoryItemProps = {
  params: {
    slug: string
  }
}

export const generateMetadata = ({ params: { slug } }: CategoryItemProps) => {
  return {
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
  }
}

export default async function CategoryProducts({ params }: CategoryItemProps) {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  })

  if (!category) {
    return null
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
