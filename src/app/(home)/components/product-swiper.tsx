'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { computeProductTotalPrice } from '@/helpers/products'
import { Product } from '@prisma/client'
import { CardCarousel } from './card-carousel'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type ProductListProps = {
  products: Product[]
}

export function ProductSwiper({ products }: ProductListProps) {
  return (
    <Swiper
      className="my-swiper-1"
      slidesPerView={'auto'}
      navigation={{
        enabled: true,
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      modules={[Navigation]}
    >
      <div className="swiper-button-prev">
        <Button size="icon" variant="outline">
          <ChevronLeft className="text-primary" />
        </Button>
      </div>
      {products.map((product) => (
        <SwiperSlide style={{ width: 'fit-content' }} key={product.id}>
          <CardCarousel
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        </SwiperSlide>
      ))}
      <div className="swiper-button-next">
        <Button size="icon" variant="outline">
          <ChevronRight className="text-primary" />
        </Button>
      </div>
    </Swiper>
  )
}
