'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import Image from 'next/image'

type ProductImagesProps = {
  name: string
  imageUrls: string[]
}

export default function ProductImages({ name, imageUrls }: ProductImagesProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="gallery-top"
      >
        {imageUrls.map((imageUrl) => (
          <SwiperSlide key={imageUrl} className="p-10">
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-contain"
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className=".gallery-thumbs"
      >
        {imageUrls.map((imageUrl) => (
          <SwiperSlide key={imageUrl} className="rounded-md border bg-card p-2">
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
