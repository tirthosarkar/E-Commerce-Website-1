
import Layout from '../components/layouts/Layout'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import ProductImage1 from '../assets/product1.png';
import ProductImage2 from '../assets/product2.jpg';
import ProductImage3 from '../assets/product3.png';


const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Dummy Product 1',
      image: ProductImage1,
      price: 100,
      crossPrice: 110,
    },
    {
      id: 2,
      name: 'Dummy Product 2',
      image: ProductImage2,
      price: 150,
      crossPrice: 160,
    },
    {
      id: 3,
      name: 'Dummy Product 3',
      image: ProductImage3,
      price: 200,
      crossPrice: 220,
    },
    {
      id: 4,
      name: 'Dummy Product 4',
      image: ProductImage1,
      price: 250,
      crossPrice: 270,
    },
    {
      id: 5,
      name: 'Dummy Product 5',
      image: ProductImage2,
      price: 300,
      crossPrice: 330,
    },
    {
      id: 6,
      name: 'Dummy Product 6',
      image: ProductImage1,
      price: 350,
      crossPrice: 380,
    },
    {
      id: 7,
      name: 'Dummy Product 7',
      image: ProductImage2,
      price: 400,
      crossPrice: 440,
    },
    {
      id: 8,
      name: 'Dummy Product 8',
      image: ProductImage3,
      price: 200,
      crossPrice: 220,
    },
    {
      id: 9,
      name: 'Dummy Product 9',
      image: ProductImage1,
      price: 250,
      crossPrice: 270,
    },
    {
      id: 10,
      name: 'Dummy Product 10',
      image: ProductImage2,
      price: 300,
      crossPrice: 330,
    },
  ];
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
            <div className="col-span-12 lg:col-span-2 pb-5">
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
            <div className="col-span-12 lg:col-span-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-2 space-y-5 lg:space-y-0 gap-5">
                {products.map(product => {
                  return (
                    <div key={product.id}>
                      <div className="bg-slate-100 overflow-hidden rounded-lg">
                        <img
                          className="object-cover w-full lg:h-95 duration-500 ease-in-out transition-transform hover:scale-110"
                          src={product.image}
                          alt=""
                        />
                      </div>
                      <h3 className="text-lg text-gray-800 font-semibold">
                        {product.name}
                      </h3>
                      <p className="text-base text-gray-700 font-semibold">
                        ${product.price}
                      </p>
                      <span className="line-through text-gray-500">
                        ${product.crossPrice}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Shop