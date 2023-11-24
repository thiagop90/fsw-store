'use client'

import { CartItem, useCartStore } from '@/store/cart'

type ButtonRemoveItemType = {
  item: CartItem
}

export function ButtonRemoveItem({ item }: ButtonRemoveItemType) {
  const { removeItemFromCart } = useCartStore()

  const handleRemoveCartItem = () => removeItemFromCart(item.id)

  return (
    <button
      onClick={handleRemoveCartItem}
      className="text-primary hover:underline"
    >
      Remove
    </button>
  )
}
