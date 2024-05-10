import React from 'react';
import Marquee from 'react-fast-marquee';

const Mar = () => {
    return (
        <div className=' bg-emerald-300 p-2'>
            <Marquee>
                <p className='m-4 text-xl font-bold'>I can be a React component, multiple React components, or just some text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nihil earum dolor quae, reiciendis repellendus.</p>
            </Marquee>
        </div>
    );
};

export default Mar;