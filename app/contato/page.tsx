'use client'

import { motion } from 'framer-motion'

import { SocialMedia } from '@/components/Contato'
import { MainContainer } from '@/layouts'

import { EnvelopeSimple, InstagramLogo, TwitterLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'

export default function Contato() {
  return (
    <MainContainer>
      <div className='space-y-4 pb-10'>
        <motion.h1
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
          className='text-6xl font-medium'
        >
          Contato
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          className='text-xl text-zinc-200'
        >
          Se quiser fazer parte da Black Studios e agregar na qualidade do seu conteúdo, entre em contato com a gente!
        </motion.p>
      </div>

      <motion.main
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        aria-label='Redes sociais da Black Studios'
        className='space-y-3'
      >
        <SocialMedia
          icon={
            <EnvelopeSimple
              color='#FAFAFA'
              weight='regular'
              size={28}
              aria-hidden
            />
          }
          name='blackkstudioss@gmail.com'
          url='mailto:blackkstudioss@gmail.com'
        />

        <SocialMedia
          icon={
            <WhatsappLogo
              color='#25D366'
              weight='regular'
              size={28}
              aria-hidden
            />
          }
          name='+55 12 98867-1443'
          url='https://api.whatsapp.com/send?phone=5512988671443'
        />

        <SocialMedia
          icon={
            <TwitterLogo
              color='#1DA1F2'
              weight='regular'
              size={28}
              aria-hidden
            />
          }
          name='Twitter'
          url='https://twitter.com/BlackStudioss_'
        />

        <SocialMedia
          icon={
            <InstagramLogo
              color='#C13584'
              weight='regular'
              size={28}
              aria-hidden
            />
          }
          name='Instagram'
          url='https://www.instagram.com/blackstudioss_/'
        />

        <SocialMedia
          icon={
            <YoutubeLogo
              color='#FF0000'
              weight='regular'
              size={28}
              aria-hidden
            />
          }
          name='YouTube'
          url='https://www.youtube.com/channel/UCzMgVvT8QIOoEibEyADik2w'
        />
      </motion.main>
    </MainContainer>
  )
}
