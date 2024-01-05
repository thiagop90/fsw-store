'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useCartStore, useOpenCart } from '@/store/cart'
import { Loader, ShoppingCart } from 'lucide-react'
import { CartProduct } from './cart-product'
import { ScrollArea } from '../ui/scroll-area'
import { formatCurrency } from '@/helpers/products'
import { createCheckout } from '@/actions/checkout'
import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { createOrder } from '@/actions/order'

export function SheetCart() {
  const { data } = useSession()
  const { isOpenCart, toggleCart } = useOpenCart()
  const { cart, removeAll, subtotal, totalPrice, discount } = useCartStore()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFinishPurchaseClick = async () => {
    setIsProcessing(true)

    if (!data?.user) {
      await signIn('google')
      return
    }

    const order = await createOrder(cart, (data?.user as any).id)

    const checkout = await createCheckout(cart, order.id)
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    })
  }

  const formattedSubtotal = formatCurrency(subtotal())
  const formattedDiscount = formatCurrency(discount())
  const formattedTotalPriceWithDiscount = formatCurrency(totalPrice())

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
              {cart.map((item) => (
                <CartProduct key={item.id} item={item} />
              ))}
            </ScrollArea>
            <div className="flex flex-col border-t px-6 py-4">
              <div className="mb-3 flex items-center justify-between border-b pb-1 ">
                <p className="text-muted-foreground">Subtotal</p>
                <p className="text-right">{formattedSubtotal}</p>
              </div>
              <div className="mb-3 flex items-center justify-between border-b pb-1">
                <p className="text-muted-foreground">Discount</p>
                <p className="text-right">- {formattedDiscount}</p>
              </div>
              <div className="mb-3 flex items-center justify-between border-b pb-1">
                <p className="text-muted-foreground">Total</p>
                <p className="text-right">{formattedTotalPriceWithDiscount}</p>
              </div>
            </div>
            <div className="space-y-2 px-6 pb-6">
              <Button
                className="w-full"
                onClick={handleFinishPurchaseClick}
                disabled={isProcessing || !data?.user}
              >
                {isProcessing ? (
                  <>
                    Processing...
                    <Loader className="ml-1 h-4 w-4 animate-spin" />
                  </>
                ) : (
                  'Checkout'
                )}
              </Button>
              {!data?.user && (
                <p className="text-center">
                  <span
                    onClick={() => signIn('google')}
                    className="cursor-pointer font-semibold text-primary underline"
                  >
                    Log in
                  </span>{' '}
                  to your Google account to proceed.
                </p>
              )}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
