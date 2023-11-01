'use client'

import { ChevronDownIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { FilterItem } from './filter-item'
import { Category } from '@prisma/client'
import { Skeleton } from '@/components/ui/skeleton'

type FilterItemDropdownProps = {
  categories: Category[]
}

export function FilterItemDropdown({ categories }: FilterItemDropdownProps) {
  const pathname = usePathname()
  const [active, setActive] = useState('')
  const [openSelect, setOpenSelect] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false)
      }
    }

    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    const currentCategory = categories.find(
      (category) => `/search/${category.slug}` === pathname,
    )
    if (currentCategory) {
      setActive(currentCategory.name)
    } else {
      setActive('All')
    }
  }, [pathname, categories])

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => {
          setOpenSelect(!openSelect)
        }}
        className="flex h-10 w-full cursor-pointer items-center justify-between rounded-lg border px-4 py-2 text-sm"
      >
        {!active ? <Skeleton className="h-5 w-16" /> : <>{active}</>}
        <ChevronDownIcon className="h-4 w-4" />
      </div>
      {openSelect && (
        <div
          onClick={() => {
            setOpenSelect(false)
          }}
          className="absolute z-30 mt-2 w-full overflow-hidden rounded-lg border bg-card p-4"
        >
          <FilterItem href="/search">All</FilterItem>
          {categories.map((category) => (
            <FilterItem href={`/search/${category.slug}`} key={category.id}>
              {category?.name}
            </FilterItem>
          ))}
        </div>
      )}
    </div>
  )
}
