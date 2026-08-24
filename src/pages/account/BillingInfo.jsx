import React from 'react'

const BillingInfo = () => {
  return (
          <div className='shadow-lg rounded-md'>
    <h2 className='bg-gray-100 px-5 py-2 rounded-t-md 
    text-lg font-semibold'>Billing Address</h2>

    <form className='space-y-4 py-3 px-5'>

<div className='grid grid-cols-2 gap-5'>
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
</div>
<div className='grid grid-cols-2 gap-5'>
     <div className='flex flex-col'>
            <label htmlFor="" className='text-lg mb-2'>Phone</label>
             <input
                type="text"
                placeholder="Enter Phone No."
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
        </div>
</div>

       
        
        <div className='flex flex-col'>
            <label htmlFor="" className='text-lg mb-2'>Address</label>
             <textarea                
                rows={3}
                placeholder="Enter Address"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
        </div>

        <div className='grid grid-cols-2 gap-5'>
 <div className='flex flex-col'>
            <label htmlFor="" className='text-lg mb-2'>City</label>
             <input                
                type="text"
                placeholder="Enter City"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="" className='text-lg mb-2'>State</label>
             <input
                type="text"
                placeholder="Enter State"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
        </div>
</div>

<div className='grid grid-cols-2 gap-5'>
     <div className='flex flex-col'>
            <label htmlFor="" className='text-lg mb-2'>Zip</label>
             <input
                type="text"
                placeholder="Enter Zip"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
        </div>
</div>

        <div className='py-3'>
             <button className="bg-green-400 px-5 py-3  text-md rounded-md text-gray-800 text-center hover:text-white hover:bg-gray-900">
                            Update
                          </button>
        </div>

    </form>
</div>
  )
}

export default BillingInfo
