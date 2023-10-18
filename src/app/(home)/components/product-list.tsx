import { ProductItem } from '@/components/product-item'
import { computeProductTotalPrice } from '@/helpers/products'
import { Product } from '@prisma/client'

type ProductListProps = {
  products: Product[]
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="w-[156px] max-w-[156px]">
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  )
}
