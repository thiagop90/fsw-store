'use client'

import { ProductWithTotalPrice, formatCurrency } from '@/helpers/products'
import { Badge } from '@/components/ui/badge'
import { ArrowDown, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/lib/cart'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { ContainerImage } from '@/components/container-image'

type ProductItemProps = {
  product: ProductWithTotalPrice
}

export function CardProduct({ product }: ProductItemProps) {
  const { addToCart } = useCartStore()
  const { toast } = useToast()

  const formattedBasePrice = formatCurrency(Number(product.basePrice))
  const formattedTotalPrice = formatCurrency(product.totalPrice)

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: 'Produto adicionado ao carrinho',
      description: `${product.name} foi adicionado.`,
    })
  }

  return (
    <div className="group relative overflow-hidden border-b border-r bg-card">
      <Link
        className="flex h-full w-full flex-col"
        href={`/product/${product.slug}`}
      >
        <div className="relative flex aspect-square items-center justify-center overflow-hidden p-8 md:p-10 lg:p-12">
          <ContainerImage product={product} />
        </div>
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-1.5 text-xs">
            <ArrowDown className="h-4 w-4" /> {product.discountPercentage}%
          </Badge>
        )}

        <div className="sticky z-20 mx-2 mb-2 flex flex-1 flex-col rounded-md border bg-background/60 p-2 backdrop-blur-sm transition duration-300 group-hover:-translate-y-12">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm sm:text-base">
            {product.name}
          </p>

          <div className="mt-1 flex flex-1 flex-col justify-end">
            {product.discountPercentage > 0 ? (
              <>
                <p className="text-xs text-muted-foreground line-through">
                  {formattedBasePrice}
                </p>
                <p className="font-semibold">{formattedTotalPrice}</p>
              </>
            ) : (
              <p className="font-semibold">{formattedBasePrice}</p>
            )}
          </div>
        </div>
      </Link>
      <div className="absolute inset-x-0 bottom-0 translate-y-full px-2 pb-2 transition duration-300  group-hover:-translate-y-0">
        <Button onClick={handleAddToCart} className="w-full gap-1">
          Buy
          <ShoppingCart className="h-4 w-4" strokeWidth="2.5" />
        </Button>
      </div>
    </div>
  )
}
