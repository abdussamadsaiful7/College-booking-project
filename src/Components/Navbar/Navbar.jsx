import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className='bg-yellow-50 px-10 sticky top-0 z-50'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='link' ><Link>HOME</Link></li>
                            <li className='link' > <Link>COLLEGE</Link> </li>
                            <li className='link' ><Link>ADMISSION</Link></li>
                            <li className='link' ><Link>MY COLLEGE</Link></li>
                            <li className='link' ><Link>LOGIN</Link></li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-14 h-14' src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='link'><Link>HOME</Link></li>
                        <li className='link'> <Link >COLLEGE</Link> </li>
                        <li className='link'><Link>ADMISSION</Link></li>
                        <li className='link'><Link>MY COLLEGE</Link></li>
                        <li className='link' ><Link>LOGIN</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;