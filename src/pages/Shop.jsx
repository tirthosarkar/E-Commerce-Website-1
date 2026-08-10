
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
          <div className="flex text-4xl text-green-400  ">Shop</div>
        </div>
        {/*Main Container*/}
        <div className="max-w-360 lg:px-8 px-5 mx-auto mt-5">
          <div className="grid grid-cols-12 gap-5">
            {/*Sidebar*/}
            <div className="col-span-3 pb-5">
              <div className="flex justify-between items-center mb-3 border-b border-gray-200">
                <span className="text-2xl font-bold">Filters</span>
                <span className="">Clear</span>
              </div>

              {/*Category filter */}
              <div className="font-bold pt-2 mb-2">Category</div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 border-gray-400" />
                <span>Topwear</span>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 border-gray-400" />
                <span>Bottomwear</span>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 border-gray-400" />
                <span>Footwear</span>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 border-gray-400" />
                <span>Shoes</span>
              </div>

              {/*Brands filter */}
              <div className="font-bold pt-4 mb-2">Brands</div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 border-gray-400" />
                <span>Allen Solly</span>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 border-gray-400" />
                <span>Zara</span>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 border-gray-400" />
                <span>Flying Machine</span>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 border-gray-400" />
                <span>Jockey</span>
              </div>

              {/*Price Range filter */}
              <div className="font-bold pt-4 mb-2">Price Range</div>

              <div className="flex items-center space-x-2">
                <input type="radio" className="w-4 h-4 border-gray-400" />
                <span>Under $50</span>
              </div>

              <div className="flex items-center space-x-2">
                <input type="radio" className="w-4 h-4 border-gray-400" />
                <span>$50 - $100</span>
              </div>

              <div className="flex items-center space-x-2">
                <input type="radio" className="w-4 h-4 border-gray-400" />
                <span>Above $100</span>
              </div>
            </div>
            {/*Product*/}
            <div className="col-span-9 border">asdf</div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Shop