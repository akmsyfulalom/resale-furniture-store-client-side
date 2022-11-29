import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ViewProductModal from '../../Shop/ViewProductModal';
import { PhotoProvider, PhotoView } from 'react-photo-view';



const AdvertisingSection = () => {
    const [furniture, setFurniture] = useState(null)

    const { data: advertisement = [] } = useQuery({

        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertisement')
            const data = await res.json()

            return data;
        }
    })

    return (
        <div className='mt-20'>
            <h1 className='text-3xl font-bold text-center'>Adverting Product</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-10 gap-10 '>
                {
                    advertisement.map(ads => <div key={ads._id} className="card card-compact  bg-base-100 shadow-xl p-5">
                        <PhotoProvider>
                            <PhotoView src={ads.product_img}>
                                <img className='cursor-zoom-in' src={ads.product_img
                                } alt="Shoes" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="card-body">
                            <h2 className="card-title">{ads.title}</h2>
                            <p>{ads.dec}</p>
                            <div className="card-actions justify-end" >
                                <label htmlFor="booking-modal" onClick={() => setFurniture(ads)}
                                    className="btn">Book Now</label>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            {
                furniture && <ViewProductModal
                    furniture={furniture}
                ></ViewProductModal>
            }
        </div>
    );
};

export default AdvertisingSection;