import React from 'react';
import { Link } from 'react-router-dom';

const Research = () => {
    return (
        <div className='md:px-10 py-10 bg-base-200'>
            <h1 className='text-center text-2xl font-semibold mb-8'>Some Research paper by different graduated Student</h1>
            <div className='md:flex items-center justify-around gap-5 mb-20'>
                <div className='space-y-4'>
                    <div className='bg-white p-4 rounded-md hover:shadow-xl hover:border-l'>
                        <p><span className='text-md font-semibold'>Title:</span> Known for pioneering research in environmental sustainability
                            and renewable energy</p>
                        <p>By Abid Hassan</p>
                        <Link className='underline text-blue-500' to="https://www.frontiersin.org/articles/10.3389/fenvs.2022.960795/full" target="_blank">Source ➜</Link>
                    </div>
                    <div className='bg-white p-4 rounded-md hover:shadow-xl hover:border-l'>
                        <p> <span className='text-md font-semibold'>Title:</span> A leading center for cutting-edge technology research and innovation.</p>
                        <p>By David Miller</p>
                        <Link className='underline text-blue-500' to='https://www.openaccessgovernment.org/striving-for-cutting-edge-science-technology-and-innovation-in-japan/114182/' target="_blank">Source ➜</Link>
                    </div>
                    <div className='bg-white p-4 rounded-md hover:shadow-xl hover:border-l'>
                        <p> <span className='text-md font-semibold'>Title:</span>Celebrated for fostering creativity and excellence in the arts.</p>
                        <p>By ADM Assaduzzaman</p>
                        <Link className='underline text-blue-500' to="https://www.wilsonschool.com/fostering-creativity-through-the-arts.html" target="_blank">Source ➜</Link>
                    </div>
                </div>
                <div>
                    <img className='w-full h-96 rounded-md' src="https://i.ibb.co/Pr1dTkY/pic11.webp" alt="photo" />
                </div>
            </div>


            <div className='md:flex items-center justify-around gap-5'>
                <div>
                    <img className='w-full h-96 rounded-md' src="https://i.ibb.co/Y3S4qYk/pic12.jpg" alt="photo" />
                </div>
                <div className='space-y-4'>
                    <div className='bg-white p-4 rounded-md hover:shadow-xl hover:border-l'>
                        <p><span className='text-md font-semibold'>Title:</span> Renowned for breakthroughs in various scientific disciplines.</p>
                        <p>By Dr. json Mile</p>
                        <Link className='underline text-blue-500' to="https://www.cas.org/resources/cas-insights/emerging-science/breakthrough22" target="_blank">Source ➜</Link>
                    </div>
                    <div className='bg-white p-4 rounded-md hover:shadow-xl hover:border-l'>
                        <p><span className='text-md font-semibold'>Title:</span> Leaders in business education and entrepreneurship development.</p>
                        <p>By Dr. Mizanur Rahman Azhari</p>
                        <Link className='underline text-blue-500' to="https://www.emerald.com/insight/content/doi/10.1108/JSBED-03-2018-0106/full/html" target="_blank">Source ➜</Link>
                    </div>
                    <div className='bg-white p-4 rounded-md hover:shadow-xl hover:border-l'>
                        <p><span className='text-md font-semibold'>Title:</span>Pioneers in medical research and healthcare advancements.</p>
                        <p>By Dr. Arun Batt</p>
                        <Link className='underline text-blue-500' to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3149409/" target="_blank">Source ➜</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;