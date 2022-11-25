import React from 'react';
import AdvertisingSection from '../AdvertisingSection/AdvertisingSection';
import Categories from '../Categories/Categories';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AdvertisingSection></AdvertisingSection>
            <Categories></Categories>
        </div>
    );
};

export default Home;