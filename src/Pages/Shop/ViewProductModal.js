import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './viewProductModal.css'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const ProductDetailModal = ({ furniture }) => {
    const { user } = useContext(AuthContext);

    const { title, post_time, category, resale_price, original_price, product_img } = furniture;

    const navigate = useNavigate()

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const number = form.number.value;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const meet = form.meet.value;
        const addedOrders = {
            email, number, title, price, img, meet,
        }
        fetch('http://localhost:5000/addedorders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedOrders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Order added successfully')
                    form.reset()
                    navigate('/dashboard/myOrders')
                    console.log(data);
                }
            })
    };

    return (
        <div className='px-10'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />


            <div className="modal ">
                <div className="modal-box   ">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <span>{post_time}</span>
                    <div className='sm:modal-middle mb-3'>
                        <p > Category: {category}</p>
                    </div>
                    <hr className='hr-tagline-modal ' />
                    <div className='flex justify-between mr-2   text-gray-700'>


                        <div>
                            <p>Original Price <span className='font-bold'>${original_price}</span></p>
                        </div>
                        <div>
                            <p>Resale Price <span className='font-bold'>${resale_price}</span></p>
                        </div>
                    </div>
                    <hr className='hr-tagline-modal ' />

                    <form onSubmit={handleBooking} >

                        <div className=''>
                            <input type="text" name='title' disabled defaultValue={title} className=" hidden    input   w-full  mb-4 " />
                            <input type="text" name='img' disabled defaultValue={product_img} className=" hidden    input   w-full  mb-4 " />

                            <input type="text" name='price' defaultValue={resale_price} className=" input hidden  input-bordered    w-full  mb-4" />

                            <input type="text" name='name' disabled defaultValue={user?.displayName} className="  mt-4 input  input-bordered   w-full  mb-4" />

                            <input type="text" name='email' disabled defaultValue={user?.email} className=" input    input-bordered  w-full  mb-4" />


                            <input type="text" name='number' placeholder="Mobile number" className="input w-full input-bordered mb-4" />
                            <input type="text" name='meet' placeholder='Meeting location' className=" input  input-bordered  w-full  mb-4" />

                        </div>
                        <div className="modal-action">
                            <label htmlFor="" className="btn btn-success w-full mb-3 text-white bg-gradient-to-r from-secondary to-primary"><button type='submit'>Book Now</button></label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;