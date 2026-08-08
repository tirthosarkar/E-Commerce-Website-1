
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
        <div className="max-w-360 lg:px-8 px-3 mx-auto py-5">
          <div className="flex text-4xl text-green-400  ">Shop</div>
        </div>
        {/*Main Container*/}
      </Layout>
    </>
  );
}

export default Shop