'use client'

import { DiscountBadge } from '@/components/discount-badge'
import { QuantityControl } from '@/components/quantity-control'
import { Button } from '@/components/ui/button'
import { ProductWithTotalPrice, formatCurrency } from '@/lib/products'
import { CartItem, useCartStore, useToggleCart } from '@/store/cart'
import { Loader, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

type ProductInfoType = {
  product: ProductWithTotalPrice
}

export function ProductInfo({ product }: ProductInfoType) {
  const { addToCart } = useCartStore()
  const { toggleCart } = useToggleCart()
  const [loading, setLoading] = useState(false)

  const handleAddToCart = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      addToCart(product)
      toggleCart()
    }, 1100)
  }

  const formattedBasePrice = formatCurrency(Number(product.basePrice))
  const formattedTotalPrice = formatCurrency(Number(product.totalPrice))

  const truncatedDescription = `${product.description.slice(0, 376)}`

  return (
    <div className="flex basis-full flex-col px-6 md:px-0 lg:basis-2/5">
      <div className="mb-6 flex flex-col border-b pb-6">
        <div className="mb-2 text-muted-foreground">
          <span className="">
            Sold and delivered by:{' '}
            <span className="font-bold text-primary">THG Store</span>{' '}
          </span>
          <span className="mx-1">|</span>
          <span className="font-bold text-green-500">In stock</span>
        </div>
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <div className="mt-2 flex items-center gap-2">
          <h3 className="text-lg font-semibold md:text-xl">
            {formattedTotalPrice}
          </h3>
          {product.discountPercentage > 0 && (
            <DiscountBadge>{product.discountPercentage}</DiscountBadge>
          )}
        </div>
        {product.discountPercentage > 0 && (
          <p className="text-sm font-semibold text-muted-foreground line-through md:text-base">
            {formattedBasePrice}
          </p>
        )}
      </div>
      <h2 className="mb-6 text-sm leading-relaxed text-muted-foreground">
        {truncatedDescription}
      </h2>
      <Button className="gap-1" disabled={loading} onClick={handleAddToCart}>
        {loading ? 'Adding...' : 'Add To Cart'}
        {loading ? (
          <Loader className="h-4 w-4 animate-spin" strokeWidth="2.5" />
        ) : (
          <ShoppingCart className="h-4 w-4" strokeWidth="2.5" />
        )}
      </Button>
    </div>
  )
}
