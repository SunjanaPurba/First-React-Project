import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex gap-6 justify-center items-center m-6'>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/fetch'>Fetch</Link>
            <Link to='/fetchtodos'>FetchTodos</Link>
            <Link to='/fetchuser'>FetchUser</Link>
            <Link to='/fetchbooks'>FetchBooks</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>SignUp</Link>
        </div>
    );
};

export default NavBar;