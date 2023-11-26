import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { AuthProvider } from '@/app/provider-auth'
import { Toaster } from '@/components/ui/toaster'
import { Footer } from '@/components/footer'
import { QueryWrapper } from './query-wrapper'

const inter = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'THG Store',
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <QueryWrapper>
        <body className={`${inter.className} `}>
          <AuthProvider>
            <div id="wrapper">
              <Header />
              <main className="min-h-[100dvh] px-4">{children}</main>
              <Footer />
              <Toaster />
            </div>
          </AuthProvider>
        </body>
      </QueryWrapper>
    </html>
  )
}
