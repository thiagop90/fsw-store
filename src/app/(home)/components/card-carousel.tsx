'use client'

import { ProductWithTotalPrice, formatCurrency } from '@/lib/products'
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

export function CardCarousel({ product }: ProductItemProps) {
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
    <li className="group relative aspect-square h-[30vh] max-h-[275px] flex-none overflow-hidden rounded-lg border bg-card hover:border-primary">
      <Link
        className="group flex h-full w-full items-center justify-center p-12"
        href={`/product/${product.slug}`}
      >
        <ContainerImage imageUrl={product.imageUrls} />
      </Link>
      <div className="absolute inset-x-4 top-4 flex">
        <p className="mr-2 flex-1 truncate text-sm font-semibold">
          {product.name}
        </p>

        {product.discountPercentage > 0 && (
          <Badge className="px-1">
            <ArrowDown className="h-4 w-4" /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="absolute inset-x-4 bottom-4">
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            {product.discountPercentage > 0 ? (
              <>
                <p className="text-xs font-medium text-muted-foreground line-through">
                  {formattedBasePrice}
                </p>
                <p className="font-semibold">{formattedTotalPrice}</p>
              </>
            ) : (
              <p className="font-semibold">{formattedBasePrice}</p>
            )}
          </div>
          <Button
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            size="icon"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </li>
  )
}
