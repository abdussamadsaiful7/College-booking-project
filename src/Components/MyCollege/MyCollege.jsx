import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Review from '../HomePage/Review/Review';
import AddReview from '../HomePage/Review/AddReview';
import { Link } from 'react-router-dom';

const MyCollege = () => {
    const { user } = useContext(AuthContext);
    const [myCollege, setMyCollege] = useState([]);

    console.log(myCollege);

    const url = `https://college-booking-server-hazel.vercel.app/myCollege?email%20=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyCollege(data))
    }, [])


    return (
        <div className='md:p-14 p-6 font-serif'>
            <h1 className='text-center font-serif text-3xl'>List of Applied Students:
                {myCollege.length}</h1>
            <div className='py-10'>
                {
                    myCollege.map(my =>
                        <div className='md:flex items-center justify-between py-10' key={my._id} my={my}>
                            <div>
                                <h1 className='text-xl font-semibold'>Candidate Information:</h1>
                                <p>Name: {my.name}</p>
                                <p>Phone: {my.phone}</p>
                                <p>Email: {my.email}</p>
                                <p>Birthday: {my.birthday}</p>
                                <p>Address: {my.address}</p>
                                <hr />
                                <p>Applied Subject: {my.subject}</p>
                                <p>Applied College/University: {my.college}</p>
                                <Link to='/collegeCard'> <button className='btn btn-xs btn-outline btn-primary rounded-none mt-3'>View College Details</button> </Link>
                            </div>
                            <div>
                                <img className='w-72 h-64 rounded' src={my.image} alt="photo" />
                            </div>
                        </div>
                    )
                }
            </div>
            <AddReview />
        </div>
    );
};

export default MyCollege;