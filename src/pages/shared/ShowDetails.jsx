import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ShowDetails = () => {
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://master-chef-server-ashik-faysal.vercel.app/categories/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
        .catch(err => console.error(err));
    },[])
    console.log(categories);
    return (
        <div>
            <h1>This is show details page</h1>
        </div>
    );
};

export default ShowDetails;