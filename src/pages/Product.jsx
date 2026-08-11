import React from 'react';
import Layout from './../components/layouts/Layout';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ProductImg1 from './../assets/product1.png';
import ProductImg2 from './../assets/product2.jpg';
import ProductImg3 from './../assets/product3.png';
// ❌ removed: import Product from './Product';

const Product = () => {
  const gallery = [
    { id: 1, url: ProductImg1 },
    { id: 2, url: ProductImg2 },
    { id: 3, url: ProductImg3 },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex gap-x-1 items-center text-sm">
          <Link to="/">Shop</Link>
          <IoIosArrowForward />
          <Link className="font-bold" to="/shop">
            Good Product for men
          </Link>
        </div>
      </div>

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-6 col-span-12 border">
            {/* Gallery */}
            <div className="grid grid-cols-12">
              <div className="col-span-10">{/* Main Image */}</div>

              <div className="col-span-2">
                {/* Small Images */}
                {gallery &&
                  gallery.map(item => (
                    <img key={item.id} src={item.url} alt="" />
                  ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 col-span-12 border"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
