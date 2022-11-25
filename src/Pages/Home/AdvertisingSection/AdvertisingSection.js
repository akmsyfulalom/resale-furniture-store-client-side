import React from 'react';
import AdvertisingCard from './AdvertisingCard';

const AdvertisingSection = () => {

    return (
        <div className='mt-20'>
            <h1 className='text-3xl font-bold text-center'>Adverting Product</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-10 gap-10'>
                <AdvertisingCard></AdvertisingCard>
                <AdvertisingCard></AdvertisingCard>
                <AdvertisingCard></AdvertisingCard>
            </div>
        </div>
    );
};

export default AdvertisingSection;