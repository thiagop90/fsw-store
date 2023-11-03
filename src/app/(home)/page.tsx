import { Categories } from './components/categories'
import { prismaClient } from '@/lib/prisma'
import { ProductCarousel } from './components/product-carousel'
import { SectionTitle } from './components/section-title'
import { EmblaOptionsType } from 'embla-carousel-react'

const OPTIONS: EmblaOptionsType = { dragFree: true }

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 18,
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
    take: 10,
    orderBy: {
      basePrice: 'asc',
    },
  })

  const mices = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mices',
      },
    },
    take: 10,
  })

  const headsets = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'headsets',
      },
    },
    take: 10,
  })

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8 pb-6">
      <div className="-mx-4 flex flex-col bg-primary px-4 pt-6 md:mx-0 md:flex-row md:rounded-lg md:p-6">
        <div className="flex flex-col md:w-[45%] md:justify-center md:pr-6 lg:w-1/3">
          <h1 className="mb-2 text-5xl font-bold leading-relaxed tracking-tighter lg:text-[3.75rem]">
            7-Day <span className="text-card">Sale</span>
          </h1>
          <h3 className="mb-10 text-xl font-bold md:text-2xl">
            Save up to 30% on select computer accessories.
          </h3>
        </div>
        <div className="md:w-[55%] lg:w-2/3">
          <ProductCarousel
            className="rounded-t-lg bg-background py-6 md:mx-0 md:rounded-b-lg"
            products={deals}
            options={OPTIONS}
            progressBar
            autoplay
          />
        </div>
      </div>

      <div>
        <SectionTitle className="text-center">Shop by category</SectionTitle>
        <Categories />
      </div>

      <div>
        <SectionTitle>Mices</SectionTitle>
        <ProductCarousel products={mices} />
      </div>

      <div>
        <SectionTitle>Keyboards</SectionTitle>
        <ProductCarousel products={keyboards} />
      </div>
      <div>
        <SectionTitle>Headsets</SectionTitle>
        <ProductCarousel products={headsets} />
      </div>
    </div>
  )
}
