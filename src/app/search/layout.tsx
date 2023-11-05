import { Suspense } from 'react'
import { Categories } from './components/categories'
import { SearchBar } from '@/components/search-bar'
import { FilterList } from './components/filter-list'

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense>
      <div className="flex max-w-screen-xl flex-col gap-8 pb-4 sm:mx-auto md:flex-row">
        <div className="sticky top-[4.75rem] z-40 order-first -mx-4 bg-background/80 px-4 pb-2 backdrop-blur-xl md:hidden">
          <SearchBar />
        </div>
        <div className="w-full flex-none md:order-first md:max-w-[125px]">
          <Categories />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          {children}
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList />
        </div>
      </div>
    </Suspense>
  )
}
