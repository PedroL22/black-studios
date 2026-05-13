import { Metadata } from 'next'

import { ContatoPage } from '~/components/Contato/ContatoPage'

export const metadata: Metadata = {
  title: 'Contato | Black Studios',
  description: 'Entre em contato com a Black Studios por e-mail, WhatsApp e redes sociais.',
}

export default function Contato() {
  return <ContatoPage />
}
