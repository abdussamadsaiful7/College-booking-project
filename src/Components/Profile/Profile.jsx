import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='md:py-32 py-14 md:mx-20'>

            <div className='md:flex item-center justify-center'>
                <img className='w-64 h-64' src={user?.photoURL} alt="" />
                <div className='ml-10'>
                    <p>User Name: {user?.displayName}</p>
                    <p>User Email: {user?.email}</p>
                    <p>User phone: {user?.phoneNumber}</p>
                    <p>Provider ID: {user?.providerId}</p>
                    <p>UID: {user?.uid}</p>
                    <p>Verified: {user?.emailVerified}</p>
                    <p>isAnonymous: {user?.isAnonymous}</p>
                </div>
            </div>


        </div>
    );
};

export default Profile;