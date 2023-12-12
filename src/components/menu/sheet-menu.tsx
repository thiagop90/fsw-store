'use client'

import { Keyboard, LayoutGrid, MenuIcon, Mouse } from 'lucide-react'
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
  { href: '/search', label: 'All', icon: <LayoutGrid className="h-5 w-5" /> },
  {
    href: '/search/mices',
    label: 'Mices',
    icon: <Mouse className="h-5 w-5" />,
  },
  {
    href: '/search/keyboards',
    label: 'Keyboards',
    icon: <Keyboard className="h-5 w-5" />,
  },
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

        <div className="mt-4 flex flex-col gap-8">
          <StatusAuthenticated />

          <ul className="flex w-full flex-col border-t py-6">
            {links.map((link, index) => (
              <SheetClose key={index} asChild>
                <Link
                  className="flex items-center gap-3 py-2 text-xl font-medium hover:text-muted-foreground"
                  href={link.href}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}
