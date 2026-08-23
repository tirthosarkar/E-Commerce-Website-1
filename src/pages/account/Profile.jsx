import React from 'react'
import Layout from '../../components/layouts/Layout'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import Sidebar from './Sidebar'





const Profile = () => {
  return (
    <Layout>
      
       {/*Breadcrumb*/}

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex gap-x-1 items-center text-sm  ">
          <Link to="/">Account</Link>
          <IoIosArrowForward />

          <Link className="font-bold" to="/shop">
            Profile
          </Link>
        </div>
      </div>
      {/*Title*/}
      <div className="max-w-360 lg:px-8 px-5 mx-auto">
        <div className="flex text-4xl text-green-400  ">Profile</div>
<div className='max-w360 lg:px-8 px-5 mx-auto pt-5 pb-10'>
<div className='grid grid-cols-12 gap-5'>
    {/* sidebar */}
<div className='col-span-3'>
   
   <Sidebar/>

</div>
{/* Form Area */}
<div className='col-span-9'>
<div className='shadow-lg rounded-md'>
    <h2 className='bg-gray-100 px-5 py-2 rounded-t-md 
    text-lg font-semibold'>Personal Information</h2>

    <form className='space-y-4 py-3 px-5'>
        <div className='flex flex-col'>
            <label htmlFor="" className='text-lg mb-2'>Name</label>
             <input
                
                type="text"
                placeholder="Enter Name"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="" className='text-lg mb-2'>Email</label>
             <input
                
                type="text"
                placeholder="Enter Email"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="" className='text-lg mb-2'>Phone No.</label>
             <input
                
                type="text"
                placeholder="Enter Phone No."
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
        </div>
        <div className='py-3'>
             <Link className="bg-green-400 px-5 py-3  text-md rounded-md text-gray-800 text-center hover:text-white hover:bg-gray-900">
                            Update
                          </Link>
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

export default Profile
