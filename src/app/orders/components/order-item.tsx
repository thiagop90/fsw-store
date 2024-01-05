import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Order, Prisma } from '@prisma/client'
import { format } from 'date-fns'
import { OrderProductItem } from './order-product-item'
import { getOrderStatus } from '../helpers/status'

type OrderItemType = {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: { product: true }
      }
    }
  }>
}

export function OrderItem({ order }: OrderItemType) {
  const productText = order.orderProducts.length > 1 ? 'products' : 'product'

  return (
    <div className="">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id} className="border-b-0">
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <p>
                Order with {order.orderProducts.length} {productText}
              </p>
              <span className="text-sm text-muted-foreground">
                Held in {format(order.createdAt, "dd/MM/y 'at' HH:mm")}
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-semibold">
                  <p>Status</p>
                  <p className="text-primary">{getOrderStatus(order.status)}</p>
                </div>

                <div>
                  <p className="font-semibold">Date</p>
                  <p className="text-muted-foreground">
                    {format(order.createdAt, 'd/MM/y')}
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Payment</p>
                  <p className="text-muted-foreground">Credit Cart</p>
                </div>
              </div>

              {order.orderProducts.map((orderProduct) => (
                <OrderProductItem
                  key={orderProduct.id}
                  orderProduct={orderProduct}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
