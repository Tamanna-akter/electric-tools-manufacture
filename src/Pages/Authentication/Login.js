import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [token] = useToken(user || gUser)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    let signInErr;
    if (error || gError) {
        signInErr = <p>{error?.message || gError?.message}</p>
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
    };
    return (
        <div className="hero min-h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body w-96 mx-auto ">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                    }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}

                            </label>
                        </div>
                        <div>
                            {signInErr}
                        </div>
                        <div className="form-control w-full ">
                            <input type="submit" value='Login' className=" btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold w-full max-w-xs" />
                        </div>
                    </form>
                    <div className="form-control">
                        <label className="label">
                            <p className='text-lg'>Don't have an account?
                                <Link to='/register' className="btn btn-link capitalize decoration-solid font-bold">Register</Link></p>
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

export default Login;