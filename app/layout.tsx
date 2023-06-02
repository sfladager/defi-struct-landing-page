import './globals.css'
import { Raleway } from 'next/font/google'
import { Inter as FontSans } from 'next/font/google'
import { Metadata } from 'next'

import RootProvider from '@/components/providers/root-provider'
import { cn } from '@/lib/utils/cn'
import { siteConfig } from '@/config/site'

const url = 'http://localhost:3000'
const ogUrl = new URL(`${url}/api/og`)

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.description}`,
  description: siteConfig.description,
  icons: {
    icon: '@/public/favicon.ico',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: url?.toString(),
    images: [ogUrl.toString()],
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [ogUrl.toString()],
  },
}

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '600', '700', '800', '900'],
  variable: '--raleway-font',
})

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${raleway.variable}`}>
      <body className={cn('min-h-screen bg-secondary-dark font-sans text-primary-dark antialiased', fontSans.variable)}>
          <RootProvider>{children}</RootProvider>
        </body>
    </html>
  )
}
