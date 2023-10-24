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
      className="flex items-center justify-center gap-2 rounded-lg border bg-card px-4 py-2 transition-colors hover:border-primary"
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className=" font-semibold">{category.name}</span>
    </Link>
  )
}
