import { CartItem } from '@/store/cart'
import Image from 'next/image'
import Link from 'next/link'
import { SheetTrigger } from '../ui/sheet'
import { formatCurrency } from '@/lib/products'
import { QuantityControl } from '../quantity-control'
import { ButtonRemoveItem } from './button-remove-item'

type ProductCartProps = {
  item: CartItem
}

export function CartProduct({ item }: ProductCartProps) {
  const formattedBasePrice = formatCurrency(Number(item.basePrice))
  const formattedTotalPrice = formatCurrency(item.totalPrice)
  const formattedTotalPriceWithQuantity = formatCurrency(
    item.totalPrice * item.count,
  )

  return (
    <li className="flex border-b py-6 last:border-0 ">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border bg-background p-1">
        <Image
          src={item.imageUrls[0]}
          alt={item.name}
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
              <Link href={`/product/${item.slug}`} className="">
                {item.name}
              </Link>
            </SheetTrigger>
            <p className="ml-2">{formattedTotalPriceWithQuantity}</p>
          </div>
          <div className="mt-0.5 flex items-center gap-1 text-sm">
            {item.discountPercentage > 0 ? (
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
          <ButtonRemoveItem item={item} />
          <QuantityControl item={item} />
        </div>
      </div>
    </li>
  )
}
