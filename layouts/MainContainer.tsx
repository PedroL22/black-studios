import { ReactNode } from 'react'

interface MainContainerProps {
  children: ReactNode
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return <div className='mx-auto min-h-[calc(100vh-8rem)] w-full max-w-screen-xl p-7'>{children}</div>
}
