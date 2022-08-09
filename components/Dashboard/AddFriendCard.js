import React, { useState } from 'react';
import getFunction from '../../functions/getFunction';
import Image from 'next/image'

const AddFriendCard = ({ friend }) => {

    const [response, setResponse] = useState({});
    const addFriend = () => {
        const url = `http://localhost:5000/profile/addFriend/${friend._id}`
        getFunction(url, setResponse)
    }
    
    return (
        <div className='shadow-2xl p-4 rounded-lg bg-gray-100'>
            <div style={{maxHeight:'500px'}} className='flex justify-center'>
                <img className='h-64' src={`http://localhost:5000/${friend.profilePic}`} alt="" />
            </div>
            <p className='text-success text-xl mt-4'>{friend.name}</p>
            <p className='text-sm text-gray-400 my-2'>{friend.title}</p>
            <p className='text-sm text-gray-400 my-2'>{friend.bio}</p>
            <div className='relative w-full h-12 mt-4'>
                <button onClick={addFriend} className='btn absolute right-0 bottom-0'>Add Friend</button>
            </div>
            {response && <p className="text-success text-center font-bold mt-2">{response.message}</p>}
        </div>
    );
}

export default AddFriendCard;
