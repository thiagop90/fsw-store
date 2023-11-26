'use client'

import { useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function FilterList() {
  const params = useParams()
  const search = useSearchParams()
  const searchQuery = search ? search.get('query') : null
  const sortQuery = search ? search.get('sort') : null
  const slugParam = params.slug || ''

  const buildSortUrl = (sortParam: string) => {
    const currentUrl = searchQuery
      ? `?query=${searchQuery}`
      : `/search/${slugParam}`
    const separator = currentUrl.includes('?') ? '&' : '?'
    return sortParam ? `${currentUrl}${separator}sort=${sortParam}` : currentUrl
  }

  const sortOptions = [
    { label: 'Price: Low to High', param: 'price-asc' },
    { label: 'Price: High to Low', param: 'price-desc' },
  ]

  return (
    <div className="flex flex-col">
      <h3 className="text-sm text-muted-foreground">Sort by</h3>
      <div className="flex gap-3 md:flex-col md:gap-0">
        <li className="mt-2">
          <Link
            className={cn('w-full hover:underline hover:underline-offset-4', {
              'underline underline-offset-4': sortQuery === null,
            })}
            href={buildSortUrl('')}
          >
            Relevance
          </Link>
        </li>
        {sortOptions.map((option) => (
          <li className="mt-2 shrink-0" key={option.param}>
            <Link
              className={cn('w-full hover:underline hover:underline-offset-4', {
                'underline underline-offset-4': sortQuery === option.param,
              })}
              href={buildSortUrl(option.param)}
            >
              {option.label}
            </Link>
          </li>
        ))}
      </div>
    </div>
  )
}
