'use client'

import { AnimatePresence, domAnimation, LazyMotion, m, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'

import { List, X } from '@phosphor-icons/react'

export const MobileHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileTap={reduceMotion ? undefined : { scale: 0.5 }}
        transition={{ duration: reduceMotion ? 0 : 0.25, delay: 0, ease: 'easeOut' }}
        className='z-20 text-zinc-50 md:hidden'
      >
        {isOpen ? (
          <X
            size={28}
            weight='bold'
            onClick={() => setIsOpen(false)}
            className='cursor-pointer'
          />
        ) : (
          <List
            size={28}
            weight='fill'
            onClick={() => setIsOpen(true)}
            className='cursor-pointer'
          />
        )}
      </m.div>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: reduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, delay: 0, ease: 'easeOut' }}
            className='fixed bottom-0 left-0 z-10 flex h-screen w-screen select-none flex-col items-center justify-center gap-y-6 bg-[rgba(0,0,0,0.5)] pt-5 backdrop-blur-md'
          >
            <Link
              href='/'
              onClick={() => setIsOpen(false)}
              className={`${pathname == '/' && 'text-zinc-400'} text-3xl`}
            >
              Home
            </Link>

            <Link
              href='/portfolio'
              onClick={() => setIsOpen(false)}
              className={`${pathname == '/portfolio' && 'text-zinc-400'} text-3xl`}
            >
              Portfólio
            </Link>

            <Link
              href='/contato'
              onClick={() => setIsOpen(false)}
              className={`${pathname == '/contato' && 'text-zinc-400'} text-3xl`}
            >
              Contato
            </Link>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}
