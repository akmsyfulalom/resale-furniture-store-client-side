import React from 'react';
import overviewSection from '../../../../assets/overviewSection.png';
import appdnl from '../../.../../../../assets/appdnl.png';

const OverviewSection = () => {
    return (
        <div className='mb-10 ' >
            <div className=" card lg:card-side  bg-gradient-to-r from-violet-100 to-violet-200 shadow-xl grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
                <figure><img className='col-span-1 p-5' src={overviewSection} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title p-5  text-blue-700 text-4xl">Get Mobile App</h2>
                    <p className='font-mono font-semibold text-slate-700'>We have kept the website as well as the mobile application so that you can use the one that is convenient for you to use.</p>
                    <div>
                        <figure><img src={appdnl} alt="" /></figure>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewSection;