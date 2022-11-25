import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Products from './Products';

const Shop = () => {

    const { data: products = [], } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1>Shop</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    products?.map(product => <Products
                        key={product._id}
                        product={product}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default Shop;