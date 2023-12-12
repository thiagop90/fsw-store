import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductWithTotalPrice } from '../helpers/products'

type ToggleCart = {
  isOpenCart: boolean
  toggleCart: () => void
}

export type CartItem = ProductWithTotalPrice & {
  count: number
}

type CartStore = {
  cart: CartItem[]
  count: () => number
  subtotal: () => number
  totalPrice: () => number
  discount: () => number
  addToCart: (product: ProductWithTotalPrice) => void
  removeFromCartByQuantity: (productId: string) => void
  removeItemFromCart: (productId: string) => void
  removeAll: () => void
}

export const useToggleCart = create<ToggleCart>((set, get) => ({
  isOpenCart: false,
  toggleCart: () => set({ isOpenCart: !get().isOpenCart }),
}))

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      count: () => get().cart.reduce((prev, curr) => prev + curr.count, 0),

      subtotal: () =>
        get().cart.reduce(
          (prev, curr) => prev + Number(curr.basePrice) * curr.count,
          0,
        ),

      totalPrice: () =>
        get().cart.reduce(
          (prev, curr) => prev + Number(curr.totalPrice) * curr.count,
          0,
        ),

      discount: () => {
        const sub = get().subtotal()
        const total = get().totalPrice()
        return sub - total
      },

      addToCart: (product: ProductWithTotalPrice) => {
        const updatedCart = updateCart(product, get().cart)
        set({ cart: updatedCart })
      },

      removeFromCartByQuantity: (productId: string) => {
        const updatedCart = removeCartItem(productId, get().cart)
        set({ cart: updatedCart })
      },

      removeItemFromCart: (productId: string) => {
        const updatedCart = removeItemFromCart(productId, get().cart)
        set({ cart: updatedCart })
      },

      removeAll: () => set({ cart: [] }),
    }),

    { name: 'cart-items' },
  ),
)

function updateCart(
  product: ProductWithTotalPrice,
  cart: CartItem[],
): CartItem[] {
  const updatedCart = [...cart]
  const existingIndex = updatedCart.findIndex((item) => item.id === product.id)

  if (existingIndex !== -1) {
    updatedCart[existingIndex] = {
      ...updatedCart[existingIndex],
      count: updatedCart[existingIndex].count + 1,
    }
  } else {
    updatedCart.push({ ...product, count: 1 })
  }
  return updatedCart
}

function removeCartItem(idProduct: string, cart: CartItem[]): CartItem[] {
  const updatedCart = cart.map((item) =>
    item.id === idProduct ? { ...item, count: item.count - 1 } : item,
  )
  return updatedCart.filter((item) => item.count > 0)
}

function removeItemFromCart(idProduct: string, cart: CartItem[]): CartItem[] {
  const updatedCart = cart.filter((item) => item.id !== idProduct)
  return updatedCart
}
