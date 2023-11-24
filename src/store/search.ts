import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SearchStore = {
  recentSearches: string[]
  addRecentSearch: (query: string) => void
  removeRecentSearch: (query: string) => void
}

export const useSearchStore = create<SearchStore>()(
  persist(
    (set) => ({
      recentSearches: [],

      addRecentSearch: (query: string) => {
        set((state) => {
          const updatedSearches = updateRecentSearches(
            query,
            state.recentSearches,
          )
          return { recentSearches: updatedSearches }
        })
      },

      removeRecentSearch: (query: string) => {
        set((state) => {
          const updatedSearches = state.recentSearches.filter(
            (search) => search !== query,
          )
          return { recentSearches: updatedSearches }
        })
      },
    }),
    { name: 'recent-searches' },
  ),
)

function updateRecentSearches(
  query: string,
  recentSearches: string[],
): string[] {
  const updatedSearches = [...recentSearches]
  const existingIndex = updatedSearches.findIndex((search) => search === query)

  if (existingIndex !== -1) {
    updatedSearches.splice(existingIndex, 1)
  }

  updatedSearches.unshift(query)

  const limitedSearches = updatedSearches.slice(0, 5)

  return limitedSearches
}
