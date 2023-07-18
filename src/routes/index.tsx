import { Route, Routes } from 'react-router-dom'

import { Contato } from '@pages/Contato'
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
      <Route
        path='/contato'
        element={<Contato />}
      />
    </Routes>
  )
}
