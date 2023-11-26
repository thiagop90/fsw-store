import { Suspense } from 'react'
import { Categories } from './components/categories'
import { SearchBar } from '@/components/search-bar'
import { FilterList } from './components/filter-list'

export const metadata = {
  title: {
    default: 'Search | THG Store',
    template: '%s |  THG Store',
  },
}
export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense>
      <div className="flex max-w-screen-xl flex-col gap-8 pb-4 sm:mx-auto md:flex-row">
        <div className="h-full w-full flex-none md:sticky md:top-16 md:z-40 md:order-first md:max-w-[125px]">
          <Categories />
        </div>
        <div className=" order-last min-h-screen w-full md:order-none">
          {children}
        </div>
        <div className="order-none h-full flex-none md:sticky md:top-16 md:z-40 md:order-last md:w-[135px]">
          <FilterList />
        </div>
      </div>
    </Suspense>
  )
}
