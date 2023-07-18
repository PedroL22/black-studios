import { BrowserRouter } from 'react-router-dom'
import { AllRoutes } from './routes'

import { Header } from '@components/Header'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='min-h-screen bg-slate-800 text-slate-50'>
        <AllRoutes />
      </div>
    </BrowserRouter>
  )
}
