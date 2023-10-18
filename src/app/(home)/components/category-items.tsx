import { categoryIcon } from '@/constants/category-icon'
import { Category } from '@prisma/client'

type CategoryItemProps = {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-lg border py-3">
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-xs font-bold">{category.name}</span>
    </div>
  )
}
