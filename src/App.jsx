import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Register from './pages/Register';
import Profile from './pages/account/Profile';
import Orders from './pages/account/Orders';
import ChangePassword from './pages/account/ChangePassword';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/orders" element={<Orders />} />
        <Route path="/account/change-password" element={<ChangePassword />} />
      </Routes>
    </>
  );
}

export default App;
