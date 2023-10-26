'use client'

import { Home, ListOrdered, MenuIcon, Percent, X } from 'lucide-react'
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
import { useState } from 'react'
import { useCartStore } from '@/lib/cart'

export function SheetMenu() {
  const pathname = usePathname()
  const { isOpen } = useCartStore()

  return (
    <Sheet>
      <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background transition-colors hover:bg-accent hover:text-accent-foreground">
        <div className="pointer-events-auto">
          <MenuIcon
            className={cn(
              'h-5 w-5 rotate-0 scale-100 transition-all duration-300',
              {
                '-rotate-90 scale-0': !!isOpen,
              },
            )}
          />
          <X
            className={cn(
              'absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300',
              {
                'rotate-0 scale-100': isOpen,
              },
            )}
          />
        </div>
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
