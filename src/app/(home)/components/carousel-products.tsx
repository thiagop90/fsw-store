'use client'

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
import Autoplay from 'embla-carousel-autoplay'
import { computeProductTotalPrice } from '@/lib/products'
import { Product } from '@prisma/client'
import { CardCarousel } from './card-carousel'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type ProductListProps = HTMLAttributes<HTMLDivElement> & {
  autoplay?: boolean
  options?: EmblaOptionsType
  products: Product[]
  progressBar?: boolean
}

export const CarouselProducts = forwardRef<HTMLDivElement, ProductListProps>(
  ({ autoplay, className, options, products, progressBar, ...props }, ref) => {
    const emblaOptions = autoplay
      ? [Autoplay({ delay: 2000, stopOnInteraction: false })]
      : []
    const [emblaRef, emblaApi] = useEmblaCarousel(
      { ...options, align: 'start', loop: true },
      emblaOptions,
    )
    const [scrollProgress, setScrollProgress] = useState(0)

    const scrollPrev = useCallback(
      () => emblaApi && emblaApi.scrollPrev(),
      [emblaApi],
    )
    const scrollNext = useCallback(
      () => emblaApi && emblaApi.scrollNext(),
      [emblaApi],
    )

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
      <div className={cn('-mx-4', className)} ref={ref} {...props}>
        <div className="relative overflow-hidden px-4" ref={emblaRef}>
          <div className="flex touch-pan-y backface-hidden">
            {products.map((product) => (
              <div key={product.id} className="mr-4">
                <CardCarousel product={computeProductTotalPrice(product)} />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 hidden items-center gap-2 px-2 md:flex">
            <Button
              className="group h-8 w-8"
              size="icon"
              variant="outline"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4 group-hover:text-primary" />
            </Button>
          </div>
          <div className="absolute inset-y-1 right-0 hidden items-center gap-2 bg-gradient-to-l from-card px-2 md:flex">
            <Button
              className="group h-8 w-8"
              size="icon"
              variant="outline"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4 group-hover:text-primary" />
            </Button>
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
CarouselProducts.displayName = 'CarouselProducts'
