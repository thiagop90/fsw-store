'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogOut, PackageSearch, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { PopoverClose } from '@radix-ui/react-popover'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Skeleton } from '../ui/skeleton'

export function StatusAuthenticated() {
  const pathname = usePathname()
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
        <div className="space-y-4 p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div>
              <p>Hello!</p>
              <p className="text-sm text-muted-foreground">
                Log in to your Google account.
              </p>
            </div>
          </div>

          <Button
            onClick={handleLoginClick}
            variant="outline"
            className="w-full gap-2"
          >
            <Image
              src="/google-logo.svg"
              alt="Google Logo"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            Continue with Google
          </Button>
        </div>
      )}

      {status === 'loading' && (
        <div className="flex gap-3 p-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-1">
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      )}

      {status === 'authenticated' && (
        <div>
          <div className="flex gap-3 p-4">
            <Avatar>
              <AvatarFallback>
                {data.user?.name?.[0].toUpperCase()}
              </AvatarFallback>
              <AvatarImage src={data?.user?.image ?? ''} />
            </Avatar>
            <div>
              <p>Hello, {data.user?.name}!</p>
              <p className="text-sm text-muted-foreground">Good shopping.</p>
            </div>
          </div>

          <PopoverClose asChild>
            <Link
              href="/orders"
              className={cn(
                'flex w-full items-center gap-4 p-4 text-muted-foreground hover:bg-muted',
                {
                  'pointer-events-none text-foreground': pathname === '/orders',
                },
              )}
            >
              <PackageSearch className="h-5 w-5" />
              My orders
            </Link>
          </PopoverClose>
          <button
            onClick={handleLogoutClick}
            className="flex w-full items-center gap-4 p-4 font-medium text-red-400 hover:bg-muted"
          >
            <LogOut className="h-4 w-4" />
            Log out of account
          </button>
        </div>
      )}
    </>
  )
}
