import { BrowserRouter } from 'react-router-dom'
import { AllRoutes } from './routes'

import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='min-h-[calc(100vh-8rem)] bg-zinc-900 text-zinc-50 antialiased'>
        <AllRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  )
}
