import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Lottie from "lottie-react";
import loginAnimation from '../../assets/login.json';
import { toast } from 'react-hot-toast';

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://college-booking-server-hazel.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    toast.success('User created successfully!');
                                    navigate('/')
                                }
                            })
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })

    };



    return (
        <div className='my-14 md:mx-10' >
            <h1 className="text-3xl text-center font-bold">SignUp please!</h1>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse 
                  md:pl-10">

                    <div className="text-center lg:text-left">
                        <Lottie className='w-full h-96 md:ml-8' animationData={loginAnimation} loop={true} />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name", { required: true })}
                                    className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photoURL" {...register("photoURL", { required: true })}
                                    className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-500'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,
                                    minLength: 6,

                                })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-500'>password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>password must be 6 character </p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='pl-4 pb-4'>Already have an account ?
                            <Link className='text-red-500' to='/login'>Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;