import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';

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
      <div className="max-w-360 mx-auto lg:py-6 py-3 lg:px-8 px-5 flex flex-wrap sm:flex-row justify-between items-center gap-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-3xl text-green-500 font-bold">X</span>
          <span className="text-3xl text-slate-800 font-bold">ECOMM</span>
        </Link>

        {/* Navigation Links */}
        <nav className="text-md text-gray-800 space-x-5 flex">
          <Link className="hover:text-green-500" to="/">
            Home
          </Link>
          <Link className="hover:text-green-500" to="/">
            Home
          </Link>
          <Link className="hover:text-green-500" to="/">
            Home
          </Link>
          <Link className="hover:text-green-500" to="/">
            Home
          </Link>

          <Link>
            <span className="bg-red-400 text-sm rounded-[50%] flex justify-center items-center text-white absolute left-2 w-6 h-6 -top-5.5">0</span>
          <IoCartOutline className='mt-1' />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
