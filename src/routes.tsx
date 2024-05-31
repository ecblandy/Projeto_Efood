import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import RestaurantServices from './pages/restaurant-services'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/loja" element={<RestaurantServices />} />
  </Routes>
)

export default Rotas
