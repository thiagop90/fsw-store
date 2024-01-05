import { authOptions } from '@/lib/auth'
import { prismaClient } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { OrderItem } from './components/order-item'

export default async function OrderPage() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return <p>Access Denied</p>
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: { product: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="mb-6 text-2xl font-semibold">My orders</h1>

      <div className="divide-y divide-border rounded-lg border bg-card px-4">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}
