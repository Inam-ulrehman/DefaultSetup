import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import About from './pages/About'
import SharedProducts from './pages/SharedProducts'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Error from './pages/Error'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<SharedProducts />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
