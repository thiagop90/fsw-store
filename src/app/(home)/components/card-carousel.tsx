'use client'

import { ProductWithTotalPrice } from '@/helpers/products'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ArrowDown, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

type ProductItemProps = {
  product: ProductWithTotalPrice
}

export function CardCarousel({ product }: ProductItemProps) {
  const { addToCart } = useCartStore()
  const { toast } = useToast()

  const formattedBasePrice = Number(product.basePrice).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const formattedTotalPrice = Number(product.totalPrice).toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
    },
  )

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: 'teste',
      description: 'teste',
    })
  }

  return (
    <li className="group relative aspect-square h-[30vh] max-h-[275px] w-full flex-none overflow-hidden rounded-lg border bg-card hover:border-primary ">
      <Link
        className="group flex h-full w-full items-center justify-center "
        href={`/product/${product.slug}`}
      >
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="relative h-full max-h-[70%] w-full max-w-[80%] object-contain transition duration-300 group-hover:scale-105"
          alt={product.name}
          quality={100}
        />
      </Link>
      <div className="absolute inset-x-4 top-4">
        <div className="flex ">
          <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-words text-sm font-semibold">
            {product.name}
          </p>

          {product.discountPercentage > 0 && (
            <Badge className="ml-2  px-1.5">
              <ArrowDown className="h-4 w-4" /> {product.discountPercentage}%
            </Badge>
          )}
        </div>
      </div>

      <div className="absolute inset-x-4 bottom-4">
        <div className="flex items-center justify-between">
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
