'use client'

import { ProductWithTotalPrice } from '@/helpers/products'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { ArrowDown, Loader, Loader2, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { Button } from './ui/button'
import { useState } from 'react'
import { useToast } from './ui/use-toast'

type ProductItemProps = {
  product: ProductWithTotalPrice
}

export function CardProduct({ product }: ProductItemProps) {
  const { addToCart } = useCartStore()
  const [imageLoaded, setImageLoaded] = useState(false)
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

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

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
          {!imageLoaded && (
            <div className="absolute">
              <Loader className="animate-spin text-primary" />
            </div>
          )}
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            className="z-10 h-full w-full object-contain transition duration-300 group-hover:scale-105"
            alt={product.name}
            onLoad={handleImageLoad}
          />
        </div>
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-1.5 text-sm">
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
