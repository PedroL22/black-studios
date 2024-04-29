import { FC, ReactNode } from 'react'

interface MainContainerProps {
  children: ReactNode
}

export const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return <div className='mx-auto min-h-[calc(100vh-8rem)] w-full max-w-screen-xl p-7'>{children}</div>
}
