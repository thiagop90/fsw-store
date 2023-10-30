'use client'

import { searchProducts } from '@/lib/actions'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <form
      action={searchProducts}
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
    >
      <Input
        type="text"
        name="search"
        placeholder="Search for products..."
        autoComplete="off"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <Search className="h-4" />
      </div>
    </form>
  )
}
