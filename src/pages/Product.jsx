import React, { useState, useEffect } from 'react';
import Layout from './../components/layouts/Layout';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ProductImg1 from './../assets/product1.png';
import ProductImg2 from './../assets/product2.jpg';
import ProductImg3 from './../assets/product3.png';

const Product = () => {
  const gallery = [
    { id: 1, url: ProductImg1 },
    { id: 2, url: ProductImg2 },
    { id: 3, url: ProductImg3 },
  ];

  const [mainImage, setMainImage] = useState(null);

  const handleGallery = item => {
    setMainImage(item);
  };

  useEffect(() => {
    if (gallery) {
      setMainImage(gallery[0]);
    }
  }, []);

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
          <div className="lg:col-span-5 col-span-12">
            {/* Gallery */}
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-10 bg-slate-50">
                {/* Main Image */}
                <img
                  src={mainImage?.url}
                  className="w-full rounded-md"
                  alt=""
                />
              </div>

              <div className="col-span-2">
                {/* Small Images */}
                {gallery &&
                  gallery.map(item => {
                    return (
                      <Link key={item.id}>
                        <img
                          onClick={() => handleGallery(item)}
                          src={item.url}
                          className="w-full bg-slate-50"
                          alt=""
                        />
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 col-span-12 border">
            {/*Product Info*/}

            <h2 className="font-bold text-2xl text-gray-800">
              {' '}
              Good Product for men
            </h2>
            {/*Price*/}
            <div className="font-bold text-lg mt-3">
              $100
              <span className="text-gray-500 font-normal">$150</span>
            </div>
            {/*Description*/}
            <div className="text-base text-gray-500 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              porro vero pariatur quisquam illo soluta et, rerum provident
              magnam ipsum adipisci ducimus perferendis dolore sed id blanditiis
              odit, quis recusandae.
            </div>
            {/*Size */}
            <div className="font-bold text-lg mt-3">Select Size</div>
            <div className="flex gap-x-2">
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                S
              </div>
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                M
              </div>
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                L
              </div>
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                XL
              </div>
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                XXL
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
