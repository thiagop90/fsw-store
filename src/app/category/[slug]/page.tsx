import { ProductItem } from '@/components/product-item'
import { Badge } from '@/components/ui/badge'
import { categoryIcon } from '@/constants/category-icon'
import { computeProductTotalPrice } from '@/helpers/products'
import { prismaClient } from '@/lib/prisma'

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
    <div className="p-5">
      <Badge
        className="gap-1 border-primary px-3 py-1.5 text-base uppercase"
        variant="outline"
      >
        {categoryIcon[params.slug as keyof typeof categoryIcon]}
        {category.name}
      </Badge>

      <div className="mt-8 grid grid-cols-2 gap-6">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  )
}
