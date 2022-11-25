import React from 'react';
import { FaAlignJustify } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/shop">Shop</Link> </li>
        <li> <Link to="/about">About Us</Link> </li>
        <li> <Link to="/contact">Contact Us</Link> </li>
        <li> <Link to="/dashboard">Dashboard</Link> </li>





    </>
    return (
        <div>
            <div className="navbar px-3 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className=" normal-case text-xl">Resale furniture store</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='btn'>Login</button>
                    <label htmlFor="dashboard-sidebar-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <FaAlignJustify></FaAlignJustify>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;