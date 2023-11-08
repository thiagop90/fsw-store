import { prismaClient } from '@/lib/prisma'
import { CarouselImages } from './components/carousel-images'
import { formatCurrency } from '@/lib/products'
import { Badge } from '@/components/ui/badge'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
  const formattedBasePrice = formatCurrency(Number(product.basePrice))
  // const formattedTotalPrice = formatCurrency(product.totalPrice)

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col overflow-hidden rounded-lg border bg-card p-8 md:p-12 lg:flex-row lg:gap-8">
        <CarouselImages imageUrls={product.imageUrls} />
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">{product.name}</h1>
          <div className="mt-2 flex gap-2">
            <h3 className="text-lg font-semibold">{formattedBasePrice}</h3>
            <Badge className="gap-1 px-1.5">
              <ArrowDown className="h-4 w-4" /> {product.discountPercentage}%
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
