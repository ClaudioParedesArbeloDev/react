//llamar a las herramientas de desarrollo
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//llamar al archivo css
import './index.css'

//llamar a las paginas y los componentes
import Home from './pages/home'
import ProductDetail from './pages/productDetail'
import Cart from './pages/cart'
import Navbar from './components/navbar'


//crear el root
//para crear las rutas necesitamos instalar npm install react-router-dom
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
