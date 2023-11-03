import { prismaClient } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { query: string } },
) {
  try {
    const url = new URL(req.url)
    const limit = 20
    const cursor = url.searchParams.get('cursor')
    const cursorObj = cursor === '' ? undefined : { id: cursor as string }

    const products = await prismaClient.product.findMany({
      take: limit,
      cursor: cursorObj,
      skip: cursor === '' ? 0 : 1,
      orderBy: {
        id: 'desc',
      },
    })

    return NextResponse.json({
      products,
      nextId: products.length === limit ? products[limit - 1].id : undefined,
    })
  } catch (err) {
    return NextResponse.json(
      { message: 'Products not found', err },
      { status: 500 },
    )
  }
}
