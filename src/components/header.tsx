import { SheetCart } from './cart/sheet-cart'
import { PopoverMenu } from './menu/popover-menu'
import { Hydrate } from './hydrate'
import { SearchBar } from './search-bar'
import { NavHeader } from './nav-header'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/75 backdrop-blur">
      <div className="flex h-16 items-center gap-3 px-4 lg:px-6">
        <div className="block flex-none md:hidden">
          <PopoverMenu />
        </div>
        <NavHeader />
        <div className="flex flex-1 justify-end lg:mx-auto lg:w-1/3 lg:justify-center">
          <SearchBar />
        </div>
        <div className="flex justify-end gap-3 lg:w-1/3">
          <Hydrate>
            <SheetCart />
          </Hydrate>
        </div>
      </div>
    </header>
  )
}
