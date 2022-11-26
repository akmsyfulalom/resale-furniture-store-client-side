import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/TitleHooks/Title.Hooks';

// import useToken from '../../../hooks/useToken';

const Login = () => {
    useTitle('Login')
    const { logIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const [logInUserEmail, setLogInUserEmail] = useState('');
    // const [token] = useToken(logInUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    // if (token) {
    //     navigate(from, { replace: true })
    // }


    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        logIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                toast.success('User successfully login now')
                console.log(user)
                setLogInUserEmail(data.email);

            })
            .catch(err => {
                console.error(err)
                setLoginError(err.message)
            })
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 shadow-xl px-5 py-10 rounded-xl'>
                <h3 className='text-xl text-center'>Login</h3>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password Address is required",
                                minLength: { value: 6, message: "Password must be 6 character or longer" }
                            })}
                            className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget password</span></label>

                    </div>
                    <input className='btn btn-accent w-full ' type="submit" value='Login' />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors portal <Link to='/signup' className='text-primary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;