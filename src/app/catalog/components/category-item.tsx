import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

type CategoryItemProps = {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="flex flex-col overflow-hidden rounded-lg"
    >
      <div className="flex h-[150px] w-full items-center justify-center bg-category-item-gradient">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full max-h-[70%] w-full max-w-[80%]"
          style={{
            objectFit: 'contain',
          }}
          priority
          quality={100}
        />
      </div>
      <div className="bg-accent py-3">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </div>
    </Link>
  )
}
