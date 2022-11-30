import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: orders = [] } = useQuery({
        queryKey: ['myOrder'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myOrder?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='font-mono font-semibold'>
            <h1 className='pb-2'>My Orders</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Picture</th>
                            <th>Meeting Location</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>

                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={order.img} alt="order img" />
                                        </div>
                                    </div>

                                </td>


                                <td>{order.meet}</td>
                                <td>${order.price}</td>
                                <td><button className='btn btn-xs'>Pay</button></td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;