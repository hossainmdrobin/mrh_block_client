import React, { useState, useEffect } from 'react';
import getFunction from '../../functions/getFunction';
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar';
import RemoveFriendCard from '../../components/AddedFriendCard/RemoveFriendCard/RemoveFriendCard';

const Remove = () => {
    const [deleteRes, setDeleteRes] = useState({})
    const [profile, setProfile] = useState({})
    const [friends, setFriends] = useState([])
    useEffect(() => {
        const url = 'https://mrhblog.herokuapp.com/profile/getProfileById'
        getFunction(url, setProfile)

    }, [deleteRes])
    useEffect(() => {
        if (profile) {
            setFriends(profile.friends)
        }
    }, [profile])

    return (
        <>
            <DashboardSidebar />
            <div>
                <p className='text-center py-4 text-2xl font-bold'>Remove Friends</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid w-11/12 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4'>
                    {
                        friends?.map((friend,i) => <RemoveFriendCard friend={friend} deleteRes={deleteRes} setDeleteRes={setDeleteRes} key={i}/>)
                    }
                </div>
            </div>
        </>
    );
}

export default Remove;
