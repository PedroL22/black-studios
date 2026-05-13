import { Metadata } from 'next'

import { HomePage } from '~/components/Home/HomePage'

export const metadata: Metadata = {
  title: 'Black Studios | Produtora audiovisual',
  description: 'Black Studios é uma produtora audiovisual focada em conteúdo dinâmico e criativo para redes sociais.',
}

export default function Home() {
  return <HomePage />
}
