import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageStorageKey = '9382f78e6ee6382ce39fb0493002c2fa';
    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const img = result.data.url;
                if (result.success) {
                    const accessories = {
                        name: data.productName,
                        description: data.description,
                        minimumOrder: data.minimumOrder,
                        availableQuantity: data.availableQuantity,
                        price: data.price,
                        img: img
                    };
                    fetch('https://thawing-atoll-26359.herokuapp.com/tools', {
                        method: 'POST',
                        body: JSON.stringify(accessories),
                        headers: {
                            'Content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Accessories added successfully');
                            } else {
                                toast.error('Accessories added faild');
                            }
                        });
                }
            });
    }

    return (
        <div className='w-96 mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h1 className='text-center text-primary text-2xl font-bold'>Add a Product</h1>
                <form onSubmit={handleSubmit(handleAddProduct)} className="card-body items-center text-center ">
                    <div>
                        <input type="text" placeholder='Enter product name' className="input input-bordered w-96 max-w-xs"
                            {...register("productName", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })} />
                        <label className="label">
                            {errors.productName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.productName.message}</span>}
                        </label>
                    </div>
                    <div>
                        <textarea placeholder='Enter product description' className="input input-bordered w-96 max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Product description is Required'
                                }
                            })} />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>
                    <div>
                        <input type="text" placeholder='Enter Minimum Order' className="input input-bordered w-96 max-w-xs"
                            {...register("minimumOrder", {
                                required: {
                                    value: true,
                                    message: 'Minimum Order is Required'
                                }
                            })} />
                        <label className="label">
                            {errors.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                        </label>
                    </div>
                    <div>
                        <input type="text" placeholder='Enter Available Quantity' className="input input-bordered w-96 max-w-xs"
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'Available Quantity is Required'
                                }
                            })} />
                        <label className="label">
                            {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                        </label>
                    </div>
                    <div>
                        <input type="text" placeholder='Enter price' className="input input-bordered w-96 max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                }
                            })} />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
                    </div>

                    <div>
                        <input type="file" className="input input-bordered w-96 max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Requre'
                                },

                            })} />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                        </label>
                    </div>
                    <input type="submit" value='Add Product' className=" btn btn-primary  w-full max-w-xs" />
                </form>

            </div>
        </div>
    );
};

export default AddProduct;