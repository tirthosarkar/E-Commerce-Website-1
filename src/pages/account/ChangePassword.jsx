import React from 'react'
import Layout from '../../components/layouts/Layout'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const ChangePassword = () => {
  return (
    <Layout>
      
       {/*Breadcrumb*/}

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex gap-x-1 items-center text-sm  ">
          <Link to="/">Account</Link>
          <IoIosArrowForward />

          <Link className="font-bold" to="/shop">
            Change Password
          </Link>
        </div>
      </div>
      {/*Title*/}
      <div className="max-w-360 lg:px-8 px-5 mx-auto">
        <div className="flex text-4xl text-green-400  ">
           Change Password
          </div>          
        <div className='max-w-360 lg:px-8 px-5 mx-auto pt-5 pb-10'>
          <div className='grid grid-cols-12 gap-5'>
            {/* sidebar */}
<div className='col-span-3'>
   
   <Sidebar/>

</div>
{/* Form Area */}
<div className='col-span-9'>
  
      <div className='shadow-lg rounded-md mb-10'>
    <h2 className='bg-gray-100 px-5 py-2 rounded-t-md 
    text-lg font-semibold mb-3'>Change Password</h2>

    <form className='space-y-4 py-3 px-5'>
        <div className='flex flex-col'>
            <label htmlFor="" className='mb-2'>Old Password</label>
             <input
                
                type="password"
                placeholder="Old Password"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="" className='mb-2'>New Password</label>
             <input
                
                type="password"
                placeholder="New Password"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="" className='mb-2'>Confirm Password</label>
             <input
                
                type="password"
                placeholder="Confirm Password"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
        </div>
        <div className='pt-2 pb-3'>
             <button className="bg-green-400 px-5 py-3  text-md rounded-md text-gray-800 text-center hover:text-white hover:bg-gray-900">
                            Update
                          </button>
        </div>

    </form>
</div>

</div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default ChangePassword
