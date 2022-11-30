import React from 'react';
import { Link } from 'react-router-dom';
import homeHeaderImg from '../../../../assets/homeHeaderImg.png';

const Header = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={homeHeaderImg} alt='resale' />
                <div>
                    <h1 className="text-5xl font-mono font-bold text-blue-700">Resale furniture store will fulfill your dreams!</h1>
                    <p className="py-6 font-mono text-xl font-semibold text-slate-700">We sell at a huge discount from the original price. Explore and order according to your preferences</p>
                    <Link to='/shop'><button className="btn btn-success w-full mb-3 text-white bg-gradient-to-r from-secondary to-primary mr-5 mt-5">Shop explore</button></Link>
                    <Link to='/blogs'><button className="btn w-full btn-info text-white bg-gradient-to-r from-orange-300 to-lime-500">Blog Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;