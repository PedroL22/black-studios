'use client'

import { domAnimation, LazyMotion, m, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { ClientEntity } from '~/entities/ContentEntity'

export const PortfolioChannel: FC<ClientEntity> = ({ name, url }) => {
  const reduceMotion = useReducedMotion()

  return (
    <LazyMotion features={domAnimation}>
      <m.a
        href={url}
        target='_blank'
        rel='noreferrer'
        whileHover={reduceMotion ? undefined : { scale: 1.05, rotate: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 1.1, rotate: 0 }}
      >
        <Image
          src={`/${name}.jpg`}
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
      </m.a>
    </LazyMotion>
  )
}
