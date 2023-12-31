import { create } from 'zustand'

type SearchBar = {
  openSearchBar: boolean
  toggleSearchBar: () => void
}

export const useSearchBar = create<SearchBar>((set, get) => ({
  openSearchBar: false,
  toggleSearchBar: () => set({ openSearchBar: !get().openSearchBar }),
}))
