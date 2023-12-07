import { FC, ReactNode } from 'react'

interface SocialMediaProps {
  icon: ReactNode
  name: string
  url: string
}

export const SocialMedia: FC<SocialMediaProps> = ({ icon, name, url }) => {
  return (
    <div className='flex transition-all duration-200 ease-out hover:text-zinc-300'>
      {icon}
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
        className='mx-2 flex items-center text-lg'
      >
        {name}
      </a>
    </div>
  )
}
