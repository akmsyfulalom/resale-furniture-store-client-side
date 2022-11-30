import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/TitleHooks/Title.Hooks';

const ViewBlog = () => {
    useTitle('View Blog')
    const viewBlog = useLoaderData()
    const { title, img, dec } = viewBlog;
    console.log(title)
    return (
        <div>
            <div className="card  bg-base-200 py-20 shadow-xl">
                <figure><img className='w-auto lg:w-1/2 rounded-lg' src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{dec}</p>
                    <div className="card-actions justify-center">
                        <Link to="/blogs" >
                            <button className="btn btn-success w-full mb-3 text-white bg-gradient-to-r from-secondary to-primary">Back to Blogs</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewBlog;