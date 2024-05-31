import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBooks = () => {
    const a = useLoaderData();
    const {_id, image, bookName, Writer, Price, Publishers, NumberofPage, BookType, LastUpdate, Description} = a;
    return (
        <div className='shadow-2xl p-4 rounded-xl'>
        <img className='w-36 h-48' src={image} alt="" />
        <p className='text-lg font-semibold'>{bookName}</p>
        <p><span className='font-semibold text-orange-700'>Writer:</span>{Writer}</p>
        <p><span className='font-semibold text-orange-700'>Price:</span>{Price}Taka</p>
        <p><span className='font-semibold text-orange-700'>Publishers:</span>{Publishers}</p>
        <p><span className='font-semibold text-orange-700'>Number of Page:</span>{NumberofPage}</p>
        <p><span className='font-semibold text-orange-700'>Book Type:</span>{BookType}</p>
        <p><span className='font-semibold text-orange-700'> Last Update:</span>{LastUpdate}</p>
        <p><span className='font-semibold text-orange-700'>Description:</span>{Description}</p>
    </div>
    );
};

export default SingleBooks;