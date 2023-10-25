import { Product } from '@prisma/client'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

type ContainerImageProps = {
  product: Product
}

export function ContainerImage({ product }: ContainerImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <>
      {!imageLoaded && (
        <div className="absolute">
          <Loader className="animate-spin text-primary" />
        </div>
      )}
      <Image
        src={product.imageUrls[0]}
        width={0}
        height={0}
        sizes="100vw"
        className="z-10 h-full w-full object-contain transition duration-300 group-hover:scale-105"
        alt={product.name}
        onLoad={handleImageLoad}
      />
    </>
  )
}
