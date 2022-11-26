import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products';


const ProductDetails = () => {
    const ProductDetails = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
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