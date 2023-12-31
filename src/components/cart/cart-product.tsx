import { CartProduct, useCartStore } from '@/store/cart'
import Image from 'next/image'
import Link from 'next/link'
import { SheetTrigger } from '../ui/sheet'
import { QuantityControl } from './quantity-control'
import { useCartPricesFormatted } from '@/helpers/cart-prices-formatted'
import { useProductPricesFormatted } from '@/helpers/product-prices-formatted'

type CartProductType = {
  product: CartProduct
}

export function CartProduct({ product }: CartProductType) {
  const { removeItemFromCart } = useCartStore()
  const handleRemoveCartProduct = () => removeItemFromCart(product.id)

  const { formattedTotalPriceWithDiscount } = useCartPricesFormatted()
  const { formattedBasePrice, formattedTotalPrice } =
    useProductPricesFormatted(product)

  return (
    <li className="flex border-b py-6 last:border-0 ">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border bg-background p-1">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col ">
        <div>
          <div className="flex justify-between font-medium">
            <SheetTrigger asChild>
              <Link href={`/product/${product.slug}`} className="">
                {product.name}
              </Link>
            </SheetTrigger>
            <p className="ml-2">{formattedTotalPriceWithDiscount}</p>
          </div>
          <div className="mt-0.5 flex items-center gap-1 text-sm">
            {product.discountPercentage > 0 ? (
              <>
                <p>{formattedTotalPrice}</p>
                <p className="text-xs text-muted-foreground line-through">
                  {formattedBasePrice}
                </p>
              </>
            ) : (
              <p>{formattedBasePrice}</p>
            )}
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between">
          <button
            onClick={handleRemoveCartProduct}
            className="font-medium text-primary hover:underline"
          >
            Remove
          </button>
          <QuantityControl product={product} />
        </div>
      </div>
    </li>
  )
}
