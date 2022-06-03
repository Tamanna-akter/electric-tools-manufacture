// import React, { useEffect } from 'react';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile
  } from "react-firebase-hooks/auth";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
  import auth from "../../firebase.init";
import useToken from '../hooks/useToken';
import Loading from '../Shared/Loading';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, upError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [token] = useToken(user || gUser);
    const navigate = useNavigate();
    let nUserErr;
    if (error || gError || upError) {
        nUserErr = <p>{error?.message || gError?.message || upError?.message}</p>
    }
    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (token) {
        navigate('/');
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };
    return (
        <div className="hero min-h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <h1 className='text-center text-primary text-2xl font-bold mt-5'>Sign Up</h1>
                <div className="card-body w-96 mx-auto ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                placeholder="Enter your name"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Your name is required'
                                    }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Enter your email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password at least minimum 6 characters '
                                    },
                                    pattern: {
                                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[a-zA-Z0-9]).{6,}$/,
                                        message: 'Password at least a number, a lowercase and a uppercase '
                                    }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                            </label>
                        </div>
                        <div>
                            {nUserErr}
                        </div>
                        <div className="form-control w-full ">
                            <input type="submit" value='Sign UP' className=" btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold w-full max-w-xs" />
                        </div>
                    </form>
                    <div className="form-control">
                        <label className="label">
                            <p className='text-lg'>Already have an account?
                                <Link to='/login' className="btn btn-link capitalize decoration-solid font-bold">Login</Link></p>
                        </label>
                    </div>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()}
                            className="btn btn-outline btn-error grid h-16  rounded-box place-items-center">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;