import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist_Mono } from 'next/font/google'
import { Syne } from 'next/font/google'
import { site } from '@/content'
import { Nav } from '@/components/dress/nav'
import { MusicPlayer } from '@/components/dress/music-player'
import { GlobalEffects } from '@/components/dress/global-effects'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.metaTitle,
  description: site.metaDescription,
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.metaTitle,
    description: site.metaDescription,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080808',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="film-grain-animated" />
        <Nav />
        <div className="pt-14">
          {children}
        </div>
        <MusicPlayer />
        <GlobalEffects />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
