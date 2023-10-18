import { Badge } from '@/components/ui/badge'
import { prismaClient } from '@/lib/prisma'
import { LayoutGrid } from 'lucide-react'
import { CategoryItem } from './components/category-item'

export default async function Catalog() {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className="p-5">
      <Badge
        className="gap-1 border-primary px-3 py-1.5 text-base uppercase"
        variant="outline"
      >
        <LayoutGrid className="h-4 w-4" />
        Catálogo
      </Badge>

      <div className="mt-8 grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
