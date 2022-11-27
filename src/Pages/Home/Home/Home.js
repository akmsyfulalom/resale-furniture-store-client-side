import React from 'react';
import AdvertisingSection from '../AdvertisingSection/AdvertisingSection';
import Categories from '../Categories/Categories';
import Header from './Header/Header';
import OverviewSection from './OverviewSection/OverviewSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AdvertisingSection></AdvertisingSection>
            <Categories></Categories>
            <OverviewSection></OverviewSection>
        </div>
    );
};

export default Home;