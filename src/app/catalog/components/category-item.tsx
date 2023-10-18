import { Category } from '@prisma/client'
import Image from 'next/image'

type CategoryItemProps = {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg">
      <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className="bg-accent py-3">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </div>
    </div>
  )
}
