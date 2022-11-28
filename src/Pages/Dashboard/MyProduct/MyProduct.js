import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";


const MyProduct = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/product?email=${user?.email}`;
    const { data: products = [] } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    return (
        <div>
            <h1>My Product: {products.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Picture</th>
                            <th>Product Title</th>
                            <th>Advertising</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><img className='w-16' src={product?.product_img} alt="" /></td>
                                <td>{product?.title.slice(0, 30) + '...'}</td>
                                <td><button className='btn btn-sm btn-success hover text-white'>Start Ads</button></td>
                                <td><button className="btn btn-error btn-sm text-white hover">Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;