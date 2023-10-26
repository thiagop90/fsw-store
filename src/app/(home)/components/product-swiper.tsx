'use client'

// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

import {
  HTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react'
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react'
import { computeProductTotalPrice } from '@/helpers/products'
import { Product } from '@prisma/client'
import { CardCarousel } from './card-carousel'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ProductListProps = HTMLAttributes<HTMLDivElement> & {
  products: Product[]
  options?: EmblaOptionsType
  progressBar?: boolean
}

export const ProductSwiper = forwardRef<HTMLDivElement, ProductListProps>(
  ({ className, products, options, progressBar = false, ...props }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [scrollProgress, setScrollProgress] = useState(0)

    const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
      setScrollProgress(progress * 100)
    }, [])

    useEffect(() => {
      if (!emblaApi) return

      onScroll(emblaApi)
      emblaApi.on('reInit', onScroll)
      emblaApi.on('scroll', onScroll)
    }, [emblaApi, onScroll])

    return (
      <div className={cn('relative -mx-4', className)} {...props}>
        <div className="overflow-hidden px-4" ref={emblaRef}>
          <div className="flex touch-pan-y space-x-4 backface-hidden">
            {products.map((product) => (
              <div key={product.id} className="">
                <CardCarousel
                  key={product.id}
                  product={computeProductTotalPrice(product)}
                />
              </div>
            ))}
          </div>
        </div>
        {progressBar && (
          <div className="pointer-events-none relative inset-x-0 mx-auto mt-4 flex h-1.5 w-56 max-w-[90%] overflow-hidden rounded-full border bg-card">
            <div
              className="absolute inset-y-0 -left-full bottom-0 w-full bg-primary"
              style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
            />
          </div>
        )}
      </div>
    )
  },
)
ProductSwiper.displayName = 'ProductSwiper'
