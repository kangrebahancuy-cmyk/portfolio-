import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YOUR NAME — Creative Developer',
  description: 'Creative developer building modern websites, digital products, and interactive experiences.',
  openGraph: { title: 'YOUR NAME — Creative Developer', description: 'Creative developer building modern websites, digital products, and interactive experiences.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'YOUR NAME — Creative Developer', description: 'Creative developer building modern websites, digital products, and interactive experiences.' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}