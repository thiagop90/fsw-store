import { prismaClient } from '@/lib/prisma'
import { DynamicTag } from './dynamic-tag'
import { CategoriesDropdown } from './categories-dropdown'

export async function CategoriesList() {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className="flex flex-col">
      <div className="hidden md:block">
        <h3 className="text-sm text-muted-foreground">Categories</h3>
        <DynamicTag href="/search">All</DynamicTag>
        {categories.map((category) => (
          <DynamicTag href={`/search/${category.slug}`} key={category.id}>
            {category?.name}
          </DynamicTag>
        ))}
      </div>
      <div className="md:hidden">
        <CategoriesDropdown categories={categories} />
      </div>
    </div>
  )
}
