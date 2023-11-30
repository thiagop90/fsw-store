import { prismaClient } from '@/lib/prisma'
import { CarouselImages } from './components/carousel-images'
import { computeProductTotalPrice, formatCurrency } from '@/lib/products'
import { Badge } from '@/components/ui/badge'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductInfo } from './components/product-info'

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

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="-mx-4 flex flex-col overflow-hidden border-y bg-card py-8 md:mx-0 md:rounded-lg md:border-x md:p-12 lg:flex-row lg:gap-8">
        <CarouselImages imageUrls={product.imageUrls} />
        <ProductInfo product={computeProductTotalPrice(product)} />
      </div>
    </div>
  )
}
