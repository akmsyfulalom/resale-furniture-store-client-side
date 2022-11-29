import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ViewProductModal from '../../../Shop/ViewProductModal';
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
                        <label htmlFor="booking-modal" className="btn">Book Now</label>
                    </div>

                </div>

            </div>
            {
                category && <ViewProductModal
                    furniture={category}
                ></ViewProductModal>
            }
        </div>
    );
};

export default CategoriProductsCard;