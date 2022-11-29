import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './viewProductModal.css'

const ProductDetailModal = ({ furniture }) => {
    const { user } = useContext(AuthContext);
    const { title, dec, product_img, seller_name, post_time, category, resale_price, original_price } = furniture;
    console.log(furniture);


    const handleBooking = (e) => {
        e.preventDefault();
        const number = e.target.number.value;
        console.log(number)
    }






    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />


            <div className="modal ">
                <div className="modal-box   ">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div className='sm:modal-middle'>
                        <p > Category: {category}</p>
                    </div>
                    <hr className='hr-tagline-modal' />
                    <div className='grid justify-items-center'>
                        <figure className='w-36 '>
                            <img src={product_img} alt="" />
                        </figure>
                    </div>
                    <hr className='hr-tagline-modal ' />
                    <p className="py-4">{dec}</p>
                    <hr className='hr-tagline-modal ' />
                    <div className='flex justify-between mr-2  text-gray-700'>

                        <div className="rating rating-sm">
                            <input disabled type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input disabled type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input disabled type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input disabled type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input disabled type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        </div>
                        <div>
                            <p>Original Price <span className='font-bold'>${original_price}</span></p>
                        </div>
                        <div>
                            <p>Resale Price <span className='font-bold'>${resale_price}</span></p>
                        </div>
                    </div>
                    <hr className='hr-tagline-modal ' />
                    <form onSubmit={handleBooking} >

                        <div>
                            <div className='w-full '>

                                <input type="text" name='title' readOnly defaultValue={title} className=" input font-bold  text-gray-600 w-full max-w-xs  my-2 h-8 " />
                                <hr className='hr-tagline-modal ' />
                                <input type="text" name='title' readOnly defaultValue={resale_price} className=" input font-bold text-gray-600 w-full max-w-xs  my-2 h-8" />
                                <hr className='hr-tagline-modal ' />
                                <input type="text" name='name' readOnly defaultValue={user?.displayName} className=" input font-bold text-gray-600 w-full max-w-xs  my-2 h-8" />
                                <hr className='hr-tagline-modal ' />
                                <input type="text" name='email' readOnly defaultValue={user?.email} className=" input font-bold text-gray-600 w-full max-w-xs  my-2 h-8" />
                                <hr className='hr-tagline-modal ' />
                                <label > <p className='text-xs'>You only give the mobile number and the Book button click will be done</p></label>
                                <input type="text" name='number' placeholder="Mobile number" className="input w-full max-w-xs input-bordered my-2 h-8" />
                                <hr className='hr-tagline-modal ' />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <div className='flex items-center justify-center'>
                                    <div className="avatar">
                                        <div className="w-14 mt-5 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" alt='' />
                                        </div>
                                    </div>

                                    <div className='ml-3'>
                                        <p className='text-xl font-bold'>{seller_name}</p>
                                        <p className='text-sm '>{post_time} days ago</p>
                                    </div>

                                </div>
                            </div>
                            <div className="modal-action">
                                <label htmlFor="" className="btn"><button type='submit'>Book Now</button></label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;