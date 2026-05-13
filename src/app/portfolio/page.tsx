import { Metadata } from 'next'

import { PortfolioPage } from '~/components/Portfolio/PortfolioPage'

export const metadata: Metadata = {
  title: 'Portfólio | Black Studios',
  description: 'Conheça clientes e projetos que fazem parte do portfólio da Black Studios.',
}

export default function Portfolio() {
  return <PortfolioPage />
}
