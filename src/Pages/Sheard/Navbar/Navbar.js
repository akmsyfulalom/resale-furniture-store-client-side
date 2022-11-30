import React, { useContext } from 'react';
import { FaAlignJustify } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const menuItems = <>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/shop">Shop</Link> </li>
        <li> <Link to="/blogs">Blog</Link> </li>
        <li> <Link to="/about">About Us</Link> </li>
        <li> <Link to="/contact">Contact Us</Link> </li>
        <li> <Link to="/dashboard">Dashboard</Link> </li>

    </>
    const handleLogOut = () => {
        LogOut()
            .then(() => {

            })
            .then(error => console.log(error));
    }
    return (
        <div className=' px-10 text-white bg-gradient-to-r from-secondary to-primary'>
            <div className="navbar px-2 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className=" normal-case text-xl">Resale furniture store</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ? <>
                            <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
                        </>
                            :
                            <>
                                <Link to="/login"><button className='btn'>Login</button></Link>
                            </>
                    }
                    <label htmlFor="dashboard-sidebar-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <FaAlignJustify></FaAlignJustify>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;