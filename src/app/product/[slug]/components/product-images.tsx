'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ThumbsButton } from './thumbs-button'

type ProductImagesProps = {
  imageUrls: string[]
}

export function ProductImages({ imageUrls }: ProductImagesProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel()

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi],
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
    <div ref={emblaMainRef}>
      <div className="flex aspect-square max-h-[550px] w-full touch-pan-y space-x-8 backface-hidden">
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
      <div className="my-12">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
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
        </div>
      </div>
    </div>
  )
}
