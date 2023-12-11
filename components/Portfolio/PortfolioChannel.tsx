import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { ChannelEntity } from '@/entities/ContentEntity'

export const PortfolioChannel: FC<ChannelEntity> = ({ attributes }) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL?.replace('/api/', '')}${attributes.imagem.data.attributes.url}`

  return (
    <motion.a
      href={attributes.url}
      target='_blank'
      rel='noreferrer'
      whileHover={{ scale: 1.05, rotate: -2 }}
      whileTap={{ scale: 1.1, rotate: 0 }}
    >
      <Image
        src={imageUrl}
        alt='Foto do canal'
        width={300}
        height={300}
        className='h-36 w-36 rounded-xl object-cover md:h-44 md:w-44'
      />

      <h2
        aria-hidden
        className='pt-1 text-center text-lg'
      >
        {attributes.nome}
      </h2>
    </motion.a>
  )
}
