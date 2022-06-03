import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1 className='text-3xl font-bold  text-green-600'>Welcome to your Dashboard</h1>

                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {
                            !admin &&
                            <>
                                <li><Link to='myorders'>My Orders</Link></li>
                                <li><Link to='addreview'>Add Your Review</Link></li>
                                
                            </>
                        }

                        {
                            admin &&
                            <>
                                <li><Link to='allorders'>Manage All Orders</Link></li>
                                <li><Link to='allproducts'>Manage All Products</Link></li>
                                <li><Link to='addproduct'> Add Product</Link></li>
                                <li><Link to='alluser'> All User</Link></li>
                                
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;