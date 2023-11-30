'use client'

import { ProductWithTotalPrice, formatCurrency } from '@/lib/products'
import { Loader, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCartStore, useToggleCart } from '@/store/cart'
import { Button } from '@/components/ui/button'
import { ContainerImage } from '@/components/container-image'
import { DiscountBadge } from './discount-badge'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type ProductItemProps = {
  product: ProductWithTotalPrice
}

export function ProductCard({ product }: ProductItemProps) {
  const { addToCart } = useCartStore()
  const { toggleCart } = useToggleCart()
  const [loading, setLoading] = useState(false)
  const [itemAdded, setItemAdded] = useState(false)

  const formattedBasePrice = formatCurrency(Number(product.basePrice))
  const formattedTotalPrice = formatCurrency(product.totalPrice)

  const handleAddToCart = () => {
    setLoading(true)
    addToCart(product)
    setTimeout(() => {
      setLoading(false)
      setItemAdded(true)
      setTimeout(() => {
        setItemAdded(false)
      }, 3000)
    }, 1100)
  }

  return (
    <li className="group relative animate-fadeIn overflow-hidden border-b border-r bg-card transition-opacity">
      <Link
        className="flex h-full w-full flex-col p-2"
        href={`/product/${product.slug}`}
      >
        <div className="relative flex aspect-square items-center justify-center overflow-hidden p-8 md:p-10 lg:p-12">
          <ContainerImage imageUrl={product.imageUrls} />
        </div>
        {product.discountPercentage > 0 && (
          <DiscountBadge className="absolute left-2 top-2 z-20">
            {product.discountPercentage}
          </DiscountBadge>
        )}

        <div className="z-20 flex flex-1 flex-col rounded-lg border bg-background/70 p-2 transition duration-300 group-hover:-translate-y-12">
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
        <Button
          variant={itemAdded ? 'outline' : 'default'}
          disabled={loading}
          onClick={itemAdded ? toggleCart : handleAddToCart}
          className="w-full transition-all duration-300"
        >
          {loading && (
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
                y: 0,
                // transition: { duration: 0.3 },
              }}
              // exit={{ opacity: 0, y: 4 }}
              className="flex items-center gap-1"
            >
              Adding...
              <Loader className="h-4 w-4 animate-spin" strokeWidth="2.5" />
            </motion.span>
          )}
          {!loading && (
            <motion.span
              initial={{ opacity: 1, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,

                // transition: { duration: 0.3 },
              }}
              // exit={{ opacity: 0, y: -4 }}
              className={cn('flex items-center gap-1')}
            >
              {itemAdded ? 'View Cart' : 'Buy'}
              <ShoppingCart className="h-4 w-4" strokeWidth="2.5" />
            </motion.span>
          )}
        </Button>
      </div>
    </li>
  )
}
