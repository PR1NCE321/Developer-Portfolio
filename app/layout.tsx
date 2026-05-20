import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Prince Kakadiya | Web & Flutter Developer',
  description: 'Passionate Computer Science Engineering student specializing in Flutter and Web Development. Building modern web and mobile applications with clean UI, responsive design, and scalable development practices.',
  keywords: ['Web Developer', 'Flutter Developer', 'React', 'Node.js', 'Portfolio', 'Prince Kakadiya'],
  authors: [{ name: 'Prince Kakadiya' }],
  openGraph: {
    title: 'Prince Kakadiya | Web & Flutter Developer',
    description: 'Building modern web and mobile applications with clean UI, responsive design, and scalable development practices.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
