import { Link } from 'react-router-dom'

export const Dropdown = () => {
  return (
    <div className='dropdown dropdown-end'>
      <label
        tabIndex={0}
        className='btn btn-circle btn-ghost'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h7'
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className='menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 text-zinc-950 shadow dark:text-zinc-50'
      >
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfólio</Link>
        </li>
        <li>
          <Link to='/contato'>Contato</Link>
        </li>
      </ul>
    </div>
  )
}
