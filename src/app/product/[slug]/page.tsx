import { prismaClient } from '@/lib/prisma'
import ProductImages from './components/product-images'

type ProductDetailsPageProps = {
  params: {
    slug: string
  }
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
  })

  if (!product) {
    return null
  }

  return <ProductImages imageUrls={product.imageUrls} name={product.name} />
}
