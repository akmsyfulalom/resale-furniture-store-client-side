import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Blogs = () => {
    const blogs = useLoaderData()
    console.log(blogs)
    return (
        <div>
            <h1>Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    blogs.map(blog => <div
                        key={blog._id}
                    >
                        <div className="card card-compact bg-base-200 shadow-xl p-10">
                            <figure><img src={blog.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <p>{blog.dec.slice(0, 50) + '...'}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/blogs/${blog._id}`}>
                                        <button className="btn btn-primary">Learn more</button>
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