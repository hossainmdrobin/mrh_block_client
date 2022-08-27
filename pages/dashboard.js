import React, { useState, useEffect } from 'react';
import AddFriendCard from '../components/Dashboard/AddFriendCard';
import DashboardSidebar from '../components/Dashboard/DashboardSidebar';
import getFunction from '../functions/getFunction'
import { useRouter } from 'next/dist/client/router';

const Dashboard = () => {
    const [addFriends, setAddFriends] = useState([])
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/auth/login')
        }
        const url = `https://mrhblog.herokuapp.com/profile/getUnaddedProfile`
        getFunction(url, setAddFriends)
    }, []);

    return (
        <>
            <DashboardSidebar />
            <div className='flex justify-center items-center'>
                <div className='grid w-11/12 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4'>
                    {console.log(addFriends)}
                    {
                        addFriends.map(friend => <AddFriendCard friend={friend} />)
                    }
                </div>
            </div>
        </>
    );
}

export default Dashboard;
