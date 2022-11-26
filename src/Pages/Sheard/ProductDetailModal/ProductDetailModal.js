import React from 'react';

const ProductDetailModal = ({ furniture }) => {
    const { title, dec, product_img, seller_name, post_time, category } = furniture
    console.log(furniture);
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box w-11/12 max-w-5xl ">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div className=''>
                        <p > Category: {category}</p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        </div>
                    </div>
                    <figure className='flex justify-center'>
                        <img className="" src={product_img} alt="" />
                    </figure>
                    <p className="py-4">{dec}</p>
                    <div>
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>

                            <div className='ml-5'>
                                <p className='text-xl font-bold'>{seller_name}</p>
                                <p className='text-sm '>{post_time} days ago</p>
                            </div>

                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;