'use client'

import { Card } from '../ui/card'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogIn, LogOut } from 'lucide-react'
import Image from 'next/image'

export function StatusAuthenticated() {
  const { status, data } = useSession()

  const handleLoginClick = async () => {
    await signIn('google')
  }

  const handleLogoutClick = async () => {
    await signOut()
  }

  return (
    <>
      {status === 'unauthenticated' && (
        <Button onClick={handleLoginClick} variant="outline" className="gap-2">
          <Image
            src="/google-logo.svg"
            alt="Google Logo"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          Continue with Google
        </Button>
      )}

      {status === 'loading' && (
        <Card className="h-[130px] w-full animate-pulse bg-accent" />
      )}

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
              <p className="text-sm text-muted-foreground">Boas compras!</p>
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
    </>
  )
}
