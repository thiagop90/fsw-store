'use client'

import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'

export function SearchBar() {
  const search = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(
    search ? search.get('query') : null,
  )
  const router = useRouter()

  const onSearch = (event: FormEvent) => {
    event.preventDefault()

    const encodedSearchQuery = encodeURI(searchQuery || '')
    if (searchQuery) {
      router.push(`/search?query=${encodedSearchQuery}`)
    } else {
      router.push('/search')
    }
  }

  return (
    <form
      onSubmit={onSearch}
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
    >
      <Input
        type="text"
        value={searchQuery || ''}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search for products..."
      />
      <div className="absolute inset-y-0 right-0 mr-3 flex items-center">
        <Search className="h-4" />
      </div>
    </form>
  )
}
