import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://master-chef-server-ashik-faysal.vercel.app/categories")
          .then((res) => res.json())
          .then((data) => setCategories(data))
          .catch((err) => console.error(err));
    },[])
    return (
      <div>
        <h1 className='text-5xl text-center my-4 font-extrabold'>Our Chef</h1>

        <div className='grid md:grid-cols-3 gap-8'>
          {categories.map((category) => <Category key={category.id} category={category} />)}
        </div>
      </div>
    );
};

export default Categories;