import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [show, setShow] = useState([]);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className=' px-10 bg-yellow-50 sticky top-0 z-50'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='link' ><Link to="/">HOME</Link></li>
                            <li className='link' > <Link to="/collegeCard">COLLEGE</Link> </li>
                            <li className='link' ><Link to='/admission'>ADMISSION</Link></li>
                            <li className='link' ><Link to='/myCollege'>MY COLLEGE</Link></li>
                            <li className='link' ><Link to='/login'>LOGIN</Link></li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-14 h-14' src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='link'><Link to="/">HOME</Link></li>
                        <li className='link'> <Link to="/collegeCard" >COLLEGE</Link> </li>
                        <li className='link'><Link to='/admission'>ADMISSION</Link></li>
                        <li className='link'><Link to='/myCollege'>MY COLLEGE</Link></li>
                        <li>
                            {
                                user ?
                                    <>

                                        <Link><button onClick={handleLogout} className="link">
                                            LOGOUT</button></Link>

                                    </>
                                    :
                                    <>
                                        <Link to='/login'><button className="link"> LOGIN</button></Link>
                                    </>
                            }

                        </li>
                        <li>
                            {
                                user && (
                                    <Link to='/profile' className="avatar tooltip tooltip-bottom" data-tip={"User Profile"}>
                                        <div className="w-8 h-8 rounded-full 
                                            ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </Link>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;