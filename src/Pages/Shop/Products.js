
import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



const Products = ({ product, setFurniture, }) => {


    const { user } = useContext(AuthContext);
    const { title, resale_price, original_price, location, post_time, product_img, seller_name, email, years_of_used } = product;

    const navigate = useNavigate()

    const handleShopWishlist = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const email = form.email.value;

        console.log(name, image, price, email)
        const adsPageToWishlist = { name, image, price, email }

        fetch('https://resale-furniture-store-server-side.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adsPageToWishlist)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully added to wishlist')
                    navigate('/dashboard/wishlist')
                    form.reset()
                    console.log(data)
                }

            })


    }



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
                        } alt="product img" />
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
                <form onSubmit={handleShopWishlist}>
                    <input type="hidden" name="name" defaultValue={title} className='hidden' />
                    <input type="hidden" name="image" defaultValue={product_img} className='hidden' />
                    <input type="hidden" name="price" defaultValue={resale_price} className='hidden' />
                    <input type="hidden" name="email" defaultValue={user?.email} className='hidden' />

                    <button type='submit' className="btn w-full btn-info text-white bg-gradient-to-r from-orange-300 to-lime-500">Wish List</button>
                </form>
            </div>


        </div>




    );
};

export default Products;