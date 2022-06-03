import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
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
                const email = user?.email;
                const img = result.data.url;
                if (result.success) {
                    const updateUser = {
                        gender: data.gender,
                        nationality: data.nationality,
                        religion: data.religion,
                        location: data.location,
                        link: data.link,
                        img: img
                    };
                    fetch(`https://thawing-atoll-26359.herokuapp.com/user/update/${email}`, {
                        method: 'PUT',
                        body: JSON.stringify(updateUser),
                        headers: {
                            'Content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Profile update successfully');
                                navigate('/dashboard');
                            } else {
                                toast.error('Profile update failed');
                            }
                        });
                }
            });
    }
    return (
        <div className='w-96 mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h1 className='text-center text-primary text-2xl font-bold'>Add Your Information</h1>
                <form onSubmit={handleSubmit(handleAddProduct)} className="card-body items-center text-center ">
                    <div>
                        <input type="text" placeholder='Your gender' className="input input-bordered w-96 max-w-xs"
                            {...register("gender", {
                                required: {
                                    value: true,
                                    message: 'Gender is Required *'
                                }
                            })} />
                        <label className="label">
                            {errors.gender?.type === 'required' && <span className="label-text-alt text-red-500">{errors.gender.message}</span>}
                        </label>
                    </div>

                    <div>
                        <input type="text" placeholder='Enter your nationality' className="input input-bordered w-96 max-w-xs"
                            {...register("nationality", {
                                required: {
                                    value: true,
                                    message: 'Nationality is Required *'
                                }
                            })} />
                        <label className="label">
                            {errors.nationality?.type === 'required' && <span className="label-text-alt text-red-500">{errors.nationality.message}</span>}
                        </label>
                    </div>

                    <div>
                        <input type="text" placeholder='Enter religion' className="input input-bordered w-96 max-w-xs"
                            {...register("religion", {
                                required: {
                                    value: true,
                                    message: 'Religion is Required *'
                                }
                            })} />
                        <label className="label">
                            {errors.religion?.type === 'required' && <span className="label-text-alt text-red-500">{errors.religion.message}</span>}
                        </label>
                    </div>
                    <div>
                        <input type="text" placeholder='Enter your location' className="input input-bordered w-96 max-w-xs"
                            {...register("location", {
                                required: {
                                    value: true,
                                    message: 'Location is Required *'
                                }
                            })} />
                        <label className="label">
                            {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                        </label>
                    </div>

                    <div>
                        <textarea placeholder='Enter your LinkedIn or facebook or any other media profile link ' className="input input-bordered w-96 max-w-xs"
                            {...register("link", {
                                required: {
                                    value: true,
                                    message: 'Profile link is Required'
                                }
                            })} />
                        <label className="label">
                            {errors.link?.type === 'required' && <span className="label-text-alt text-red-500">{errors.link.message}</span>}
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
                    <input type="submit" value='Update' className=" btn btn-primary  w-full max-w-xs" />
                </form>

            </div>
        </div>
    );
};

export default UpdateProfile;