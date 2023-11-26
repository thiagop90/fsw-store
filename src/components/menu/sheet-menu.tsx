'use client'

import { MenuIcon } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'

import Link from 'next/link'
import { StatusAuthenticated } from './status-authenticated'
import { useEffect, useState } from 'react'
const links = [
  { href: '/search', label: 'All' },
  { href: '/search/mices', label: 'Mices' },
  { href: '/search/keyboards', label: 'Keyboards' },
]

export function SheetMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const mainElement = document.getElementById('wrapper')
    if (mainElement) {
      mainElement.style.transition = 'transform 0.3s ease'
      mainElement.style.transform = open ? 'translateX(320px)' : 'translateX(0)'
    }
  }, [open])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="group relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-card transition-colors">
        <MenuIcon className="h-5 w-5 transition-colors group-hover:text-primary" />
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
