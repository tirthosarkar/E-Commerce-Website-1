import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Register from './pages/Register';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
