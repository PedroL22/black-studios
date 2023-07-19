import { BrowserRouter } from 'react-router-dom'
import { AllRoutes } from './routes'

import { Header } from '@components/Header'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='min-h-screen bg-zinc-900 text-zinc-50 antialiased'>
        <AllRoutes />
      </div>
    </BrowserRouter>
  )
}
