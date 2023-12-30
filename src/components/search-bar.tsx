'use client'

import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { FormEvent, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchBar() {
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

  return (
    <form
      onSubmit={onSearch}
      className="relative flex h-10 flex-1 rounded-lg border bg-background sm:max-w-[550px]"
    >
      <div className="relative flex w-full items-center">
        <div className="absolute inset-y-0 left-0 ml-3 flex items-center">
          <Search className="h-5 w-5" />
        </div>

        <Input
          type="search"
          autoCorrect="off"
          spellCheck="false"
          value={searchQuery || ''}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search for products..."
          className="border-0 bg-transparent pl-11"
          ref={inputRef}
        />
      </div>
    </form>
  )
}
