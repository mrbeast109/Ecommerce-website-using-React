import { Routes, Route } from 'react-router-dom'
import {Home, New, Collection, About, Login, Signup, Cart, Checkout, Navbar, Footer} from './components/index'
import AuthProvider from './context/AuthContext';

function App() {

  return (
      <AuthProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newarrivals" element={<New />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
  )
}

export default App
