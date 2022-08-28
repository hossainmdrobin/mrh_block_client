import React, { useEffect, useState } from 'react';
import getFunction from '../../functions/getFunction';
const AddedFriendCard = ({ friend }) => {
    const [profile, setProfile] = useState({})
    useEffect(() => {

        const url = `https://mrhblog.herokuapp.com/profile/getFriendsProfileById/${friend}`
        getFunction(url, setProfile)

    }, [profile])

    return (
        <div className='shadow-2xl p-4 rounded-lg bg-gray-100'>
            <div style={{maxHeight:'500px'}} className='flex justify-center'>
                <img className='h-64' src={`https://mrhblog.herokuapp.com/${profile.profilePic}`} alt="profilePic" />
            </div>
            <p className='text-success text-xl mt-4'>{profile.name}</p>
            <p className='text-sm text-gray-400 my-2'>{profile.title}</p>
            <p className='text-sm text-gray-400 my-2'>{profile.bio}</p>
        </div>
    );
}

export default AddedFriendCard;
