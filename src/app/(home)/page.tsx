import { Categories } from './components/categories'
import { prismaClient } from '@/lib/prisma'
import { ProductContainer } from './components/product-container'
import { SectionTitle } from './components/section-title'
import { PromoBanner } from './components/promo-banner'
import { CarouselBanner } from './components/carousel-banner'

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
      {/* <CarouselBanner /> */}

      <div className="-mx-4 flex flex-col border-b px-4 py-8 md:mx-0 md:mt-4 md:flex-row md:rounded-md md:px-6">
        <div className="flex flex-col md:w-[45%] md:justify-center md:pr-6 lg:w-1/3">
          <h1 className="mb-2 text-5xl font-bold leading-relaxed tracking-tighter lg:text-[3.75rem]">
            4-Day <span className="text-primary">Sale</span>
          </h1>
          <h3 className="mb-10 text-xl font-bold md:text-2xl">
            Economize até 42% em acessórios de computador selecionados.
          </h3>
        </div>
        <div className="md:w-[55%] lg:w-2/3">
          <ProductContainer products={deals} />
        </div>
      </div>

      <div>
        <SectionTitle>Categorias</SectionTitle>
        <Categories />
      </div>

      {/* <PromoBanner
        src="/banner-home-03.png"
        alt="Até 55% de desconto em mouses!"
      /> */}

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductContainer products={mouses} />
      </div>

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductContainer products={keyboards} />
      </div>
      <div>
        <SectionTitle>Mousepads</SectionTitle>
        <ProductContainer products={monitores} />
      </div>

      {/* <PromoBanner
        src="/banner-home-04.png"
        alt="Até 20% de desconto em fones!"
      /> */}
    </div>
  )
}
