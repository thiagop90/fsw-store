import { useCartStore } from '@/store/cart'
import { Product } from '@prisma/client'

export type ProductWithTotalPrice = Product & {
  totalPrice: number
}

export function computeProductTotalPrice(
  product: Product,
): ProductWithTotalPrice {
  const totalPrice =
    product.discountPercentage === 0
      ? Number(product.basePrice)
      : Number(product.basePrice) -
        (Number(product.basePrice) * product.discountPercentage) / 100

  return { ...product, totalPrice }
}

export function usePricesFormatted(product?: ProductWithTotalPrice) {
  const { subtotal, totalPrice, discount } = useCartStore()

  const formattedBasePrice = product
    ? formatCurrency(Number(product.basePrice))
    : ''
  const formattedTotalPrice = product ? formatCurrency(product.totalPrice) : ''
  const formattedSubtotal = formatCurrency(subtotal())
  const formattedDiscount = formatCurrency(discount())
  const formattedTotalPriceWithDiscount = formatCurrency(totalPrice())

  return {
    formattedBasePrice,
    formattedTotalPrice,
    formattedSubtotal,
    formattedDiscount,
    formattedTotalPriceWithDiscount,
  }
}

export const formatCurrency = (value: number): string => {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
