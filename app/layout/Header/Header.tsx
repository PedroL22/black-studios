import Link from 'next/link'

import { DesktopHeader, MobileHeader } from './components'

export const Header = () => {
  return (
    <header className='flex h-16 items-center justify-center bg-zinc-950 text-zinc-50'>
      <nav className='flex w-full max-w-screen-xl justify-between p-5'>
        <Link
          href='/'
          className='duration-250 flex items-center font-medium transition-all ease-in hover:text-zinc-300'
        >
          Black Studios
        </Link>

        <MobileHeader />
        <DesktopHeader />
      </nav>
    </header>
  )
}
