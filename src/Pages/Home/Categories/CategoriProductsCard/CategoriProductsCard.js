import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const CategoriProductsCard = ({ category }) => {
    const { title, location, product_img
        , resale_price, dec } = category
    return (
        <div>
            <div className="card h-96 card-compact bg-base-100 shadow-xl">

                <figure>
                    <PhotoProvider>
                        <PhotoView src={product_img}>
                            <img className='cursor-zoom-in w-64' src={product_img
                            } alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{dec.slice(0, 100) + '...'}</p>
                    <div className="card-actions justify-end" >
                        <label htmlFor="my-modal-6" className="btn">Book Now</label>
                    </div>

                </div>

            </div>
            <div>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{title}</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Yay!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriProductsCard;