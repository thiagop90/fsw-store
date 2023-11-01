import { prismaClient } from '@/lib/prisma'
import { FilterItem } from './filter-item'
import { FilterItemDropdown } from './dropdown-categories'

export async function Categories() {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className="flex flex-col gap-2">
      <div className="hidden md:block">
        <FilterItem href="/search">All</FilterItem>
        {categories.map((category) => (
          <FilterItem href={`/search/${category.slug}`} key={category.id}>
            {category?.name}
          </FilterItem>
        ))}
      </div>
      <div className="md:hidden">
        <FilterItemDropdown categories={categories} />
      </div>
    </div>
  )
}
