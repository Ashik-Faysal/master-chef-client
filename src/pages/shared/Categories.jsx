import React, { useEffect, useState } from 'react';
import { Card, Container, Image } from 'react-bootstrap';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://master-chef-server-ashik-faysal.vercel.app/categories")
          .then((res) => res.json())
          .then((data) => setCategories(data))
          .catch((err) => console.error(err));
    },[])
    return (
      <Container>
        <h1>Food Category List</h1>

        <div className='w-25'>
          {categories.map((category) => (
            <Card className='my-4 p-2 ' key={category.id}>
              <h1>{category.country}</h1>
              <Image src={category.food_image} rounded />
            </Card>
          ))}
        </div>
      </Container>
    );
};

export default Categories;