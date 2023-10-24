'use client'

import { Home, ListOrdered, MenuIcon, Percent } from 'lucide-react'
import { Button } from '../ui/button'
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

export function SheetMenu() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader className="text-left text-lg font-semibold">
          Menu
        </SheetHeader>

        <div className="mt-4 flex flex-col gap-2">
          <StatusAuthenticated />

          <Separator className="my-3" />

          <SheetClose asChild>
            <Link
              href="/"
              className={cn(
                'flex w-full items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium',
                {
                  'pointer-events-none bg-primary': pathname === '/',
                },
              )}
            >
              <Home className="h-4 w-4" />
              Início
            </Link>
          </SheetClose>

          <Button variant="outline" className="w-full justify-start gap-2">
            <Percent className="h-4 w-4" />
            Ofertas
          </Button>
          <SheetClose asChild>
            <Link
              href="/catalog"
              className={cn(
                'flex w-full items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium',
                {
                  'pointer-events-none bg-primary': pathname === '/catalog',
                },
              )}
            >
              <ListOrdered className="h-4 w-4" />
              Catálogo
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
