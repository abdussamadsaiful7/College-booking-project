import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const loadData = useLoaderData();
    //console.log(loadData);
    const { _id, name, address, admissionDates, established, events, history1, history2, img, ratings, research, sports, process, sportsDetails } = loadData;

    return (
        <div className='p-14 font-serif'>
            <div className='md:flex items-center justify-between gap-6'>
                <div>
                    <h1 className='text-3xl font-extrabold'>{name}</h1>
                    <p>{address}</p>
                    <p>Admission Date: {admissionDates}</p>
                    <p>Established: {established}</p>
                    <p>Events: {events}</p>
                    <p>Research: {research}</p>
                    <p>Sports: {sports}</p>
                    <p>Ratings: {ratings}</p>
                </div>
                <div>
                    <img className='w-full h-72' src={img} alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Admission Process system</h1>
                <p>{process}</p>
            </div>
            <div className='pt-10'>
                <h1 className='text-xl font-bold'>History of Establishment</h1>
                <p>{history1}</p>
                <p>{history2}</p>
            </div>
            <div className='py-10'>
                <h1 className='text-xl font-semibold'>Sports Category:</h1>
                {
                    sportsDetails.map((detail, index) =>
                        // console.log(detail)
                        <p key={(detail, index)} detail={detail}>
                            <p className='mb-6'> {detail.sports1}</p>
                            <p className='mb-6'> {detail.sports2}</p>
                            <p className='mb-6'> {detail.sports3}</p>
                        </p>)

                }
            </div>
        </div>
    );
};

export default CollegeDetails;