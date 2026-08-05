import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="max-w-360 mx-auto bg-green-300 lg:px-8 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 rounded-lg p-10">
        <Link to="/" className="flex items-center">
          <span className="text-3xl text-white font-bold">X</span>
          <span className="text-3xl text-slate-800 font-bold">ECOMM</span>
        </Link>
        
        <div className="space-y-3">
          <h2 className="text-2xl text-gray-800 font-semibold">About Us</h2>
          <p className="text-gray-700">
            We are a leading e-commerce platform providing a wide range of
            products to cater to your needs. Our mission is to deliver quality
            and convenience to our customers.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl text-gray-800 font-semibold">Contact</h2>
          <p className="text-gray-700">Email: info@ecommerce.com</p>
          <p className="text-gray-700">Phone: +8801712345678</p>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl text-gray-800 font-semibold">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-green-500">
              Facebook
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500">
              Twitter
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer