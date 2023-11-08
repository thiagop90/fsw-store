'use client'

import { useSearchParams } from 'next/navigation'
import { FilterItem } from './filter-item'

export function FilterList() {
  const search = useSearchParams()

  const appendSortToUrl = (sortParam: string) => {
    const searchQuery = search ? search.get('query') : null
    const currentUrl = `${searchQuery ? `?query=${searchQuery}` : ''}`
    const separator = currentUrl.includes('?') ? '&' : '?'
    return currentUrl + separator + sortParam
  }

  return (
    <div className="flex flex-col">
      <div className="">
        <h3 className="text-sm text-muted-foreground">Sort by</h3>
        <FilterItem href={appendSortToUrl('')}>Relevance</FilterItem>
        <FilterItem href={appendSortToUrl('sort=price-asc')}>
          Price: Low to high
        </FilterItem>
        <FilterItem href={appendSortToUrl('sort=price-desc')}>
          Price: High to low
        </FilterItem>
      </div>
      {/* <div className="md:hidden">
        <FilterListDropdown />
      </div> */}
    </div>
  )
}
