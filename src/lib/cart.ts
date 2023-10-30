import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductWithTotalPrice } from './products'

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
  removeFromCart: (productId: string) => void
  removeAll: () => void
  isOpen: boolean
  toggleCart: () => void
}

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

      removeFromCart: (productId: string) => {
        const updatedCart = removeCart(productId, get().cart)
        set({ cart: updatedCart })
      },

      removeAll: () => set({ cart: [] }),

      isOpen: false,
      toggleCart: () => {
        set((state) => ({
          ...state,
          isOpen: !state.isOpen,
        }))
      },
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

function removeCart(idProduct: string, cart: CartItem[]): CartItem[] {
  const updatedCart = cart.map((item) =>
    item.id === idProduct ? { ...item, count: item.count - 1 } : item,
  )
  return updatedCart.filter((item) => item.count > 0)
}
