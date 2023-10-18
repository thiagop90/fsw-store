import { Category } from '@prisma/client'
import {
  Headphones,
  Keyboard,
  Monitor,
  Mouse,
  Speaker,
  Square,
} from 'lucide-react'

type CategoryItemProps = {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  const categoryIcon = {
    keyboards: <Keyboard className="h-4 w-4" />,
    monitors: <Monitor className="h-4 w-4" />,
    headphones: <Headphones className="h-4 w-4" />,
    mousepads: <Square className="h-4 w-4" />,
    speakers: <Speaker className="h-4 w-4" />,
    mouses: <Mouse className="h-4 w-4" />,
  }

  return (
    <div className="flex items-center justify-center gap-2 rounded-lg border py-3">
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-xs font-bold">{category.name}</span>
    </div>
  )
}
