'use client'

import { motion } from 'framer-motion'

import { PortfolioClient } from '@/components/Portfolio/PortfolioClient'
import { MainContainer } from '@/layouts'

const Portfolio = () => {
  return (
    <MainContainer>
      <div className='space-y-4 pb-20'>
        <motion.h1
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
          className='text-6xl font-medium'
        >
          Portfólio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          className='text-xl text-zinc-200'
        >
          Esses são os clientes que fazem parte da nossa produtora.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className='text-xl text-zinc-200'
        >
          Sempre procuramos entregar um conteúdo com uma edição dinâmica e criativa para qualquer rede social.
        </motion.p>
      </div>

      <div className='flex justify-center'>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
          aria-label='Clientes da Black Studios'
          className='grid grid-cols-2 items-center justify-center gap-6 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-16'
        >
          <PortfolioClient
            name='Imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url='https://www.youtube.com/@imaginago'
          />
        </motion.main>
      </div>
    </MainContainer>
  )
}

export default Portfolio
