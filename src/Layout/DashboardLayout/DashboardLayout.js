import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Sheard/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard/allSeller">All Seller</Link></li>
                        <li><Link to="/dashboard/allBuyer">All Buyer</Link></li>
                        <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                        <li><Link to="/dashboard/myProduct">My Product</Link></li>
                        <li><Link to="/dashboard/myBuyers">My Buyers</Link></li>
                        <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                        <li><Link to="/dashboard/reportedItems">Reported Items</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;