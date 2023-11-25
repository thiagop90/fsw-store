'use client'

import { Input } from './ui/input'
import { History, Search, Trash2, X } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSearchStore } from '@/store/search'
import Link from 'next/link'
import { MagicMotion, MagicExit } from 'react-magic-motion'
import { motion, AnimatePresence } from 'framer-motion'

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
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleRecentSearchClick = (query: string) => {
    setSearchQuery(query)
    addRecentSearch(query)
    setIsModalOpen(false)
  }

  return (
    <MagicMotion>
      <form
        action="/search"
        onSubmit={onSearch}
        className={`${
          isModalOpen
            ? 'absolute inset-x-4 top-3 z-10 border-2 sm:static'
            : 'relative h-10'
        } flex flex-1 flex-col overflow-hidden rounded-lg border border-input`}
      >
        <div className="relative w-full">
          <Input
            autoCorrect="off"
            spellCheck="false"
            type="search"
            value={searchQuery || ''}
            onChange={(event) => setSearchQuery(event.target.value)}
            onFocus={toggleModal}
            // onBlur={toggleModal}
            placeholder="Search for products..."
            className="border-none"
          />
          <div className="absolute inset-y-0 right-0 mr-3 flex items-center">
            {isModalOpen ? (
              <button
                className="text-sm hover:underline"
                type="button"
                onClick={toggleModal}
              >
                Cancel
              </button>
            ) : (
              <Search className="h-4" />
            )}
          </div>
        </div>
        {isModalOpen && (
          <ul className="bg-card py-4 pb-2">
            {recentSearches.length === 0 ? (
              <>
                <h2 className="px-4 pb-1 text-muted-foreground">Suggestions</h2>
                {suggestions.map((suggestion) => (
                  <li key={suggestion.query}>
                    <Link
                      href={`/search?query=${suggestion.query}`}
                      onClick={() => handleRecentSearchClick(suggestion.query)}
                      className="flex flex-1 px-4 py-2 hover:bg-background"
                    >
                      {suggestion.query}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <>
                <h2 className="px-4 pb-1 text-muted-foreground">
                  Recent Searches
                </h2>
                {recentSearches.map((query) => (
                  <li
                    className="flex justify-between px-4 hover:bg-background"
                    key={query}
                  >
                    <Link
                      className="flex flex-1 items-center gap-2 py-2"
                      href={`/search?query=${query}`}
                      onClick={() => handleRecentSearchClick(query)}
                    >
                      <History className="h-4 w-4" />
                      {query}
                    </Link>
                    <button
                      type="button"
                      onClick={() => removeRecentSearch(query)}
                      className="text-primary hover:underline"
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </>
            )}
          </ul>
        )}
      </form>
    </MagicMotion>
  )
}
