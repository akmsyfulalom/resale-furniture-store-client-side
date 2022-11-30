
import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";



const Products = ({ product, setFurniture, }) => {


    const { user } = useContext(AuthContext);
    const { title, resale_price, original_price, location, post_time, product_img, seller_name, email, years_of_used } = product;






    return (



        <div className="card card-compact bg-base-100 shadow-xl font-semibold">
            <div className='flex p-3'>
                <div className="avatar mr-2 ">
                    <div className="w-12 rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>

                </div>
                <div >
                    <h3 className='font-serif font-bold'>{seller_name}</h3>
                    <span className='font-thin'>{email}</span>

                </div>
            </div>

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


            </div>
            <div className='flex justify-between mx-5'>
                <div className='flex justify-center items-center '><  FaCalendarAlt /> <span className='ml-1'>{post_time}</span></div>
                <div className='flex justify-center items-center '>
                    < FaMapMarkerAlt />
                    <span className='ml-1'>{location}</span>
                </div>
            </div>
            <div className='ml-5'>
                <p >Used : <span className='font-semibold'>{years_of_used}</span> year</p>
                <p>Original price: <span>{original_price}</span></p>
                <p>Resale price: <span>{resale_price}</span></p>
            </div>
            <div className='mx-1 mb-1'>
                <div className="card-actions justify-end" >
                    <label htmlFor="booking-modal" onClick={() => setFurniture(product)}
                        className="btn btn-success w-full mb-3 text-white bg-gradient-to-r from-secondary to-primary">Book Now</label>
                </div>
                <button className="btn w-full btn-info text-white bg-gradient-to-r from-orange-300 to-lime-500">Wish List</button>
            </div>


        </div>




    );
};

export default Products;