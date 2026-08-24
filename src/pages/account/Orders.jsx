import React from 'react'
import Layout from '../../components/layouts/Layout'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import Sidebar from './Sidebar'

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
        <div className="flex text-4xl text-green-400  ">
          Orders
        </div>
        <div/>
<div className='max-w360 lg:px-8 px-5 mx-auto pt-5 pb-10'>
<div className='grid grid-cols-12 gap-5'>
       {/* sidebar */}
<div className='col-span-3'>
   
   <Sidebar/>

</div>
{/* Form Area */}
<div className='col-span-9'>

      <div className='shadow-lg rounded-md mb-10'>
    <h2 className='bg-gray-100 px-5 py-2 rounded-t-md 
    text-lg font-semibold'>Orders</h2>

<div className='overflow-auto'>
 <table className='w-full'>
<thead>
  <tr className='text-left border-b border-gray-200 text-gray-600'>
    <th className='px-3 py-2'>Customer</th>
    <th className='px-3 py-2'>Email</th>
    <th className='px-3 py-2'>Phone</th>
    <th className='px-3 py-2'>Amount</th>
    <th className='px-3 py-2'>Status</th>
    <th className='px-3 py-2'>Data</th>
    <th className='px-3 py-2'>Action</th>
  </tr>
</thead>

<tbody>
   <tr>
    <td className='px-3 py-2 font-bold'>Tirtho Sarkar</td>
    <td className='px-3 py-2'>tirthosarkar1@gmail</td>
    <td className='px-3 py-2'>01886-608934</td>
    <td className='px-3 py-2 font-bold'>$100</td>
    <td className='px-3 py-2'>Paid</td>
    <td className='px-3 py-2'>20 jan 2026</td>
    <td className='px-3 py-2'></td>
  </tr>
</tbody>

 </table>
</div>


</div>

</div>
  </div>
  </div>
      </div>
    </Layout>
  )
}

export default Orders
