import { Routes, Route } from 'react-router-dom'
import {Home, New, Collection, About, Login, Signup, Checkout, Navbar, Footer} from './components/index'
import AuthProvider from './context/AuthContext';
import { CartProvider } from './crartDrawer/CartContext';
import CartDrawer from './crartDrawer/CartDrawer';

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newarrivals" element={<New />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
