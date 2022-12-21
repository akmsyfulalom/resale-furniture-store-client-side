import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import ViewProductModal from '../../Shop/ViewProductModal';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const AdvertisingSection = () => {
    const { user } = useContext(AuthContext);
    const [furniture, setFurniture] = useState(null)

    const navigate = useNavigate();

    const { data: advertisement = [] } = useQuery({

        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await fetch('https://resale-furniture-store-server-side.vercel.app/advertisement')
            const data = await res.json()

            return data;
        }
    })

    const handleAdsPageToWishlist = (e) => {
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
        <div className='mt-20'>
            <h1 className='text-3xl font-bold text-center my-5 font-mono text-purple-800'>Adverting Product</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-10 gap-10   '>
                {
                    advertisement.map(ads => <div key={ads._id} className="card card-compact   bg-base-200  shadow-xl  text-xl text-blue-900 font-mono">

                        <div className='flex p-3'>
                            <div className="avatar mr-2 ">
                                <div className="w-12 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>

                            </div>
                            <div >
                                <h3 className='font-serif font-bold'>{ads.seller_name}</h3>
                                <span className='font-thin text-sm'>{ads.email}</span>

                            </div>
                        </div>
                        <PhotoProvider>
                            <PhotoView src={ads.product_img}>
                                <img className='cursor-zoom-in h-64 ' src={ads.product_img
                                } alt="Shoes" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{ads.title}</h2>
                            <div className='flex justify-between '>
                                <div className='flex justify-center items-center '><  FaCalendarAlt /> <span className='ml-1'>{ads.post_time}</span></div>
                                <div className='flex justify-center items-center '>
                                    < FaMapMarkerAlt />
                                    <span className='ml-1'>{ads.location}</span>
                                </div>
                            </div>
                            <div className=''>
                                <p >Used : <span className='font-semibold'>{ads.years_of_used}</span> year</p>
                                <p>Original price: <span>${ads.original_price}</span></p>
                                <p className='font-semibold'>Resale price: <span className='text-xl text-amber-500'>${ads.resale_price}</span></p>
                            </div>

                            <div className='mx-1 mb-1'>
                                <div className="card-actions" >
                                    <label htmlFor="booking-modal" onClick={() => setFurniture(ads)}
                                        className="btn btn-success w-full mb-3 text-white bg-gradient-to-r from-secondary to-primary">Book Now</label>
                                </div>
                                <form onSubmit={handleAdsPageToWishlist} >
                                    <input className='hidden' type="text" name='name' defaultValue={ads.title} />
                                    <input className='hidden' type="text" name='image' defaultValue={ads.product_img} />
                                    <input className='hidden' type="text" name='price' defaultValue={ads.resale_price} />
                                    <input className='hidden' type="text" name='email' defaultValue={user?.email
                                    } />

                                    <button type='submit' className="btn w-full btn-info text-white bg-gradient-to-r from-orange-300 to-lime-500">Wish List</button>
                                </form>

                            </div>
                        </div>
                    </div>)
                }

            </div>
            {
                furniture && <ViewProductModal
                    furniture={furniture}
                    setFurniture={setFurniture}
                ></ViewProductModal>
            }
        </div>
    );
};

export default AdvertisingSection;