'use client'

import { Input } from './ui/input'
import { Search, X } from 'lucide-react'
import { FormEvent, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useSearchBar } from '@/store/search-bar'

export function SearchBar() {
  const { openSearchBar, toggleSearchBar } = useSearchBar()
  const search = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(
    search ? search.get('query') : null,
  )
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const onSearch = (event: FormEvent) => {
    event.preventDefault()

    const encodedSearchQuery = encodeURI(searchQuery || '')
    if (searchQuery) {
      router.push(`/search?query=${encodedSearchQuery}`)
    } else {
      router.push('/search')
    }
    inputRef.current?.blur()
  }

  const handleSearchBar = () => {
    toggleSearchBar()
    if (openSearchBar) {
      inputRef.current?.blur()
    } else {
      inputRef.current?.focus()
    }
  }

  return (
    <form
      onSubmit={onSearch}
      className={cn(
        'flex h-10 w-10 items-center overflow-hidden rounded-lg border bg-background transition-all duration-300 sm:max-w-[550px] md:w-full',
        {
          'w-full': openSearchBar,
        },
      )}
    >
      <button
        type="button"
        onClick={openSearchBar ? onSearch : handleSearchBar}
        className="flex h-10 w-10 shrink-0 items-center justify-center"
      >
        <Search className="h-5 w-5" />
      </button>
      <div
        className={cn(
          'flex flex-1 translate-x-full items-center transition-all duration-300 md:translate-x-0',
          {
            'translate-x-0': openSearchBar,
          },
        )}
      >
        <Input
          type="search"
          value={searchQuery || ''}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search for products..."
          className="border-0 bg-transparent pl-0"
          ref={inputRef}
        />
        <button
          type="button"
          onClick={handleSearchBar}
          className="mr-3 text-sm font-medium text-primary md:hidden"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
