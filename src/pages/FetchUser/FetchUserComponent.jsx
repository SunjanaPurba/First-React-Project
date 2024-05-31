import React from 'react';

const FetchUserComponent = ({user}) => {
    return (
        <div className='m-10 py-6 px-2 bg-green-200'>
            <p className='text-2xl font-semibold'>{user.username}</p>
            <p className='text-black bg-pink-300 text-xl'>{user.email}</p>
        </div>
    );
};

export default FetchUserComponent;