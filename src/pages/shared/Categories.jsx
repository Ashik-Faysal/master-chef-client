import React, { useEffect, useState } from 'react';

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
        <h1>Food Category List</h1>

        <div className=''>
          {categories.map((category) => (
            <div className='my-4 p-2 ' key={category.id}>
              <h1>{category.country}</h1>
              <img src={category.food_image} />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Categories;