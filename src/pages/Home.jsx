import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </>
  )
}

export default Home