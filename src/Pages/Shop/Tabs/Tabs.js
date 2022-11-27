import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Tabs = () => {

    const { data: categories = [], } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            console.log(data);
            return data;

        }
    })

    return (
        <div className='flex'>
            {
                categories?.map(category => <div className="tabs ">
                    <button className="tab tab-lifted">{category.name}</button>

                </div>)
            }
        </div>
    );
};

export default Tabs;