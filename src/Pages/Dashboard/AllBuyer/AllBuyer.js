import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-furniture-store-server-side.vercel.app/users?role=buyer');
            const data = await res.json();
            return data;
        }
    });
    const handleUserVerify = id => {
        fetch(`https://resale-furniture-store-server-side.vercel.app/user/verify/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Buyer verified');
                    refetch();
                }
            })
    }




    return (
        <div className='font-mono font-semibold'>

            <h1 className='text-xl font-semibold pb-2'>All seller : {users?.length}</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Buyer name</th>
                                <th>Email</th>
                                <th>Verification</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, i) => <tr key={user._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.verified === 'true' ?
                                                <button onClick={() => handleUserVerify(user._id)} className="btn btn-success btn-disabled btn-xs text-white">Verified</button>
                                                :
                                                <button onClick={() => handleUserVerify(user._id)} className="btn btn-success btn-xs text-white">Verify now</button>
                                        }
                                    </td>
                                    <td><button className="btn btn-xs btn-error">Delete</button></td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBuyer;