import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { AuthProvider } from '@/app/provider-auth'
import { Toaster } from '@/components/ui/toaster'
import { Footer } from '@/components/footer'
import { QueryWrapper } from './query-wrapper'

const inter = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: {
    default: 'FSW Store',
    template: '%s |  FSW Store',
  },
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
        <body className={`${inter.className}`}>
          <AuthProvider>
            <Navbar />
            <main className="mt-[4.75rem] min-h-[100svh] px-4">{children}</main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </body>
      </QueryWrapper>
    </html>
  )
}
