import { ReactNode } from 'react'

interface MainContainerProps {
  children: ReactNode
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return <div className='mx-auto w-full max-w-screen-xl p-5'>{children}</div>
}
