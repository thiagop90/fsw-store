import type { Metadata } from 'next'
import { Gabarito } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { AuthProvider } from '@/providers/auth'
import { Toaster } from '@/components/ui/toaster'
import { Footer } from '@/components/footer'

const inter = Gabarito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="mt-20 min-h-[100svh]">{children}</main>
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
