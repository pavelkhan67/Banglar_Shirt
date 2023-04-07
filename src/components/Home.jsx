import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from './Shirt';

const Home = () => {
    const shirts = useLoaderData();
    return (
        <div>
            <h2>Welcome To Banglar T-Shirt</h2>
            {
                shirts.map(shirt => <Shirt key={shirt._id} shirt={shirt}></Shirt>)
            }
        </div>
    );
};

export default Home;