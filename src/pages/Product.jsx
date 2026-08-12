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
            <div className="grid grid-cols-12">
              <div className="col-span-10 bg-slate-50">
                {/* Main Image */}
                <img src={mainImage?.url} className="w-full" alt="" />
              </div>

              <div className="col-span-2">
                {/* Small Images */}
                {gallery &&
                  gallery.map(item => {
                    return (
                      <Link>
                        <img
                          key={item.id}
                          onClick={() => handleGallery(item)}
                          src={item.url}
                          alt=""
                        />
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 col-span-12 border"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
