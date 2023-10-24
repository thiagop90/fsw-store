import { prismaClient } from '@/lib/prisma'
import { WrapperProduct } from './components/wrapper-product'

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
    <div className="-mx-4 max-w-screen-xl sm:mx-auto">
      <WrapperProduct category={category} products={category.products} />
    </div>
  )
}
