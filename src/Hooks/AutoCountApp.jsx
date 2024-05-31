
import React, { useEffect, useState } from "react";

const AutoCountApp = () => {
    
        const[a, setA] = useState(0);
    
        useEffect(()=>{
            const interval = setInterval(()=>{
                setA(prevCount => prevCount + 1);
            }, 1000);
            return () => {
                clearInterval(interval)
            }
        },[])
    
        return (
            <div>
                <p className="text-center text-4xl font-bold bg-red-300 py-4">{a}</p>
            </div>
        )
};

export default AutoCountApp;