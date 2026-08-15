import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import LandPage from './components/LandPage'
import Header from './components/Header'
import About from './components/About'
import Callus from './components/Callus'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import './App.css'
import Checkout from './components/Checkout'
import PaymentSuccess from './components/PaymentSuccess'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandPage />} />  
        <Route path='/about' element={<About />} />
        <Route path='/callus' element={<Callus />} />
        <Route path='/details/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment-success' element={<PaymentSuccess />} />    
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App