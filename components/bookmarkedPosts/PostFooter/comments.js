import React,{useState, useEffect} from 'react'
import getFunction from '../../../functions/getFunction';

const Comments = ({comment}) => {
    
    return (
        <div className='bg-white rounded my-2 p-2'>
            <p className='font-bold'>Robin</p>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius?</p>
        </div>
    );
}

export default Comments;
