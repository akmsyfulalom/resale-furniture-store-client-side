import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ConfirmationModal from '../../Sheard/ConfirmationModal/ConfirmationModal';
import Spinner from '../../Sheard/Spinner/Spinner';


const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const [deletingProduct, setDeletingProduct] = useState(null)
    console.log(deletingProduct)
    const closeModal = () => {
        setDeletingProduct(null)

    }

    const url = `https://resale-furniture-store-server-side.vercel.app/product?email=${user?.email}`;
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    const handleDeleteProduct = product => {
        fetch(`https://resale-furniture-store-server-side.vercel.app/product/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`Successfully deleted ${product.title}`)
                refetch()
            })

    }

    const handleAdsRun = id => {
        fetch(`https://resale-furniture-store-server-side.vercel.app/advertisement/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Ads campaign run')
                    refetch();
                }
            })
    }
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='font-mono font-semibold'>
            <h1 className='pb-2 font-mono font-semibold text-xl'>My Product: {products.length}</h1>

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
                                <td>{product?.title?.slice(0, 30) + '...'}</td>
                                <td><button onClick={() => handleAdsRun(product._id)} className='btn btn-sm btn-success hover text-white'>Start Ads</button></td>
                                <td>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-error btn-sm text-white hover">Delete</label>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingProduct &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete, ${deletingProduct.title}  will be permanently deleted!`}
                    closeModal={closeModal}
                    successButtonName="Delete"
                    successAction={handleDeleteProduct}
                    modalData={deletingProduct}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProduct;