import React from 'react'
import Layout from './../components/layouts/Layout';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <Layout>
      {/*Breadcrumb*/}

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex gap-x-1 items-center text-sm  ">
          <Link to="/">Shop</Link>
          <IoIosArrowForward />

          <Link className="font-bold" to="/shop">
            Good Product for men
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Product