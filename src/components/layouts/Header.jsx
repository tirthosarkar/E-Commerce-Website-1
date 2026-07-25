import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className="relative z-50 w-full bg-white shadow-sm">
      {/* Top Banner */}
      <div className="bg-green-200">
        <div className="text-sm max-w-7xl mx-auto py-1 lg:px-8 px-5 text-center sm:text-left">
          Free Delivery on Your First Order!
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto lg:py-6 py-3 lg:px-8 px-5 flex flex-wrap sm:flex-row justify-between items-center gap-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-3xl text-green-500 font-bold">X</span>
          <span className="text-3xl text-slate-800 font-bold">ECOMM</span>
        </Link>

        {/* Navigation Links */}
        <nav className="text-md text-gray-800 space-x-5 flex items-center">
          <Link
            className="hover:text-green-500 transition-colors duration-200"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-green-500 transition-colors duration-200"
            to="/shop"
          >
            Mens
          </Link>
          <Link
            className="hover:text-green-500 transition-colors duration-200"
            to="/shop"
          >
            Womens
          </Link>
          <Link
            className="hover:text-green-500 transition-colors duration-200"
            to="/shop"
          >
            Kids
          </Link>
          <Link
            className="hover:text-green-500 transition-colors duration-200 text-lg"
            to="/cart"
            aria-label="Cart"
          >
            <FaCartShopping />
          </Link>

          <Link className='bg-green-400 px-5 py-3 ms-3 text-md text-gray-800 rounded-md'>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
