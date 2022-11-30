import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ViewProductModal from '../../Shop/ViewProductModal'



const Categories = () => {

    const [furniture, setFurniture] = useState(null)
    console.log(furniture)


    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/categories', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                console.log(data)
                return data;
            }
            catch (error) {

            }
        }
    });
    return (
        <div className='my-20 bg-gradient-to-r from-violet-100 to-violet-200 p-3 rounded-lg'>
            <h1 className='text-3xl font-bold text-center my-5 font-mono text-purple-800'>Categories</h1>

            <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-10'>
                {
                    categories?.map(category => <div
                        key={category._id}
                    ><Link to={`/products/${category.category_id}`}>
                            <div className="bg-gradient-to-r from-violet-200 to-violet-400     card h-64  shadow-4xl text-xl text-blue-600 font-mono">
                                <figure className="px-5 pt-10">
                                    <img src={category.img} alt="furnitureCategory" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="font-bold">{category.name}</h2>
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
            {
                furniture && <ViewProductModal
                    furniture={furniture}
                ></ViewProductModal>
            }


        </div>
    );
};

export default Categories;