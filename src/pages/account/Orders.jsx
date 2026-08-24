import React from 'react'
import Layout from '../../components/layouts/Layout'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const Orders = () => {
  return (
    <Layout>
       {/*Breadcrumb*/}

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex gap-x-1 items-center text-sm  ">
          <Link to="/">Account</Link>
          <IoIosArrowForward />

          <Link className="font-bold" to="/shop">
            Orders
          </Link>
        </div>
      </div>
      {/*Title*/}
      <div className="max-w-360 lg:px-8 px-5 mx-auto">
        <div className="flex text-4xl text-green-400  ">Orders</div>
<div className='max-w360 lg:px-8 px-5 mx-auto pt-5 pb-10'>
<div className='grid grid-cols-12 gap-5'></div>
  </div>
  </div>
    </Layout>
  )
}

export default Orders
