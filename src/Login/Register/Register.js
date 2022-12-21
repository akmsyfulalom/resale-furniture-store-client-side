import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
// import useToken from '../../../hooks/useToken';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/TitleHooks/Title.Hooks';

const SignUp = () => {
    useTitle('Register')
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, updateUser, providerLogIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    // const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();
    const location = useNavigate();
    // if (token) {
    //     navigate('/')

    // }

    const from = location.state?.from?.pathname || '/';




    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)

            .then((result) => {
                const user = result.user;
                toast.success('Successfully create an account!!')
                navigate(from, { replace: true })
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserDatabase(data.name, data.email, data.role)

                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.error(err)
                setSignUpError(err.message)
            })

    };


    const handleGoogleSignUp = () => {
        providerLogIn()
            .then(result => {
                const user = result.user;
                const grole = 'buyer'
                saveUserDatabase(user.displayName, user.email, grole)
                navigate('/')
            })
            .catch(error => console.error('Error', error))
    }




    const saveUserDatabase = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://resale-furniture-store-server-side.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save user with database', data);
                navigate('/')
                // setCreatedUserEmail(email)
            })

    }



    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 shadow-xl px-5 py-10 rounded-xl'>
                <h3 className='text-xl text-center'>Sign Up</h3>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is required"
                        })} className="input input-bordered w-full "></input>
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: "Email is required"
                        })} className="input input-bordered w-full "></input>
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 character or longer" },
                            pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }

                        })} className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <select className='w-full mt-5 input input-bordered' {...register("role", { required: true })}>
                        <option disabled >Please Select one </option>
                        <option value="seller">Seller</option>
                        <option value="buyer">Buyer</option>

                    </select>
                    <input className='btn btn-success mt-4 w-full mb-3 text-white bg-gradient-to-r from-secondary to-primary' type="submit" value='Sign Up' />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link to='/login' className='text-primary'>Login now</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignUp} className='btn btn-success w-full mb-3 text-white bg-gradient-to-r from-secondary to-primaryl'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;