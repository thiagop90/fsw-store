import { prismaClient } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  orderByObj: Prisma.ProductOrderByWithRelationInput,
  slug: string,
) {
  try {
    const { searchParams } = new URL(req.url)
    const sortParam = searchParams.get('sort')
    if (!sortParam) {
      orderByObj = { id: 'desc' }
    } else if (sortParam === 'price-desc') {
      orderByObj = { basePrice: 'desc' }
    } else if (sortParam === 'price-asc') {
      orderByObj = { basePrice: 'asc' }
    }

    const category = await prismaClient.category.findMany({
      where: {
        slug,
      },
      include: {
        products: {
          orderBy: orderByObj,
        },
      },
    })

    // console.log(category)

    return NextResponse.json({ category })
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 },
    )
  }
}
