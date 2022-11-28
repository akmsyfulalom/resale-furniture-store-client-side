import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ConfirmationModal from '../../Sheard/ConfirmationModal/ConfirmationModal';


const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const [deletingProduct, setDeletingProduct] = useState(null)
    const closeModal = () => {
        setDeletingProduct(null)

    }

    const url = `http://localhost:5000/product?email=${user?.email}`;
    const { data: products = [], refetch } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/product/${product._id}`, {
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
                                <td>{product?.title?.slice(0, 30) + '...'}</td>
                                <td><button className='btn btn-sm btn-success hover text-white'>Start Ads</button></td>
                                <td>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-error btn-sm text-white hover">Delete</label>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
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