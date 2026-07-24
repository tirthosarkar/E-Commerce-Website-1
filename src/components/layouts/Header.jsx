import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full flex justify-between bg-gray-200 px-5 py-3'>
      <Link className='text-xl' to={'/'}>XECOMM</Link>
      <ul className='flex space-x-3'>
        <Link className='hover:text-green-500' to={'/'}>Home</Link>
        <Link className='hover:text-green-500' to={'/shop'}>Mens</Link>
        <Link className='hover:text-green-500' to={'/shop'}>Women</Link>
        <Link className='hover:text-green-500' to={'/shop'}>Kids</Link>
      </ul>
    </div>
  )
}

export default Header