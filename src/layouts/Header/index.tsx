import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { DesktopHeader } from './components/DesktopHeader'
import { MobileHeader } from './components/MobileHeader'

export const Header: FC = () => {
  return (
    <header className='flex h-16 items-center justify-center bg-zinc-950 text-zinc-50'>
      <nav className='flex w-full max-w-screen-xl justify-between p-5'>
        <Link
          href='/'
          className='duration-250 flex items-center font-medium transition-all ease-in hover:text-zinc-300'
        >
          <Image
            src='/logo.png'
            alt='Logo Black Studios'
            width={50}
            height={50}
            className='h-7 w-7 object-cover'
          />
        </Link>

        <MobileHeader />
        <DesktopHeader />
      </nav>
    </header>
  )
}
