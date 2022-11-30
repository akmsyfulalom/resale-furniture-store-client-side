import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import CategoriProductsCard from '../CategoriProductsCard/CategoriProductsCard';

const CategoriesProduct = () => {

    const categories = useLoaderData()
    console.log(categories);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                categories.map(category => <CategoriProductsCard key={category._id} category={category} />)
            }
        </div>
    );
};

export default CategoriesProduct;