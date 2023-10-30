'use client'

import { CartItem, useCartStore } from '@/lib/cart'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SheetTrigger } from '../ui/sheet'
import { formatCurrency } from '@/lib/products'

type ProductCartProps = {
  item: CartItem
}

export function CartProduct({ item }: ProductCartProps) {
  const { addToCart, removeFromCart } = useCartStore()

  const formattedBasePrice = formatCurrency(Number(item.basePrice))
  const formattedTotalPrice = formatCurrency(item.totalPrice)
  const formattedTotalPriceWithQuantity = formatCurrency(
    item.totalPrice * item.count,
  )

  return (
    <li className="flex justify-between border-b py-4">
      <SheetTrigger asChild>
        <Link href={`/product/${item.slug}`} className="flex gap-4 ">
          <div className="h-20 w-20 cursor-pointer overflow-hidden rounded-lg border bg-accent p-1">
            <Image
              src={item.imageUrls[0]}
              alt={item.name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col font-medium">
            <p className="">{item.name}</p>
            {item.discountPercentage > 0 ? (
              <>
                <p className="text-xs text-muted-foreground line-through">
                  {formattedBasePrice}
                </p>
                <p>{formattedTotalPrice}</p>
              </>
            ) : (
              <p>{formattedBasePrice}</p>
            )}
          </div>
        </Link>
      </SheetTrigger>
      <div className="flex flex-col justify-between">
        <p className="ml-auto font-medium">{formattedTotalPriceWithQuantity}</p>
        <div className="flex h-10 items-center rounded-full border">
          <button
            onClick={() => removeFromCart(item.id)}
            className="flex h-full w-9 flex-none items-center justify-center px-2 transition hover:text-primary"
          >
            {item.count > 1 ? (
              <Minus className="h-4 w-4" />
            ) : (
              <Trash2 className="h-4 w-4" strokeWidth="1.5" />
            )}
          </button>
          <p className="w-6 text-center">{item.count}</p>
          <button
            onClick={() => addToCart(item)}
            className="flex h-full w-9 flex-none items-center justify-center px-2 transition hover:text-primary"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </li>
  )
}
