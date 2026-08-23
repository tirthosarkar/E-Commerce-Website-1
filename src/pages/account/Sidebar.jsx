import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
     <div className='space-y-1'>
<Link className='bg-green-300 text-gray-900 px-4 py-2 rounded-md 
w-full flex items-center font-semibold hover:bg-gray-900 hover:text-white'> 
<FaUser className='me-2' /> Profile</Link>

<Link className='bg-green-300 text-gray-900 px-4 py-2 rounded-md 
w-full flex items-center font-semibold hover:bg-gray-900 hover:text-white'>
    <FaShoppingCart className='me-2' />
Orders</Link>

<Link className='bg-green-300 text-gray-900 px-4 py-2 rounded-md 
w-full flex items-center font-semibold hover:bg-gray-900 hover:text-white'>
    <FaLock className='me-2' />
Chang Password</Link>

<Link className='bg-green-300 text-gray-900 px-4 py-2 rounded-md 
w-full flex items-center font-semibold hover:bg-gray-900 hover:text-white'>
    <IoLogOutSharp size={20} className='me-2' />
Logout</Link>

    </div>
  )
}

export default Sidebar
