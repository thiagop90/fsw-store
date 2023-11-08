import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type PropType = {
  selected: boolean
  imgSrc: string
  onClick: () => void
}

export function ThumbsButton(props: PropType) {
  const { selected, imgSrc, onClick } = props

  return (
    <li className="h-20 w-20">
      <button
        onClick={onClick}
        className={cn(
          'group h-full w-full rounded-lg border bg-card p-1 hover:border-primary',
          {
            'border-2 border-primary': selected,
          },
        )}
        type="button"
      >
        <Image
          src={imgSrc}
          alt={imgSrc}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </button>
    </li>
  )
}
