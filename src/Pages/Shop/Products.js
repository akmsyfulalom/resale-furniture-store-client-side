import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';



const Products = ({ product, setFurniture, }) => {
    const { title, dec, product_img } = product;





    return (

        <div>

            <div className="card card-compact bg-base-100 shadow-xl">

                <figure>
                    <PhotoProvider>
                        <PhotoView src={product_img}>
                            <img className='cursor-zoom-in' src={product_img
                            } alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{dec}</p>
                    <div className="card-actions justify-end" >
                        <label
                            onClick={() => setFurniture(product)}
                            htmlFor="booking-modal"
                            className="btn"
                        >Book now</label>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Products;