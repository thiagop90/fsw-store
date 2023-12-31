'use client'

import { Home, Keyboard, LayoutGrid, Mouse, Search } from 'lucide-react'

import Link from 'next/link'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { PopoverClose } from '@radix-ui/react-popover'
import { SearchBar } from './search-bar'
import { Button } from './ui/button'

export function SearchMobile() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="mt-2 w-full ">
        <SearchBar />
      </PopoverContent>
    </Popover>
  )
}
