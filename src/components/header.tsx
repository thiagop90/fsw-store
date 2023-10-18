'use client'

import { useState } from 'react'
import {
  Home,
  ListOrdered,
  LogIn,
  LogOut,
  MenuIcon,
  Percent,
  ShoppingCart,
} from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from './ui/sheet'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Separator } from './ui/separator'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function Header() {
  const { status, data } = useSession()
  const pathname = usePathname()

  const handleLoginClick = async () => {
    await signIn('google')
  }

  const handleLogoutClick = async () => {
    await signOut()
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b bg-background p-5">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-4 flex flex-col gap-2">
            {status === 'authenticated' && (
              <Card className="space-y-3 p-4">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {data.user?.name?.[0].toUpperCase()}
                    </AvatarFallback>
                    <AvatarImage src={data?.user?.image ?? ''} />
                  </Avatar>
                  <div>
                    <p>Olá, {data.user?.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Boas compras!
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleLogoutClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Fazer Logout
                </Button>
              </Card>
            )}
            {status === 'unauthenticated' && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="justify-start gap-2"
              >
                <LogIn className="h-4 w-4" />
                Fazer Login
              </Button>
            )}
            {status === 'loading' && (
              <Card className="h-[130px] w-full animate-pulse bg-accent" />
            )}

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

      <Link href="/" className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </Link>

      <Button variant="outline" size="icon">
        <ShoppingCart className="h-5 w-5" />
      </Button>
    </header>
  )
}
