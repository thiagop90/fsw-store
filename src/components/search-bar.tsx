'use client'

import { searchProducts } from '@/lib/actions'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const onSearch = (event: FormEvent) => {
    event.preventDefault()

    const encodedSearchQuery = encodeURI(searchQuery)
    router.push(`/search?q=${encodedSearchQuery}`)
  }

  return (
    <form
      onSubmit={onSearch}
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
    >
      <Input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search for products..."
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <Search className="h-4" />
      </div>
    </form>
  )
}
