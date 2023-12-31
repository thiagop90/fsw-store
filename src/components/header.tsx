import Link from 'next/link'
import { SheetCart } from './cart/sheet-cart'
import { PopoverMenu } from './menu/popover-menu'
import { Hydrate } from './hydrate'
import { SearchBar } from './search-bar'
import { Computer, Search } from 'lucide-react'

const links = [
  { href: '/search', label: 'All' },
  { href: '/search/mices', label: 'Mices' },
  { href: '/search/keyboards', label: 'Keyboards' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/75 backdrop-blur">
      <div className="flex h-16 items-center gap-3 px-4 lg:px-6">
        <div className="block flex-none md:hidden">
          <PopoverMenu />
        </div>
        <div className="flex md:w-1/3">
          <Link
            href="/"
            className="w-fulL flex items-center justify-center md:mr-3 md:w-auto lg:mr-6"
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border bg-card">
              <Computer strokeWidth={1.5} className="h-5 w-5" />
            </div>
            <div className="ml-3 hidden flex-none font-semibold uppercase md:hidden lg:block">
              THG <span>Store</span>
            </div>
          </Link>
          <ul className="hidden gap-4 font-medium sm:gap-6 md:flex md:items-center">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-end lg:mx-auto lg:w-1/3 lg:justify-center">
          <SearchBar />
        </div>
        <div className="flex justify-end gap-3 lg:w-1/3">
          {/* <SearchMobile /> */}
          <Hydrate>
            <SheetCart />
          </Hydrate>
        </div>
      </div>
    </header>
  )
}
