import { Product } from '@prisma/client'

export type ProductWithTotalPrice = Product & {
  totalPrice: number
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    }
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100)

  return {
    ...product,
    totalPrice: Number(product.basePrice) - totalDiscount,
  }
}

export interface FormattedValues {
  formattedBasePrice: string
  formattedTotalPrice: string
  formattedTotalPriceWithQuantity: string
}

export const formatCurrency = (value: number): string => {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
