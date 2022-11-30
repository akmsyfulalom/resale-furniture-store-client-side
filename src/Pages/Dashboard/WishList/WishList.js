import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const WishList = () => {
    const { user } = useContext(AuthContext);


    const { data: myWishlist = [] } = useQuery({
        queryKey: ['myWishlist'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myWishlist?email=${user?.email}`);
            const data = await res.json();
            console.log(data);
            return data;
        }
    })





    return (
        <div className='font-mono font-semibold'>
            <h1 className='pb-2'>WishList</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myWishlist?.map((wishlist, i) => <tr key={wishlist._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={wishlist.image} alt='wishlist' />
                                        </div>
                                    </div>
                                </td>
                                <td>{wishlist.name}</td>
                                <td>${wishlist.price}</td>
                                <td><Link to='/shop' ><button className='btn btn-xs btn-success  text-white bg-gradient-to-r from-secondary to-primary'>Buy Now</button></Link></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default WishList;