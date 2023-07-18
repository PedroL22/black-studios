import { Route, Routes } from 'react-router-dom'

import { Home } from '@pages/Home'
import { Portfolio } from '@pages/Portfolio'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/portfolio'
        element={<Portfolio />}
      />
    </Routes>
  )
}
