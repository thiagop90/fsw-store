import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Order, Prisma } from '@prisma/client'
import { format } from 'date-fns'
import { utcToZonedTime, formatInTimeZone } from 'date-fns-tz'
import { OrderProductItem } from './order-product-item'
import { getOrderStatus } from '../helpers/status'
import { DateTime } from 'luxon'

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

  const timeZone = 'America/Sao_Paulo'

  const formattedCreatedAtWithTime = DateTime.fromJSDate(order.createdAt, {
    zone: timeZone,
  }).toFormat("dd/MM/y 'at' HH:mm")

  const formattedCreatedAtDateOnly = DateTime.fromJSDate(order.createdAt, {
    zone: timeZone,
  }).toFormat('dd/MM/y')

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
                Held in {formattedCreatedAtWithTime}
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
                    {formattedCreatedAtDateOnly}
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
