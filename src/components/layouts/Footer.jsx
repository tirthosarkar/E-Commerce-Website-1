import React from 'react'
import { Link } from 'react-router-dom';
import Login from './../../pages/Login';
import Register from './../../pages/Register';

const Footer = () => {
  return (
    <div className="max-w-360 mx-auto bg-green-300 lg:px-8 px-5">
      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-3 rounded-lg p-10">
        <div>
          <Link to="/" className="flex items-center">
            <span className="text-3xl text-white font-bold">X</span>
            <span className="text-3xl text-slate-800 font-bold">ECOMM</span>
          </Link>
          <p className="text-gray-800 mt-2">
            Your destination for all your shopping needs.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl text-gray-800 font-bold mb-3">Quick Links</h2>
          <Link className="hover:underline" to="/login">
            Login
          </Link>
          <Link className="hover:underline" to="/register">
            Register
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-gray-800 font-bold mb-3">Contact</h2>
          <Link className="hover:underline">+8801712345678</Link>
          <Link className="hover:underline">info@ecommerce.com</Link>
          <p>Dummy address 123</p>
        </div>
      </div>
      <div className="text-center py-5 text-gray-700">
        &copy; {new Date().getFullYear()} ECOMMERCE. All rights reserved.
      </div>
    </div>
  );
}

export default Footer