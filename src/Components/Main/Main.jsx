import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import  { Toaster } from 'react-hot-toast';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp')
    return (
        <div>
          { noHeaderFooter || <Navbar/>}
           <Outlet/>
           {noHeaderFooter || <Footer/> }
           <Toaster />
        </div>
    );
};

export default Main;