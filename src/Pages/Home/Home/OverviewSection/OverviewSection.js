import React from 'react';
import overviewSection from '../../../../assets/overviewSection.png';

const OverviewSection = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 gap-4">
                <figure><img className='col-span-1' src={overviewSection} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
        </div>
    );
};

export default OverviewSection;