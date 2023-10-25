import { Categories } from './components/categories'
import { prismaClient } from '@/lib/prisma'
import { ProductSwiper } from './components/product-swiper'
import { SectionTitle } from './components/section-title'

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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
    take: 10,
  })

  const monitores = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'monitors',
      },
    },
    take: 10,
  })

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8">
      <div className="-mx-4 flex flex-col bg-primary px-4 py-8 md:mx-0 md:mt-4 md:flex-row md:rounded-lg md:px-6">
        <div className="flex flex-col md:w-[45%] md:justify-center md:pr-6 lg:w-1/3">
          <h1 className="mb-2 text-5xl font-bold leading-relaxed tracking-tighter lg:text-[3.75rem]">
            4-Day <span className="text-card">Sale</span>
          </h1>
          <h3 className="mb-10 text-xl font-bold md:text-2xl">
            Economize até 42% em acessórios de computador selecionados.
          </h3>
        </div>
        <div className="md:w-[55%] lg:w-2/3">
          <ProductSwiper products={deals} />
        </div>
      </div>

      <div>
        <SectionTitle className="text-center">Shop by category</SectionTitle>
        <Categories />
      </div>

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductSwiper products={mouses} />
      </div>

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductSwiper products={keyboards} />
      </div>
      <div>
        <SectionTitle>Mousepads</SectionTitle>
        <ProductSwiper products={monitores} />
      </div>
    </div>
  )
}
