import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { _id } = useParams();
    const [user] = useAuthState(auth);

    // const [reload, setIsReload] = useState(true)

    const [tools, setTools] = useState({});
    const [quantity, setQuantity] = useState({});
    // const [quantity, setNewQuantity] = useState({});

    // const newQuantity = quantity.minimum_order_quantity;
    const newQuantity = quantity;
    const available_quantity = tools.available_quantity;
    const minimum_quantity = tools.min_quantity;

    useEffect(() => {
        const url = `http://localhost:5000/tools/${_id}`;
        fetch(url)
            .then((response) => response.json())
            .then(data => setTools(data))

    }, [_id])




    const handleOrder = event => {
        event.preventDefault();

        const order = {
            email: user.email,
            name: user.displayName,
            orderQuantity: event.target.quantity.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
            productName: tools.name,
            productImage: tools.img,
            productPrice: tools.unit_price,
            productDescription: tools.description

        }

        axios.post('http://localhost:5000/purchase', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Order was successfully')
                    event.target.reset()

                }
                console.log(response);
            })



        const newQuantity = event.target.quantity.value;
        // const newQuantity = quantity.minimum_order_quantity;
        const available_quantity =tools.available_quantity;
        const minimum_quantity = tools.min_quantity;
        console.log(newQuantity);

        if (newQuantity > available_quantity || newQuantity < minimum_quantity) {
            return toast.error('You can not order more than ' + available_quantity + ' And Must order ' + minimum_quantity + ' above of minimum quantity ')

        }

        else {
            toast.success('Your order sucessfully completed')
            event.target.reset()
        }

    }


    const handleQuantityChange = event => {

        const newQuantity = event.target.value;
        setQuantity(newQuantity);


    }

  return (
    <div className="bg-gray-300">

    <div>

        <div className='col-12 col-sm-12 col-lg-4 col-md-6 g-4  mx-auto '>

            <div className="card px-3">
                <div className="card-body">
                    <h5 className="card-title"><strong>Product Name</strong>: {tools?.name}</h5>
                    <p className="card-text"><strong>Description</strong>:  {tools?.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Price</strong>: {tools?.unit_price} $</li>


                    <li className="list-group-item"><strong>Available Quantity</strong>: {tools?.available_quantity}</li>

                    <li className="list-group-item"><strong>Minimum Quantity</strong>: {tools?.min_quantity}</li>


                </ul>

                <div>
                    <form onSubmit={handleOrder} >

                        <input type="number" className="border-2 w-full text-center py-2 border-green-700 my-3" placeholder={tools?.min_quantity}
                            onChange={handleQuantityChange}
                            name="quantity"
                        />


                        <br />


                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input mt-2 text-center input-bordered w-full " />

                        <input type="email" name="email" disabled value={user?.email || ''} className="input text-center input-bordered w-full my-2 " />

                        <input type="number" name="phone" placeholder="Phone Number" class="input input-bordered w-full my-2 " />


                        <input type="text" name="address" placeholder="Address" class="input input-bordered w-full my-2 " />

                        <button

                            type="submit"
                            disabled={newQuantity > available_quantity || newQuantity < minimum_quantity}
                            className="btn btn-primary w-100 mx-auto " >Please Order</button>

                    
                    </form>

                </div>

            </div>
        </div>

    </div>



</div>
);
};
export default Purchase;