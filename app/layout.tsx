import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { Footer } from '@/layouts/Footer'
import { Header } from '@/layouts/Header'

import './globals.css'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Black Studios',
  description:
    'Bem-vindos à Black Studios - Sempre procuramos entregar um conteúdo com uma edição dinâmica e criativa para qualquer rede social.',
  keywords: 'editor de video, youtuber, agencia',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body className={`${inter.className} bg-zinc-900 text-zinc-50 antialiased`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
