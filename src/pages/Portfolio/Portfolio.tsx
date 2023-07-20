import { motion } from 'framer-motion'

import { MainContainer } from '@components/MainContainer'
import { PortfolioClient } from './components/PortfolioClient'

export const Portfolio = () => {
  return (
    <MainContainer>
      <div className='space-y-4 pb-20'>
        <motion.h2
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
          className='text-6xl font-medium'
        >
          Portfólio
        </motion.h2>
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
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className='grid grid-cols-2 items-center justify-center gap-6 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-16'
        >
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
          <PortfolioClient
            name='imaginago'
            image='https://yt3.googleusercontent.com/EX2aqD1pd6LthGe_Grx5BhVPSXMBiRXzq6cpnrl7AuJqUBfgF5l8VvpNfxUBVI5m2yjhoZE_Xg=s900-c-k-c0x00ffffff-no-rj'
            url=''
          />
        </motion.div>
      </div>
    </MainContainer>
  )
}
