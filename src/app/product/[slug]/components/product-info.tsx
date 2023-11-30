'use client'

import { DiscountBadge } from '@/components/discount-badge'
import { QuantityControl } from '@/components/quantity-control'
import { ProductWithTotalPrice, formatCurrency } from '@/lib/products'
import { CartItem } from '@/store/cart'

type ProductInfoType = {
  product: ProductWithTotalPrice
}

export function ProductInfo({ product }: ProductInfoType) {
  const formattedBasePrice = formatCurrency(Number(product.basePrice))
  const formattedTotalPrice = formatCurrency(Number(product.totalPrice))

  return (
    <div className="flex basis-full flex-col px-6 md:px-0 lg:basis-2/6">
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
        <p className="mb-4 text-sm font-semibold text-muted-foreground line-through md:text-base">
          {formattedBasePrice}
        </p>
      )}
      {/* <QuantityControl item={product} /> */}
    </div>
  )
}
