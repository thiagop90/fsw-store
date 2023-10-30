import Link from 'next/link'
import { SheetCart } from './cart/sheet-cart'
import { SheetMenu } from './menu/sheet-menu'
import { Hydrate } from './hydrate'
import { SearchBar } from './search-bar'

const links = [
  { href: '/search', label: 'All' },
  { href: '/search/mices', label: 'Mices' },
  { href: '/search/keyboards', label: 'Keyboards' },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 z-40 flex w-full items-center justify-between bg-background/80 p-4 backdrop-blur-xl lg:px-6">
      <div className="block flex-none md:hidden">
        <SheetMenu />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center text-xl font-bold md:w-auto lg:mr-6"
          >
            <span className="text-primary">FSW</span> Store
          </Link>
          <ul className="hidden gap-6  font-medium md:flex md:items-center">
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
        <div className="hidden justify-center md:flex md:w-1/3">
          <SearchBar />
        </div>
        <div className="flex justify-end md:w-1/3">
          <Hydrate>
            <SheetCart />
          </Hydrate>
        </div>
      </div>
    </nav>
  )
}
