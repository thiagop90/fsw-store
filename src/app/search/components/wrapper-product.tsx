'use client'

import { ProductCard } from '@/components/product-card'
import { computeProductTotalPrice } from '@/lib/products'
import { Product } from '@prisma/client'

type WrapperProductProps = {
  products: Product[]
}

export function WrapperProduct({ products }: WrapperProductProps) {
  return (
    <div className="-mx-4 pb-6 sm:mx-auto">
      <div className="grid grid-cols-2 overflow-hidden border-l border-t sm:rounded-xl lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  )
}
