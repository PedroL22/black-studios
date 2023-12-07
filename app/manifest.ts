import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Black Studios',
    short_name: 'Black Studios',
    description:
      'Bem-vindos à Black Studios - Sempre procuramos entregar um conteúdo com uma edição dinâmica e criativa para qualquer rede social.',
    start_url: '/',
    display: 'standalone',
    background_color: '#18181B',
    theme_color: '#09090B',
    lang: 'pt-BR',
    icons: [
      {
        src: '/logo_small.png',
        purpose: 'any',
        sizes: '144x144',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: 'https://private-user-images.githubusercontent.com/40894497/288875528-96ba60b1-6482-4ccf-877c-31646d744f5c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE5Nzg4MDAsIm5iZiI6MTcwMTk3ODUwMCwicGF0aCI6Ii80MDg5NDQ5Ny8yODg4NzU1MjgtOTZiYTYwYjEtNjQ4Mi00Y2NmLTg3N2MtMzE2NDZkNzQ0ZjVjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA3VDE5NDgyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUwMDY0OTIzODFjYzVkYTU1MDJjZTllZTZlODNhZWRmZDUwZGZmNGIwODY0MjBkMjU5ODY1ZWNkOTAyNTVlNGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.UzPtJRPODP_3o43Vr0oftk7c6GixcUCUpf5M_rTrlS4',
        sizes: '1280x720',
        type: 'image/jpeg',
      },
    ],
  }
}
