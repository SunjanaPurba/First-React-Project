import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookComponent from './BookComponent';
import './FetchBooks.css'

const FetchBooks = () => {
    const a = useLoaderData();
    // console.log(a);
    return (
        <div>

            <div className='books m-10'>
            {
                a.map(b => <BookComponent 
                    key={b._id} b={b}
                />)
            }
            </div>
        </div>
    );
};

export default FetchBooks;