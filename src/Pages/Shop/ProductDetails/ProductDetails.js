import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products';


const ProductDetails = () => {

    const ProductDetails = useLoaderData();


    const { data: verifiedUsers = [] } = useQuery({
        queryKey: ['verifiedUsers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/verifiedUsers?verified=true');
            const data = await res.json()
            console.log(data)
            return data;

        }
    })
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    verifiedUsers?.map(verifiedUser => <Products
                        key={verifiedUser._id}

                        verifiedUser={verifiedUser}
                    ></Products>)
                }
                {
                    ProductDetails?.map(product => <Products
                        key={product._id}
                        product={product}
                    ></Products>)
                }
            </div>

        </div>
    );
};

export default ProductDetails;