import { BrowserRouter } from 'react-router-dom'
import { AllRoutes } from './routes'

export const App = () => {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  )
}
