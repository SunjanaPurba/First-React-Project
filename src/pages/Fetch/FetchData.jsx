import React, { useEffect, useState } from 'react';
import { Await } from 'react-router-dom';
import FetchDataComponent from './FetchDataComponent';

const FetchData = () => {

    const [posts, setPost] = useState([]);
    console.log(posts);

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/photos");
                const data = await response.json();
                setPost(data)
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
          {
            posts.map(post=> (
                <FetchDataComponent post={post} key={post.id} />
             ))
          }  
        </div>
    );
};

export default FetchData;