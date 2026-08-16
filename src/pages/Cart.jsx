import React from 'react'
import Layout from './../components/layouts/Layout';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import ProductImg from "../assets/Product1.png"

const Cart = () => {
  return (
    <Layout>
      {/*Breadcrumb*/}

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex gap-x-1 items-center text-sm  ">
          <Link to="/">Home</Link>
          <IoIosArrowForward />

          <Link className="font-bold" to="/shop">
            Cart
          </Link>
        </div>
      </div>
      {/*Title*/}
      <div className="max-w-360 lg:px-8 px-5 mx-auto">
        <div className="flex text-4xl text-green-400  ">Cart</div>
      </div>

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-9'>
            {/**Cart Items */}
            <table className='w-full'>
              <thead className='bg-gray-50'>
              <tr>
                <th className='px-3 py-2 text-left'>Product</th>
                <th className='px-3 py-2 text-center'>Qty</th>
                <th className='px-3 py-2 text-center'>Total</th>
              </tr>
            </thead>
            
              <tbody>
              <tr>
                <td className='px-3 text-left'>
<div className='flex gap-4'>
  <div className='bg-slate-50 p-2 rounded-md'>
  <img src={ProductImg} className='w-15' alt="" />
</div>
<div className='flex flex-col'>
  <h2 className='text-lg text-gray-800 font-semibold'>Nice white jacked for women</h2>
  <div className='flex gap-3'>
    <div className='text-gray-500 font-semibold'>$100</div>
    </div>

  </div>
</div>
                </td>
                <td className='px-3 py-2 text-center'>1</td>
                <td className='px-3 py-2 text-center'>$100</td> </tr>
            </tbody>

            </table>
          </div>
          <div className='col-span-3 border'>
asdf
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart