import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin/useAdmin';
import useBuyer from '../../Hooks/useBuyer/useBuyer';
import useSeller from '../../Hooks/useSeller/useSeller';
import Navbar from '../../Pages/Sheard/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div className='bg-gradient-to-r from-violet-100 to-violet-300'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-5 ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar-drawer" className="drawer-overlay  "></label>
                    <ul className="menu p-4 w-80 bg-violet-300 font-mono font-bold text-base-content">
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allSeller">All Seller</Link></li>
                                <li><Link to="/dashboard/allBuyer">All Buyer</Link></li>
                                <li><Link to="/dashboard/reportedItems">Reported Items</Link></li>
                            </>
                        }
                        {
                            isBuyer && <>
                                <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                                <li><Link to="/dashboard/wishlist">My Wishlist</Link></li>

                            </>

                        }
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/myProduct">My Product</Link></li>

                                <li><Link to="/dashboard/addProduct">Add Product</Link></li>


                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;