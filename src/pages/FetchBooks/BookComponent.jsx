import React from 'react';
import { Link } from 'react-router-dom';


const BookComponent = ({ b }) => {

    const {_id, image, bookName, Writer, Price, Publishers, NumberofPage, BookType, LastUpdate, Description} = b;
    return (
        <div className='shadow-2xl p-4 rounded-xl'>
            <img className='w-36 h-48' src={image} alt="" />
            <p className='text-lg font-semibold'>{bookName}</p>
            <p><span className='font-semibold text-orange-700'>Writer:</span>{Writer}</p>
            <p><span className='font-semibold text-orange-700'>Price:</span>{Price}Taka</p>
            <Link to={`/singBooks/${_id}`} className='btn btn-outline m-4'>View Details</Link>
        </div>
    );
};

export default BookComponent;