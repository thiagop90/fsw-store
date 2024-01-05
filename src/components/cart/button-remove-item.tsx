'use client'

import { CartProduct, useCartStore } from '@/store/cart'

type ButtonRemoveItemType = {
  item: CartProduct
}

export function ButtonRemoveItem({ item }: ButtonRemoveItemType) {
  const { removeItemFromCart } = useCartStore()

  const handleRemoveCartProduct = () => removeItemFromCart(item.id)

  return (
    <button
      onClick={handleRemoveCartProduct}
      className="text-primary hover:underline"
    >
      Remove
    </button>
  )
}
