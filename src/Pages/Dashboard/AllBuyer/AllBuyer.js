import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {

    const { data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=buyer');
            const data = await res.json();
            return data;
        }
    });



    return (
        <div>

            <h1 className='text-xl font-semibold'>All seller : {users?.length}</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Seller name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, i) => <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
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