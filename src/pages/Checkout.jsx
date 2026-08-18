import React from 'react'
import Layout from '../components/layouts/Layout'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

function Checkout() {
  return (
    <Layout>
       {/*Breadcrumb*/}

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex gap-x-1 items-center text-sm  ">
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
  <h2 className='text-2xl'>Billing Details</h2>
</div>
{/**Cart Summary */}
<div className='col-span-8'></div>
        </div>
      </div>
    </Layout>
  )
}

export default Checkout