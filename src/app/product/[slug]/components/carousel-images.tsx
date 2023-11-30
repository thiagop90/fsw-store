'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ThumbsButton } from './thumbs-button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type ProductImagesProps = {
  imageUrls: string[]
}

export function CarouselImages({ imageUrls }: ProductImagesProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    loop: true,
  })
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel()

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi],
  )

  const scrollPrev = useCallback(
    () => emblaMainApi && emblaMainApi.scrollPrev(),
    [emblaMainApi],
  )
  const scrollNext = useCallback(
    () => emblaMainApi && emblaMainApi.scrollNext(),
    [emblaMainApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div
      className="relative h-full w-full basis-full overflow-hidden lg:basis-4/6"
      ref={emblaMainRef}
    >
      <div className="flex aspect-square h-full max-h-[400px] w-full touch-pan-y backface-hidden">
        {imageUrls.map((imageUrl) => (
          <Image
            key={imageUrl}
            src={imageUrl}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full flex-none object-contain"
            priority
            quality={100}
          />
        ))}
      </div>
      {/* <div className="absolute bottom-24 flex w-full justify-center">
        <div className="mx-auto flex h-11 items-center rounded-full border bg-background/80 backdrop-blur">
          <button
            onClick={scrollPrev}
            className="flex h-full items-center justify-center px-6 text-muted-foreground transition-all ease-in-out hover:scale-110 hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="mx-1 h-6 w-px bg-neutral-500" />
          <button
            onClick={scrollNext}
            className="flex h-full items-center justify-center px-6 text-muted-foreground transition-all ease-in-out hover:scale-110 hover:text-foreground"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div> */}
      <ul
        className="my-12 overflow-hidden px-4 sm:px-0 lg:mb-0"
        ref={emblaThumbsRef}
      >
        <div className="flex items-center justify-center space-x-3">
          {imageUrls.map((imageUrl, index) => (
            <ThumbsButton
              onClick={() => onThumbClick(index)}
              selected={index === selectedIndex}
              imgSrc={imageUrl}
              key={imageUrl}
            />
          ))}
        </div>
      </ul>
    </div>
  )
}
