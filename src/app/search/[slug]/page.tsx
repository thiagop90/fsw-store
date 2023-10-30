import { prismaClient } from '@/lib/prisma'
import { WrapperProduct } from '../components/wrapper-product'

type CategoryItemProps = {
  params: {
    slug: string
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
    <div>
      <div className="mb-4 font-medium ">
        <p className="mb-0.5 text-xl">{category.name}</p>
        <p className="text-sm text-muted-foreground">
          {category.products.length} products
        </p>
      </div>
      <WrapperProduct products={category.products} />
    </div>
  )
}
