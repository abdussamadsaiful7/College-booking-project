import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { app } from '../../firebase/firebase.config';
import google from '../../assets/icon/google.png';
import Lottie from "lottie-react";
import loginAnimation from '../../assets/login.json';

const Login = () => {

    const auth = getAuth(app);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    //sign in by google
    const googleProvider = new GoogleAuthProvider();
    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
                //toast.success('Successfully login by Google!')
            })
            .catch(error => {
                const errorMessage = error.message;
            })
    }


    const { signIn } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
                form.reset()
                toast.success('Successfully login!')

            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className='py-20 bg-base-200'>
            <h1 className="text-3xl font-bold text-center font-serif mb-10">Login now!</h1>
            <div className="hero">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                            <Lottie className='w-full h-96 md:ml-8' animationData={loginAnimation} loop={true} />
                    </div>
                    <form onSubmit={handleLogin} className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a className="label-text-alt ">Don't have account?
                                        <Link className='link link-hover text-red-600 ml-2'
                                            to='/signUp'>Registration</Link></a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Login" />
                            </div>
                        </div>
                        <div className='text-center'>
                            <p>Or</p>
                            <div className=" mt-2 mb-2">
                                <button onClick={handleLoginWithGoogle} className="btn btn-sm btn-active hover:bg-blue-600 hover:text-white btn-ghost">
                                    <img className='w-8 h-8 mr-2' src={google} /> Login by Google</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;