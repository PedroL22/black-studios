import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { ChannelEntity } from '@/entities/ContentEntity'

export const PortfolioChannel: FC<ChannelEntity> = ({ name, url, link_imagem }) => {
  return (
    <motion.a
      href={url}
      target='_blank'
      rel='noreferrer'
      whileHover={{ scale: 1.05, rotate: -2 }}
      whileTap={{ scale: 1.1, rotate: 0 }}
    >
      <Image
        src={link_imagem}
        alt='Foto do canal'
        width={300}
        height={300}
        className='h-36 w-36 rounded-xl object-cover md:h-44 md:w-44'
      />

      <h2
        aria-hidden
        className='pt-1 text-center text-lg'
      >
        {name}
      </h2>
    </motion.a>
  )
}
