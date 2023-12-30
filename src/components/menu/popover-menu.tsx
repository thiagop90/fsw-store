'use client'

import { Home, Keyboard, LayoutGrid, Mouse } from 'lucide-react'

import Link from 'next/link'
import { StatusAuthenticated } from './status-authenticated'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
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

export function PopoverMenu() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="group relative h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-background transition-colors">
        <span
          className={cn(
            'absolute left-1/2 top-[calc(50%-6px)] h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rounded bg-foreground transition-all',
            { 'top-1/2 rotate-45': open },
          )}
        />
        <span
          className={cn(
            'absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rounded bg-foreground transition',
            { 'bg-transparent': open },
          )}
        />
        <span
          className={cn(
            'absolute left-1/2 top-[calc(50%+6px)] h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 bg-foreground transition-all',
            { 'top-1/2 -rotate-45': open },
          )}
        />
      </PopoverTrigger>

      <PopoverContent className="ml-4 mt-2 p-0">
        <nav className="lg:hidden">
          {/* <StatusAuthenticated /> */}

          {links.map((link, index) => (
            <Link
              key={index}
              className={cn(
                'flex w-full items-center gap-4 p-4 font-medium text-muted-foreground hover:bg-muted',
                { 'text-foreground': pathname === link.href },
              )}
              href={link.href}
            >
              <span>{link.icon}</span>
              <h3>{link.label}</h3>
            </Link>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  )
}