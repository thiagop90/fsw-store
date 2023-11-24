'use client'

import { Input } from './ui/input'
import { History, Search, Trash2 } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'
import { useSearchStore } from '@/store/search'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

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

  const openModal = () => {
    setIsModalOpen(true)
  }

  const handleRecentSearchClick = (query: string) => {
    setSearchQuery(query)
    addRecentSearch(query)
    setIsModalOpen(false)
  }

  return (
    <form
      action="/search"
      onSubmit={onSearch}
      className={`${isModalOpen ? '' : ''} relative w-full max-w-[550px]`}
    >
      <div className="relative w-full">
        <Input
          autoCorrect="off"
          spellCheck="false"
          type="text"
          value={searchQuery || ''}
          onChange={(event) => setSearchQuery(event.target.value)}
          onFocus={openModal}
          onBlur={() => setIsModalOpen(false)}
          placeholder="Search for products..."
          className={`${isModalOpen && 'border sm:rounded-b-none'}`}
        />
        <div className="absolute inset-y-0 right-0 mr-3 flex items-center">
          <Search className="h-4" />
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* <button
              type="button"
              className="ml-3 sm:hidden"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button> */}
            <motion.div
              // initial={{ y: -100 }}
              // animate={{ y: 0, transition: { duration: 0.3 } }}
              // exit={{ y: -100 }}
              className="fixed inset-x-0 top-16 -z-10 rounded-b-md border border-t-0 bg-card sm:absolute sm:top-full"
            >
              <ul className="py-4 pb-2">
                {recentSearches.length === 0 ? (
                  <>
                    <h2 className="px-4 pb-1 text-muted-foreground">
                      Suggestions
                    </h2>
                    {suggestions.map((suggestion) => (
                      <li key={suggestion.query}>
                        <Link
                          href={`/search?query=${suggestion.query}`}
                          onClick={() =>
                            handleRecentSearchClick(suggestion.query)
                          }
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </form>
  )
}
