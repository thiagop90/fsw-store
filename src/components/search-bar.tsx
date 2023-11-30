'use client'

import { Input } from './ui/input'
import { History, Search, X } from 'lucide-react'
import { FormEvent, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSearchStore } from '@/store/search'
import Link from 'next/link'
import { motion } from 'framer-motion'

const suggestions = [
  { query: 'razer' },
  { query: 'logitech' },
  { query: 'redragon' },
  { query: '144 hz' },
  { query: 'mousepads' },
]

export function SearchBar() {
  const { recentSearches, addRecentSearch, removeRecentSearch } =
    useSearchStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
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
      addRecentSearch(searchQuery)
    } else {
      router.push('/search')
    }

    setIsModalOpen(false)
    inputRef.current?.blur()
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleSearchClick = (query: string) => {
    setSearchQuery(query)
    addRecentSearch(query)
    setIsModalOpen(false)
  }

  return (
    <>
      <motion.form
        onSubmit={onSearch}
        className={`${
          isModalOpen
            ? 'absolute inset-x-4 top-3 z-10 rounded-b-none  border-b-0 sm:static'
            : 'relative h-10'
        } flex flex-1 rounded-lg border bg-card sm:max-w-[550px]`}
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
            onFocus={toggleModal}
            placeholder="Search for products..."
            className="border-0 bg-transparent pl-11"
            ref={inputRef}
          />
          {isModalOpen && (
            <div className="absolute inset-y-0 right-0 mr-3 flex items-center">
              <button
                className="text-sm font-semibold text-primary hover:underline"
                type="button"
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </motion.form>
      {isModalOpen && (
        <ul className="absolute inset-x-4 top-[3.25rem] rounded-b-lg border border-t-0 bg-card sm:inset-x-0 sm:top-10 sm:mx-auto sm:max-w-[550px]">
          <div className="px-4 py-2">
            {recentSearches.length === 0 ? (
              <>
                <h2 className="mb-1 text-muted-foreground">Suggestions</h2>
                {suggestions.map((suggestion) => (
                  <li key={suggestion.query}>
                    <Link
                      href={`/search?query=${suggestion.query}`}
                      onClick={() => handleSearchClick(suggestion.query)}
                      className="-mx-4 flex flex-1 items-center gap-4 px-4 py-2 hover:bg-background"
                    >
                      <Search className="h-4 w-4 text-muted-foreground" />
                      {suggestion.query}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <>
                <h2 className="mb-1 text-muted-foreground">Recent searches</h2>
                {recentSearches.map((query) => (
                  <li
                    className="-mx-4 flex items-center justify-between px-4 hover:bg-background"
                    key={query}
                  >
                    <Link
                      className="flex flex-1 items-center gap-4 py-2"
                      href={`/search?query=${query}`}
                      onClick={() => handleSearchClick(query)}
                    >
                      <History className="h-4 w-4 text-muted-foreground" />
                      {query}
                    </Link>
                    <button
                      type="button"
                      onClick={() => removeRecentSearch(query)}
                      className="flex-none rounded-md border border-transparent p-1 text-primary hover:border-border hover:bg-card"
                    >
                      <X strokeWidth={2.5} className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </>
            )}
          </div>
        </ul>
      )}
    </>
  )
}
