import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

const Spinner = () => {
    return (
        <div className='flex justify-center mt-24'>
            <PacmanLoader className='text-gradient-to-r from-secondary to-primary' />
        </div>
    );
};

export default Spinner;