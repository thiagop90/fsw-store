'use client'

import { CartItem, useCartStore } from '@/store/cart'
import { Minus, Plus } from 'lucide-react'

type QuantityControlType = {
  item: CartItem
}

export function QuantityControl({ item }: QuantityControlType) {
  const { addToCart, removeFromCartByQuantity } = useCartStore()

  const handleRemoveItemByQuantity = () => removeFromCartByQuantity(item.id)

  return (
    <div className="flex h-9 items-center rounded-full border">
      <button
        disabled={item.count === 1}
        onClick={handleRemoveItemByQuantity}
        className="flex h-full w-9 flex-none items-center justify-center px-2 transition enabled:hover:text-primary disabled:cursor-not-allowed disabled:text-muted-foreground"
      >
        <Minus className="h-4 w-4" />
      </button>
      <p className="w-6 text-center">{item.count}</p>
      <button
        onClick={() => addToCart(item)}
        className="flex h-full w-9 flex-none items-center justify-center px-2 transition hover:text-primary"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
