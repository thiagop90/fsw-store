import { prismaClient } from '@/lib/prisma'
import { FilterItem } from './filter-item'

export async function Categories() {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className="flex flex-col">
      <h3 className="text-sm text-muted-foreground">Categories</h3>
      <div className="no-scrollbar -mx-4 flex gap-3 overflow-y-auto px-4 md:mx-0 md:flex-col md:gap-0 md:px-0">
        <FilterItem href="/search">All</FilterItem>
        {categories.map((category) => (
          <FilterItem href={`/search/${category.slug}`} key={category.id}>
            {category?.name}
          </FilterItem>
        ))}
      </div>
    </div>
  )
}
