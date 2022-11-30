
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Sheard/ConfirmationModal/ConfirmationModal';




const AllSeller = () => {

    const [deleteUser, setDeleteUser] = useState(null)
    console.log(deleteUser)
    const closeModal = () => {
        setDeleteUser(null)

    }



    const { data: sellerUsers = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=seller');
            const data = await res.json();
            console.log('all seller', sellerUsers);
            return data;
        }
    });
    const handleUserVerify = id => {
        fetch(`http://localhost:5000/user/verify/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully seller verified ');
                    refetch();
                }
            })
    }

    const handleUserDelete = sellerUser => {

        fetch(`http://localhost:5000/user/${sellerUser._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    toast.success('successfully deleted user');
                    refetch();
                }
            })

    }
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>

            <h1 className='text-xl font-semibold'>All seller : {sellerUsers?.length}</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Seller name</th>
                                <th>Email</th>
                                <th>Identity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sellerUsers?.map((sellerUser, i) => <tr key={sellerUser._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{sellerUser.name}</td>

                                    <td>{sellerUser.email}</td>
                                    <td>
                                        {
                                            sellerUser.verified === 'true' ?
                                                <button onClick={() => handleUserVerify(sellerUser._id)} className="btn btn-success btn-xs btn-disabled text-white">Verified</button>
                                                :
                                                <button onClick={() => handleUserVerify(sellerUser._id)} className="btn btn-success btn-xs text-white">Verify now</button>
                                        }
                                    </td>
                                    <td><label onClick={() => setDeleteUser(sellerUser)} htmlFor="confirmation-modal" className="btn btn-xs btn-error text-white">Delete</label></td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            {
                deleteUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete, will be permanently deleted!`}
                    closeModal={closeModal}
                    successButtonName="Delete"
                    successAction={handleUserDelete}
                    modalData={deleteUser}
                ></ConfirmationModal>
            }
        </div >
    );
};

export default AllSeller;