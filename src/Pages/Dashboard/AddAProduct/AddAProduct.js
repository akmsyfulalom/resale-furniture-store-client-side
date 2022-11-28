
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/TitleHooks/Title.Hooks';
import './addProduct.css'


const AddProduct = () => {
    const { user } = useContext(AuthContext);
    useTitle('Add Product');

    const hostImgbbKey = process.env.REACT_APP_imgbb_key;
    console.log(hostImgbbKey);


    // const { data: products = [] } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/products');
    //         const data = await res.json();

    //         return data;
    //     }
    // })

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const location = form.location.value;
        const original_price = form.original_price.value;
        const resale_price = form.resale_price.value;
        const dec = form.dec.value;
        const productsImg = form.product_img.files[0];
        const years_of_used = form.years_of_used.value;
        const post_time = form.post_time.value;
        const category = form.category.value;
        const displayName = form.name.value;
        const email = form.email.value;

        const formData = new FormData();
        formData.append('image', productsImg)
        const url = `https://api.imgbb.com/1/upload?key=${hostImgbbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const addProduct = {
                        title: title,
                        location: location,
                        original_price: original_price,
                        resale_price: resale_price,
                        dec: dec,
                        product_img: imgData.data.url,
                        years_of_used: years_of_used,
                        post_time: post_time,
                        category: category,
                        displayName: displayName,
                        email: email
                    }
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addProduct)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Successfully added your a Product');
                                form.reset();
                                console.log(data);
                            }
                        })
                }

            })


    }




    return (
        <div>


            <div className="hero  bg-base-200 ">

                <form onSubmit={handleAddProduct}>

                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 px-10 my-10 py-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Furniture Name</span>
                            </label>
                            <input type="text" name='title' className="input h-10 input-bordered" />
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="form-control col-span-1">
                                <label className="label">
                                    <span className="label-text">Original price</span>
                                </label>
                                <input type="text" name='original_price' className="input h-10  input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Resale Price</span>
                                </label>
                                <input type="text" name='resale_price' className="input h-10 input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text mt-2">Image</span>
                            </label>
                            <input type="file" name='product_img' className="input h-10 input-bordered pt-1 input_photo" />
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="form-control col-span-1">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name='location' className="input h-10 input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Used of year</span>
                                </label>
                                <input type="text" name='years_of_used' className="input h-10 input-bordered" />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="form-control col-span-1">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' readOnly defaultValue={user?.email} className="input h-10 input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={user?.displayName} className="input h-10 input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select className='input h-10 input-bordered ' name='category'>
                                <option value="beds">Beds</option>
                                <option value="Wooden">Wooden</option>
                                <option value="Bamboo">Bamboo</option>
                                <option value="Wicker">Wicker</option>
                                <option value="Metal">Metal</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="text" name='post_time' className="input h-10 input-bordered input_photo" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text mt-2">Description</span>
                            </label>
                            <textarea name='dec' className="textarea input-bordered" ></textarea>                        </div>
                        <input className='btn btn-accent w-full mt-5 ' type="submit" value='Add a product' />
                    </div>

                </form>
            </div>
        </div >
    );
};

export default AddProduct;