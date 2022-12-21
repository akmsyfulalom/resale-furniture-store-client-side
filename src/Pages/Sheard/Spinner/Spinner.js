import React from 'react';
import { RevolvingDot } from 'react-loader-spinner';


const Spinner = () => {
    return (
        <div className='flex justify-center items-center mt-28 '>
            <RevolvingDot
                className="h-28 w-28 rounded-full text-fuchsia-700 "



                secondaryColor=''
                ariaLabel="revolving-dot-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Spinner;