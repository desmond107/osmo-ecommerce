import React from 'react';

import { Badge } from '@mui/material';
import { ExpandMore, Search, ShoppingCart } from '@mui/icons-material';

const Navbar = () => {
  return (
    <nav className='grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-3 p-4 border-b font-semibold h-18'>
      <div className='flex items-center '>
        <div className='flex px-4'>
          <span className='uppercase'>en</span>
          <ExpandMore className='cursor-pointer' />
        </div>
        <form className='border py-1 px-2 flex rounded'>
          <input
            type='text'
            placeholder='Search'
            className='focus:outline-none'
          />
          <Search className='cursor-pointer' />
        </form>
      </div>
      <div className='font-bold text-3xl uppercase text-center tracking-wider'>
        <h1>
          <a href=''>Hein.</a>
        </h1>
      </div>
      <div className='flex justify-end items-center px-4'>
        <button className='uppercase px-4 py-2'>Register</button>
        <button className='uppercase px-4 py-2'>Sign in</button>
        <Badge badgeContent={4} color='primary' className='cursor-pointer'>
          <ShoppingCart />
        </Badge>
      </div>
    </nav>
  );
};

export default Navbar;