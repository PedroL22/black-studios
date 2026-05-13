'use client'

import { domAnimation, LazyMotion, m, useReducedMotion } from 'framer-motion'

import { SocialMedia } from '~/components/Contato/SocialMedia'
import { MainContainer } from '~/layouts/MainContainer'

import { EnvelopeSimple, InstagramLogo, TwitterLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'

export const ContatoPage = () => {
  const reduceMotion = useReducedMotion()
  const hidden = reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }
  const visible = { opacity: 1, x: 0 }
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }

  return (
    <LazyMotion features={domAnimation}>
      <MainContainer>
        <div className='space-y-4 pb-10'>
          <m.h1
            initial={hidden}
            animate={visible}
            transition={{ ...transition, delay: 0 }}
            className='text-6xl font-medium'
          >
            Contato
          </m.h1>

          <m.p
            initial={hidden}
            animate={visible}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.05 }}
            className='text-xl text-zinc-200'
          >
            Se quiser fazer parte da Black Studios e agregar na qualidade do seu conteúdo, entre em contato com a gente!
          </m.p>
        </div>

        <m.main
          initial={hidden}
          animate={visible}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.1 }}
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
        </m.main>
      </MainContainer>
    </LazyMotion>
  )
}
