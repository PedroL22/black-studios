import { Link, useLocation } from 'react-router-dom'

export const DesktopHeader = () => {
  const location = useLocation()

  return (
    <div className='hidden space-x-6 md:flex'>
      <Link
        to='/'
        className={
          location.pathname == '/'
            ? 'text-zinc-400'
            : "relative after:absolute after:left-1/2 after:top-7 after:h-[1px] after:w-0 after:bg-zinc-50 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:left-[13%] hover:after:w-3/4"
        }
      >
        Home
      </Link>
      <Link
        to='/portfolio'
        className={
          location.pathname == '/portfolio'
            ? 'text-zinc-400'
            : "relative after:absolute after:left-1/2 after:top-7 after:h-[1px] after:w-0 after:bg-zinc-50 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:left-[13%] hover:after:w-3/4"
        }
      >
        Portfólio
      </Link>
      <Link
        to='/contato'
        className={
          location.pathname == '/contato'
            ? 'text-zinc-400'
            : "relative after:absolute after:left-1/2 after:top-7 after:h-[1px] after:w-0 after:bg-zinc-50 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:left-[13%] hover:after:w-3/4"
        }
      >
        Contato
      </Link>
    </div>
  )
}
