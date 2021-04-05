import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

export default function Products() {
  //return <h1 className='products'>PRODUCTS</h1>;
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}
