'use client'

import { useSearchBar } from '@/store/search-bar'
import Link from 'next/link'
import { Computer } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/search', label: 'All' },
  { href: '/search/mices', label: 'Mices' },
  { href: '/search/keyboards', label: 'Keyboards' },
]

export function NavHeader() {
  const { isOpen } = useSearchBar()

  return (
    <div className={cn('md:flex md:w-1/3', { hidden: isOpen })}>
      <Link
        href="/"
        className="w-fulL flex items-center justify-center md:mr-3 md:w-auto lg:mr-6"
      >
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border bg-card">
          <Computer strokeWidth={1.5} className="h-5 w-5" />
        </div>
        <div className="ml-3 flex-none font-semibold uppercase md:hidden lg:block">
          THG <span>Store</span>
        </div>
      </Link>
      <ul className="hidden gap-4 font-medium sm:gap-6 md:flex md:items-center">
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
  )
}
