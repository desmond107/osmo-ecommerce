import React, { useState } from 'react';

import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Link } from 'react-scroll';

const CAROUSEL_DATA = [
  {
    url: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
  },
  {
    url: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    url:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvc21ldGljc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    url: "https://images.unsplash.com/photo-1602558618194-3037081afe0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU4fHxjb3NtZXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    url: 'https://images.unsplash.com/photo-1519335553051-96f1218cd5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMGdhZGdldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  },
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const incrementIndex = () => {
    setCurrentIndex((currentIndex) => {
      return (currentIndex + 1) % CAROUSEL_DATA.length;
    });
  };
  const decrementIndex = () => {
    setCurrentIndex((currentIndex) => {
      return currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1;
    });
  };
  return (
    <section className='h-carousel relative bg-red-300'>
      <div
        onClick={decrementIndex}
        className='w-12 h-12 rounded-full bg-gray-100/50 absolute top-1/2 left-4 cursor-pointer'
      >
        <ArrowLeft className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
      </div>
      <img
        src={CAROUSEL_DATA[currentIndex].url}
        className='w-full h-full object-cover'
      />
      <div className='absolute h-full w-full top-0 left-0 bg-black/30'></div>
      <div className='absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center text-white uppercase px-4 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-8'>season sale</h1>
        <p className='tracking-wider mb-16 text-md md:text-xl'>
          get value for your money! get flat 30% off for new arrivals.
        </p>
        <Link
          to='categories'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className='border p-3 bg-white text-black text-lg hover:bg-cyan-600 hover:border-none hover:text-white transition ease-out	duration-500'>
            Shop Now <ArrowRight />
          </button>
        </Link>
      </div>
      <div
        onClick={incrementIndex}
        className='w-12 h-12 rounded-full bg-gray-100/50 absolute top-1/2 right-4 cursor-pointer'
      >
        <ArrowRight className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
      </div>
    </section>
  );
};

export default Carousel;
