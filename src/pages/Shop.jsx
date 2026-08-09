
import Layout from '../components/layouts/Layout'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';


const Shop = () => {
  return (
    <>
      <Layout>
        {/*Breadcrumb*/}

        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex gap-x-1 items-center text-sm  ">
            <Link to="/">Home</Link>
            <IoIosArrowForward />

            <Link className="font-bold" to="/shop">
              Shop
            </Link>
          </div>
        </div>
        {/*Title*/}
        <div className="max-w-360 lg:px-8 px-5 mx-auto">
          <div className="flex text-4xl text-green-400  ">
            Shop

          </div>
        </div>
        {/*Main Container*/}
        <div className="max-w-360 lg:px-8 px-5 mx-auto mt-5">
          <div className='grid grid-cols-12 gap-5'>
            {/*Sidebar*/}
            <div className='col-span-3 border'>
              asdf

            </div>
            {/*Product*/}
            <div className='col-span-9 border'>
              asdf

            </div>

          </div>
        </div>
      </Layout>
    </>
  );
}

export default Shop