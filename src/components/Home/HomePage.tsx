'use client'

import { domAnimation, LazyMotion, m, useReducedMotion } from 'framer-motion'

import { VideoPlayer } from '~/components/Home/VideoPlayer'
import { MainContainer } from '~/layouts/MainContainer'

export const HomePage = () => {
  const reduceMotion = useReducedMotion()
  const hidden = reduceMotion ? { opacity: 1 } : { opacity: 0 }
  const visible = { opacity: 1 }
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }

  return (
    <LazyMotion features={domAnimation}>
      <MainContainer>
        <div className='space-y-5 pb-10'>
          <m.h1
            initial={hidden}
            animate={visible}
            transition={{ ...transition, delay: 0 }}
            className='flex flex-col whitespace-nowrap text-center text-5xl md:text-9xl'
          >
            Bem-vindos à
            <m.span
              initial={hidden}
              animate={visible}
              transition={{ ...transition, delay: reduceMotion ? 0 : 0.05 }}
              className='text-5xl font-medium text-zinc-300 md:text-9xl'
            >
              Black Studios
            </m.span>
          </m.h1>

          <m.h2
            initial={hidden}
            animate={visible}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.1 }}
            className='text-center text-4xl font-light text-zinc-200 md:text-7xl'
          >
            Produtora audiovisual
          </m.h2>
        </div>

        <m.main
          initial={hidden}
          animate={visible}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.2 }}
          aria-label='Vídeo de apresentação da Black Studios'
          className='flex justify-center pb-10'
        >
          <VideoPlayer />
        </m.main>
      </MainContainer>
    </LazyMotion>
  )
}
