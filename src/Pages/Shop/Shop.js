import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import Products from './Products';

import ViewProductModal from './ViewProductModal';

const Shop = () => {
    const [furniture, setFurniture] = useState(null)
    const { data: products = [], } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();

            return data;

        }
    })





    return (
        <div className='px-10'>


            <div className='my-20'>
                <h1 className='text-center text-6xl font-mono font bold text-blue-700'>Shop</h1>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>

                {
                    products?.map(product => <Products
                        key={product._id}
                        product={product}
                        setFurniture={setFurniture}


                    ></Products>)
                }
            </div>
            {
                furniture && <ViewProductModal
                    furniture={furniture}
                ></ViewProductModal>
            }
        </div >
    );
};

export default Shop;