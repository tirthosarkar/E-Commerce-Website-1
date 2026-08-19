import React from 'react'
import Layout from '../components/layouts/Layout'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import ProductImg from "../assets/Product1.png"

function Checkout() {
  return (
    <Layout>
       {/*Breadcrumb*/}

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex gap-x-1 items-center text-sm">
          <Link to="/">Home</Link>
          <IoIosArrowForward />

          <Link className="font-bold" to="/shop">Checkout</Link>
        </div>
      </div>

      {/*Title*/}
      <div className="max-w-360 lg:px-8 px-5 mx-auto pb-5">
        <div className="flex text-4xl text-green-400">Checkout</div>
      </div>

      {/**Main Container */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto pb-5">
        <div className='grid grid-cols-12 gap-5'>
          {/**Billing Form */}
<div className='col-span-8'>
  <div className='shadow-lg rounded-md px-6 py-5 border border-gray-100'>
<h2 className='text-2xl text-gray-800 font-semibold pb-3 border-b border-gray-200 mb-3'>Billing Details</h2>
<form action="">
  <div>
    <input 
placeholder=' Name'
    type="text" 
    className='border border-gray-200 px-3 py-3 w-full rounded-md' />
  </div>

    <div className='grid grid-cols-2 gap-3'>
<div>
      <input 
    placeholder=' Email'
    type="text" 
    className='border border-gray-200 px-3 py-3 w-full rounded-md' />
</div>

    <div>
      <input 
    placeholder=' Phone No.'
    type="text" 
    className='border border-gray-200 px-3 py-3 w-full rounded-md' />
</div>
  </div>

  <div>
    <textarea
    placeholder=' Address'
    className='border border-gray-200 px-3 py-3 w-full rounded-md' rows={3}>
      
    </textarea>
</div>

    <div className='grid grid-cols-2 gap-3'>
<div>
      <input 
    placeholder='City'
    type="text" 
    className='border border-gray-200 px-3 py-3 w-full rounded-md' />
</div>

    <div>
      <input 
    placeholder='State'
    type="text" 
    className='border border-gray-200 px-3 py-3 w-full rounded-md' />
</div>
  </div>

  <div>
    <input 
placeholder=' Zipcode'
    type="text" 
    className='border border-gray-200 px-3 py-3 w-full rounded-md' />
  </div>

</form>
  </div>
  
</div>
{/**Cart Summary */}
<div className='col-span-4'>
  <div className='rounded-md bg-gray-50 p-5 shadow-md'>
    <h2 className='text-2xl text-gray-800 font-semibold pb-3 border-b border-gray-200 mb-3'>Order Summary</h2>
<div className='grid grid-cols-12'>

  {/**Image */}
  <div>
    <img src={ProductImg} className='w-15' alt="" />
  </div>

  {/**title, size, qty */}
  <div></div>

  {/**price */}
<div></div>

</div>
  </div>
</div>
        </div>
      </div>
    </Layout>
  )
}

export default Checkout