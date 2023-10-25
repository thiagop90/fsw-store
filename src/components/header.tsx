import Link from 'next/link'
import { SheetCart } from './cart/sheet-cart'
import { SheetMenu } from './menu/sheet-menu'
import { Hydrate } from './hydrate'

export function Header() {
  return (
    <header className="fixed top-0 z-40 w-full border-b bg-card p-6">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center">
          <SheetMenu />

          <Link href="/" className="ml-4 text-2xl font-bold tracking-tighter">
            <span className="text-primary">Acme</span> Store
          </Link>
        </div>

        <Hydrate>
          <SheetCart />
        </Hydrate>
      </div>
    </header>
  )
}
