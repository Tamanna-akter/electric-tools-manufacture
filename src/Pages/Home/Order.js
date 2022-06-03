import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const Order = ({ purchase }) => {
    const [count, setCount] = useState(50);
    const [user] = useAuthState(auth);
    const { _id, name, description, minimumOrder, availableQuantity, price, img } = purchase;
    const userName = user?.displayName;
    const email = user?.email;
    const navigate = useNavigate();
    const handlePlaceOrder = e => {
        e.preventDefault();
        const order = {
            name: e.target.userName.value,
            email: e.target.email.value,
            productName: e.target.name.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            orderQuantity: count,
        };
        fetch('https://thawing-atoll-26359.herokuapp.com/order', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.acknowledged) {
                    fetch(`https://thawing-atoll-26359.herokuapp.com/tools/${_id}`, {
                        method: 'PUT',
                        body: JSON.stringify({
                            name: name,
                            description: description,
                            minimumOrder: minimumOrder,
                            availableQuantity: availableQuantity - count,
                            price: price,
                            img: img
                        }),
                        headers: {
                            'Content-type': 'application/json',
                        },
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.modifiedCount > 0) {
                                toast.success('Your order confirm successfully');
                                navigate('/');
                            }
                        });
                }
            });
    }
    return (
        <div className='w-96 mx-auto mt-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="input-group">
                    <button
                        onClick={() => setCount((count) => count - 1)}
                        className="btn"
                        disabled={count === parseInt(minimumOrder)}>-</button>
                    <input type="text" value={count} className="input input-bordered w-full max-w-xs" readOnly />
                    <button
                        onClick={() => setCount((count) => count + 1)}
                        className="btn"
                        disabled={count === parseInt(availableQuantity)}>+</button>
                </div>
                <form onSubmit={handlePlaceOrder} className="card-body items-center text-center">
                    <input type="text" name='userName' value={userName} className="input input-bordered w-full max-w-xs" readOnly />
                    <input type="text" name='email' value={email} className="input input-bordered w-full max-w-xs" readOnly />
                    <input type="text" name='name' value={name} className="input input-bordered w-full max-w-xs" readOnly />
                    <textarea name='address' placeholder='your address' className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder='your phone number' className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Place Order' className=" btn btn-primary  w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default Order;