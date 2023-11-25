import Link from 'next/link'
import { SheetCart } from './cart/sheet-cart'
import { SheetMenu } from './menu/sheet-menu'
import { Hydrate } from './hydrate'
import { SearchBar } from './search-bar'
import Image from 'next/image'
import { Flower, Gamepad, Squirrel, Store } from 'lucide-react'

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
          <SheetMenu />
        </div>
        <div className="flex md:w-1/3">
          <Link
            href="/"
            className="flex w-full items-center justify-center md:mr-2 md:w-auto lg:mr-6"
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border bg-card">
              <Flower strokeWidth={1.5} className="h-5 w-5" />
            </div>
            <div className="ml-2 hidden flex-none font-semibold uppercase lg:block">
              FSW <span>Store</span>
            </div>
          </Link>
          <ul className="hidden gap-6 font-medium md:flex md:items-center">
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
        <div className="flex w-full justify-center sm:relative lg:mx-auto lg:w-1/3">
          <SearchBar />
        </div>
        <div className="flex justify-end lg:w-1/3">
          <Hydrate>
            <SheetCart />
          </Hydrate>
        </div>
      </div>
    </header>
  )
}
