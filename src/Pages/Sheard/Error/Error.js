import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='bg-gradient-to-r from-secondary to-primary h-10 mx-auto  h-screen justify-center items-center'>
            <h1 className='text-4xl flex justify-center items-center py-24 text-white'>An error occurred, please login again or go to the home page</h1>
            <div className='text-center'>
                <Link to="/"> <button className='btn btn-success   mb-3 text-white bg-gradient-to-r from-secondary to-primary'>Go yo Home</button></Link>

            </div>
        </div>
    );
};

export default Error;