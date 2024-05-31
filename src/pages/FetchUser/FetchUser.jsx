import React, { useEffect, useState } from 'react';
import FetchUserComponent from './FetchUserComponent';

const FetchUser = () => {

    const [users, setUser] = useState([]);
    console.log(users);

    useEffect(()=>{
        const fetchUser = async() =>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const user = await response.json();
                setUser(user)

            }catch(error){
                console.log(error);
            }
        }
        fetchUser();
    })
    return (
        <div>
           {
             users.map(user=> (
                <FetchUserComponent user={user} key={user.id} />
             ))
           }
        </div>
    );
};

export default FetchUser;