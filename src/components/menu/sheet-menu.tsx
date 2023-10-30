'use client'

import { Home, MenuIcon, X } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'
import { Separator } from '../ui/separator'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { StatusAuthenticated } from './status-authenticated'
import { useCartStore } from '@/lib/cart'
import { SearchBar } from '../search-bar'

const links = [
  { href: '/search', label: 'All' },
  { href: '/search/mices', label: 'Mices' },
  { href: '/search/keyboards', label: 'Keyboards' },
]

export function SheetMenu() {
  const pathname = usePathname()
  const { isOpen } = useCartStore()

  return (
    <Sheet>
      <SheetTrigger className="inline-flex h-11 w-11 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-accent hover:text-accent-foreground">
        <div className="pointer-events-auto">
          <MenuIcon className="h-5 w-5" />
        </div>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader className="text-left text-lg font-semibold">
          Menu
        </SheetHeader>

        <div className="mt-4 flex flex-col gap-2">
          <StatusAuthenticated />

          <ul className="flex w-full flex-col">
            {links.map((link, index) => (
              <li
                key={index}
                className="py-2 text-xl font-medium hover:text-muted-foreground"
              >
                <SheetClose asChild>
                  <Link href={link.href}>{link.label}</Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}
