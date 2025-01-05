import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'John Doe - Software Engineer',
  description: 'Personal portfolio website of John Doe, a Software Engineer specializing in full-stack development.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        geist.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

