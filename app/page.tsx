'use client'

import { motion } from 'framer-motion'

import { VideoPlayer } from '@/components'
import { MainContainer } from '@/layouts'

const Home = () => {
  return (
    <MainContainer>
      <div className='space-y-5 pb-10'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
          className='flex flex-col whitespace-nowrap text-center text-5xl md:text-9xl'
        >
          Bem-vindos à
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
            className='bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-5xl font-medium text-transparent md:text-9xl'
          >
            Black Studios
          </motion.span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className='text-center text-4xl font-light text-zinc-200 md:text-7xl'
        >
          Produtora audiovisual
        </motion.h2>
      </div>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        aria-label='Vídeo de apresentação da Black Studios'
        className='flex justify-center pb-10'
      >
        <VideoPlayer />
      </motion.main>
    </MainContainer>
  )
}

export default Home
