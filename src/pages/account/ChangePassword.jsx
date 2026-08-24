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
  


</div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default ChangePassword
