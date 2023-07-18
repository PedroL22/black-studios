import { Link } from 'react-router-dom'

import { Dropdown } from './components'

export const Header = () => {
  return (
    <header className='flex h-16 items-center justify-center bg-slate-900 text-slate-50'>
      <nav className='flex w-full max-w-screen-xl justify-between p-5'>
        <Link
          to='/'
          className='flex items-center font-medium'
        >
          Black Studios
        </Link>
        <div className='md:hidden'>
          <Dropdown />
        </div>
        <div className='hidden space-x-6 md:flex'>
          <Link to='/portfolio'>Portfólio</Link>
          <Link to='/contato'>Contato</Link>
        </div>
      </nav>
    </header>
  )
}
