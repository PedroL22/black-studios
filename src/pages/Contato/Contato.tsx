import { motion } from 'framer-motion'

import { MainContainer } from '@components/MainContainer'
import { SocialMedia } from './components/SocialMedia'

import { EnvelopeSimple, InstagramLogo, TwitterLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'

export const Contato = () => {
  return (
    <MainContainer>
      <div className='space-y-4 pb-10'>
        <motion.h2
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
          className='text-6xl font-medium'
        >
          Contato
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          className='text-xl text-zinc-200'
        >
          Se quiser fazer parte da Black Studios e agregar na qualidade do seu conteúdo, entre em contato com a gente!
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className='space-y-3'
      >
        <SocialMedia
          icon={
            <EnvelopeSimple
              color='#FAFAFA'
              weight='regular'
              size={28}
            />
          }
          name='matheus2707.profissional@gmail.com'
          url='mailto:matheus2707.profissional@gmail.com'
        />
        <SocialMedia
          icon={
            <WhatsappLogo
              color='#25D366'
              weight='regular'
              size={28}
            />
          }
          name='+55 (12) 99754-8203'
          url='https://api.whatsapp.com/send?phone=5512997548203'
        />
        <SocialMedia
          icon={
            <TwitterLogo
              color='#1DA1F2'
              weight='regular'
              size={28}
            />
          }
          name='Twitter'
          url='https://twitter.com/mthsoliveiro'
        />
        <SocialMedia
          icon={
            <InstagramLogo
              color='#C13584'
              weight='regular'
              size={28}
            />
          }
          name='Instagram'
          url='https://www.instagram.com/mthsoliveiro'
        />
        <SocialMedia
          icon={
            <YoutubeLogo
              color='#FF0000'
              weight='regular'
              size={28}
            />
          }
          name='YouTube'
          url='https://www.youtube.com/@matheusoliveiro3834'
        />
      </motion.div>
    </MainContainer>
  )
}
