'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useCartStore, useOpenCart } from '@/store/cart'
import { ShoppingCart } from 'lucide-react'
import { CartProduct } from './cart-product'
import { ScrollArea } from '../ui/scroll-area'
import { CartSummary } from './cart-summary'
import { CheckoutButton } from './checkout-button'

export function Cart() {
  const { isOpenCart, toggleCart } = useOpenCart()
  const { cart, removeAll } = useCartStore()

  const itemText = cart.length > 1 ? 'items' : 'item'

  return (
    <Sheet open={isOpenCart} onOpenChange={toggleCart}>
      <SheetTrigger className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-muted">
        <ShoppingCart className="h-5 w-5" />
        {cart.length > 0 && (
          <span className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-primary text-xs font-semibold">
            {cart.length}
          </span>
        )}
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col gap-0 p-0">
        <SheetHeader className="p-6">
          <SheetTitle className="text-lg">My Cart</SheetTitle>
        </SheetHeader>
        {cart.length === 0 ? (
          <div className="mt-20 flex w-full flex-col items-center justify-center">
            <ShoppingCart className="h-16 w-16" />
            <p className="mt-6 text-center text-2xl font-bold">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div className="flex h-full flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-t px-6 py-1.5">
              <p>
                {cart.length} {itemText}
              </p>
              <button
                className="flex self-end font-medium text-primary hover:underline"
                onClick={removeAll}
              >
                Empty cart
              </button>
            </div>

            <ScrollArea className="flex-grow px-6">
              {cart.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))}
            </ScrollArea>

            <CartSummary />
            <CheckoutButton />
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
