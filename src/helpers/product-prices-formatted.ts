import { ProductWithTotalPrice } from './compute-price'
import { formatCurrency } from './format-currency'

export function useProductPricesFormatted(product: ProductWithTotalPrice) {
  const formattedBasePrice = formatCurrency(Number(product.basePrice))
  const formattedTotalPrice = formatCurrency(product.totalPrice)

  return { formattedBasePrice, formattedTotalPrice }
}
