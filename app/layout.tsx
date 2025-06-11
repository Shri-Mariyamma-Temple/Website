import type { Metadata } from 'next'
import './globals.css'
import TrishulSplash from '@/components/TrishulSplash'
export const metadata: Metadata = {
  title: 'Shri Mariyamma Temple',
  description: 'Shri Mariyamma Temple',
  generator: 'Shri Mariyamma Temple',
  icons: {
    icon: '/logo/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <TrishulSplash/>
        {children}
        </body>
    </html>
  )
}
