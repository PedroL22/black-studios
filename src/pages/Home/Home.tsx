import { motion } from 'framer-motion'

import { MainContainer } from '@components/MainContainer'

export const Home = () => {
  return (
    <MainContainer>
      <div className='space-y-5 pb-10'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
          className='flex flex-col whitespace-nowrap text-center text-5xl md:text-9xl'
        >
          Bem-vindos à{' '}
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className='flex justify-center pb-10'
      >
        <iframe
          src='https://www.youtube.com/embed/Rl8oGtG-qNM'
          title='vídeo de apresentação'
          allow='autoplay'
          allowFullScreen
          className='h-[175px] w-[320px] md:h-[480px] md:w-[768px]'
        />
      </motion.div>
    </MainContainer>
  )
}
