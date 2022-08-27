import React,{useState, useEffect} from 'react';
import getFunction from '../../../functions/getFunction';

const RemoveFriendCard = ({friend, deleteRes, setDeleteRes}) => {
    const [profile, setProfile] = useState({})
    
    useEffect(() => {
        const url = `https://mrhblog.herokuapp.com/profile/getFriendsProfileById/${friend}`
        getFunction(url, setProfile)
    }, [])

    const removeProfile = () => {
        const url = `https://mrhblog.herokuapp.com/profile/deleteFriend/${friend}`
        getFunction(url, setDeleteRes)
    }
    return (
        <div className='shadow-2xl p-4 rounded-lg bg-gray-100'>
            <div style={{maxHeight:'500px'}} className='flex justify-center'>
                <img className='h-64' src={`https://mrhblog.herokuapp.com/${profile.profilePic}`} alt="Profilepic" />
            </div>
            <p className='text-success text-xl mt-4'>{profile.name}</p>
            <p className='text-sm text-gray-400 my-2'>{profile.title}</p>
            <p className='text-sm text-gray-400 my-2'>{profile.bio}</p>
            <div className='relative h-12'>
                <button onClick={removeProfile} className='absolute right-0 btn btn-error text-white'>Remove</button>
            </div>
            {deleteRes && <p>{deleteRes.message}</p>}
        </div>
    );
}

export default RemoveFriendCard;
