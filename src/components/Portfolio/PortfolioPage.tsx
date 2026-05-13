'use client'

import { domAnimation, LazyMotion, m, useReducedMotion } from 'framer-motion'

import { GridContent } from '~/components/Portfolio/GridContent'
import { MainContainer } from '~/layouts/MainContainer'

export const PortfolioPage = () => {
  const reduceMotion = useReducedMotion()
  const slideHidden = reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }
  const slideVisible = { opacity: 1, x: 0 }
  const fadeHidden = reduceMotion ? { opacity: 1 } : { opacity: 0 }
  const fadeVisible = { opacity: 1 }
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }

  return (
    <LazyMotion features={domAnimation}>
      <MainContainer>
        <div className='space-y-4 pb-20'>
          <m.h1
            initial={slideHidden}
            animate={slideVisible}
            transition={{ ...transition, delay: 0 }}
            className='text-6xl font-medium'
          >
            Portfólio
          </m.h1>

          <m.p
            initial={slideHidden}
            animate={slideVisible}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.05 }}
            className='text-xl text-zinc-200'
          >
            Esses são os clientes que fazem/fizeram parte da nossa produtora.
          </m.p>

          <m.p
            initial={slideHidden}
            animate={slideVisible}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.1 }}
            className='text-xl text-zinc-200'
          >
            Sempre procuramos entregar um conteúdo com uma edição dinâmica e criativa para qualquer rede social.
          </m.p>
        </div>

        <div className='flex justify-center'>
          <m.main
            initial={fadeHidden}
            animate={fadeVisible}
            transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 0.15, ease: 'easeOut' }}
            aria-label='Clientes da Black Studios'
            className='grid grid-cols-2 items-center justify-center gap-6 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-16'
          >
            <GridContent />
          </m.main>
        </div>
      </MainContainer>
    </LazyMotion>
  )
}
