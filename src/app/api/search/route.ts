import { prismaClient } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const limit = 20
    const cursor = searchParams.get('cursor')
    const query = searchParams.get('query')
    const cursorObj = cursor === '' ? undefined : { id: cursor as string }

    const search = await prismaClient.product.findMany({
      where: {
        OR: [
          {
            name: { contains: query as string, mode: 'insensitive' },
          },
          {
            category: {
              name: { contains: query as string, mode: 'insensitive' },
            },
          },
        ],
      },
      take: limit,
      cursor: cursorObj,
      skip: 1,
      orderBy: {
        id: 'desc',
      },
    })

    return NextResponse.json({
      search,
      nextId: search.length === limit ? search[limit - 1].id : undefined,
    })
  } catch (err) {
    return NextResponse.json(
      { message: 'Products not found', err },
      { status: 500 },
    )
  }
}
