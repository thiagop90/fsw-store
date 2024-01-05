import { OrderProduct, Prisma } from '@prisma/client'
import Image from 'next/image'

type OrderProductItemType = {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true
    }
  }>
}

export function OrderProductItem({ orderProduct }: OrderProductItemType) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <Image
          src={orderProduct.product.imageUrls[0]}
          width={80}
          height={80}
          className="object-contain"
          alt={orderProduct.product.name}
        />
      </div>
    </div>
  )
}
