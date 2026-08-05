import React from 'react'
import ProductImage1 from '../assets/product1.png';
import ProductImage2 from '../assets/product2.jpg';
import ProductImage3 from '../assets/product3.png';

const LatestProducts = () => {
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
  ];
  return (
    <div className="max-w-360 mx-auto lg:px-8 px-5 py-10">
      <h2 className="text-green-400 text-4xl font-medium pb-10">
        Latest <span className="text-gray-700">Products</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-2 space-y-5 lg:space-y-0 gap-5">
        {products.map(product => {
          return (
            <div key={product.id}>
              <div className="bg-slate-100 overflow-hidden rounded-lg">
                <img
                  className="object-cover h-95 duration-500 ease-in-out transition-transform hover:scale-110"
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
  );
};

export default LatestProducts