'use client'

import { useEffect, useState } from 'react'
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
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Separator } from './ui/separator'
import { toast } from './ui/use-toast'
import { ToastAction } from './ui/toast'

export function Header() {
  const { status, data } = useSession()

  // useEffect(() => {
  //   if (status === 'authenticated') {
  //     toast({
  //       title: 'Sucesso ao entrar.',
  //       description: 'Você entrou usando sua conta Google.',
  //       action: <ToastAction altText="ok">Ok</ToastAction>,
  //     })
  //   }
  // }, [status])

  const handleLoginClick = async () => {
    await signIn('google')
  }

  const handleLogoutClick = async () => {
    await signOut()
  }

  return (
    <header className="flex items-center justify-between border-b p-[1.875rem]">
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

            <Separator className="my-3" />

            <Button variant="outline" className="w-full justify-start gap-2">
              <Home className="h-4 w-4" />
              Inicio
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <Percent className="h-4 w-4" />
              Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrdered className="h-4 w-4" />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button variant="outline" size="icon">
        <ShoppingCart className="h-5 w-5" />
      </Button>
    </header>
  )
}
