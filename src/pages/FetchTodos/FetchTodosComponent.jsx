import React from 'react';

const FetchTodosComponent = ({todos}) => {
    return (
        <div className='m-10 py-6 px-2 bg-red-300'>
            <p className='text-2xl font-bold'>{todos.title}</p>
            <p className='text-black bg-purple-300 text-xl'>{todos.userId}</p>
        </div>
    );
};

export default FetchTodosComponent;