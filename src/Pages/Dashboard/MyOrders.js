import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrder from './MyOrder';
import MyOrderModal from './MyOrderModal';


const MyOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const { isLoading, error, data: orders, refetch } = useQuery('orders', () =>
        fetch(`https://thawing-atoll-26359.herokuapp.com/order/${email}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        return 'An error has occurred: ' + error.message
    }

    return (
        <div>
            MyOrders {orders.length}
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <MyOrder
                                key={index}
                                order={order}
                                index={index}
                                setDeleteOrder={setDeleteOrder}
                            ></MyOrder>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteOrder && <MyOrderModal
                    deleteOrder={deleteOrder}
                    setDeleteOrder={setDeleteOrder}
                    refetch={refetch}
                ></MyOrderModal>
            }
        </div>
    );
};

export default MyOrders;