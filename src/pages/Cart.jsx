import React from 'react'
import Layout from './../components/layouts/Layout';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

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

      <div className="max-w-360 lg:px-8 px-5 mx-auto">
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-9 border'>
            {/**Cart Items */}
            <table className='w-full'>
              <thead className='bg-gray-200'>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
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