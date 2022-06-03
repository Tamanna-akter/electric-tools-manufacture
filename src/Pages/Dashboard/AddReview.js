import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddReview = () => {
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
                    const review = {
                        name: data.name,
                        comment: data.comment,
                        ratings: data.ratings,
                        img: img
                    };
                    fetch('https://thawing-atoll-26359.herokuapp.com/review', {
                        method: 'POST',
                        body: JSON.stringify(review),
                        headers: {
                            'Content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Your review added successfully');
                            } else {
                                toast.error('Your review added faild');
                            }
                        });
                }
            });
    }
    return (
        <div>
            <div className='w-96 mx-auto'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <h1 className='text-center text-primary text-2xl font-bold'>Add Your Review</h1>
                    <form onSubmit={handleSubmit(handleAddProduct)} className="card-body items-center text-center ">
                        <div>
                            <input type="text" placeholder='Enter your name' className="input input-bordered w-96 max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required *'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div>
                            <textarea placeholder='Enter your comment' className="input input-bordered w-96 max-w-xs"
                                {...register("comment", {
                                    required: {
                                        value: true,
                                        message: 'Your comment is Required *'
                                    }
                                })} />
                            <label className="label">
                                {errors.comment?.type === 'required' && <span className="label-text-alt text-red-500">{errors.comment.message}</span>}
                            </label>
                        </div>
                        <div>
                            <input type="text" placeholder='Enter ratings' className="input input-bordered w-96 max-w-xs"
                                {...register("ratings", {
                                    required: {
                                        value: true,
                                        message: 'ratings is Required *'
                                    }
                                })} />
                            <label className="label">
                                {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                            </label>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Upload your image</span>
                            </label>
                            <input type="file" className="input input-bordered w-96 max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Upload your image *'
                                    },

                                })} />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                            </label>
                        </div>
                        <input type="submit" value='Add Comment' className=" btn btn-primary  w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddReview;