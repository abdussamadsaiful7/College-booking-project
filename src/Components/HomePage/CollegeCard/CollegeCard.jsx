import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = () => {

    const [cards, setCards] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const filteredColleges = cards.filter((college) =>
    college.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
};

    useEffect(() => {
        fetch("collegeData.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className='py-20 px-10'>
            <div className='text-center'>
                <input value={searchValue} onChange={handleSearch} type="text" placeholder="Search college name" className="input input-bordered input-info w-96 mb-10 max-" />
            </div>
            <div className='md:grid grid-cols-3 gap-6  font-serif'>
                {
                    filteredColleges.slice(0, 3).map((card) =>
                        <div key={card.name} card={card}>
                            <div className='shadow-sm rounded-lg cursor-pointer  hover:scale-[1.1]   border p-6 duration-300'>
                                <img className='w-full h-52' src={card.img} alt="photo" />
                                <p className='text-xl font-semibold mt-2'>{card.name}</p>
                                <p className='text-sm'>Admission: {card.admissionDates}</p>
                                <p className='text-sm'>Events: {card.events}</p>
                                <p className='text-sm'>Research:{card.research}</p>
                                <p className='text-sm'>Sports: {card.sports}</p>
                                <div className=''>
                                    <button className='btn btn-outline btn-xs rounded-none'>
                                        <Link>Details</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default CollegeCard;