import React from 'react';

import Categorie from './Categorie';

const Categories = () => {
  return (
    <section className='p-8' id='categories'>
    <row className='d-flex grid gap-20 md:grid-cols-1 mb-2 '>
      <div className='grid gap-10 md:grid-cols-3 mb-2'>
        <Categorie
          name='Home & Kitchen'
          image='https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGFuJTIwZCUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
        />
        <Categorie
          name='Beauty & Health'
          image='https://images.unsplash.com/photo-1622836691649-c44f814c2196?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYyfHxjb3NtZXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
        />
        <Categorie
          name='Electronics'
          image='https://images.unsplash.com/photo-1593344484962-796055d4a3a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
        />
      </div>
     
      <div className='grid gap-10 md:grid-cols-2'>
        <Categorie
          name='Furniture'
          image='https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
        />
        <Categorie
          name='Others'
          image='https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXJtYXJrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
        />
      </div>
       </row>
    </section>
  );
};

export default Categories;
