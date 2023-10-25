import Link from 'next/link'
import { categoryIcon } from '@/constants/category-icon'
import { Category } from '@prisma/client'

type CategoryItemProps = {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Link
      href={`category/${category.slug}`}
      className="group flex flex-col items-center justify-center gap-2 rounded-lg border bg-card px-6 py-8 transition hover:border-primary"
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className=" font-semibold">{category.name}</span>
    </Link>
  )
}
