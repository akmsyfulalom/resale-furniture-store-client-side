import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Blogs = () => {
    const blogs = useLoaderData()
    console.log(blogs)
    return (
        <div className='px-10 my-20'>
            <div className='my-20'>
                <h1 className='text-center text-6xl font-mono font bold text-blue-700'>Blogs</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    blogs.map(blog => <div
                        key={blog._id}
                    >
                        <div className="card h-96 card-compact bg-base-200 shadow-xl p-5">
                            <figure><img src={blog.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <p>{blog.dec.slice(0, 50) + '...'}</p>
                                <div className="card-actions ">
                                    <Link to={`/blogs/${blog._id}`}>
                                        <button className="btn btn-success w-full mb-3 text-white bg-gradient-to-r from-secondary to-primary">Learn more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;