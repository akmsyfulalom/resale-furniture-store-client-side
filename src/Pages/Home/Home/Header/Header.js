import React from 'react';
import homeHeaderImg from '../../../../assets/homeHeaderImg.png';

const Header = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={homeHeaderImg} alt='resale' />
                <div>
                    <h1 className="text-5xl font-bold">Resale furniture store will fulfill your dreams!</h1>
                    <p className="py-6">We sell at a huge discount from the original price. Explore and order according to your preferences</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;