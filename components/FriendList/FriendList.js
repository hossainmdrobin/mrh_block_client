import React from 'react';
import FriendTable from './FriendTable/FriendTable';
import SearchFriends from './FriendTable/SearchFriends/SearchFriends';
import NumOfFriends from './NumOfFriend/NumOfFriends';

const FriendList = () => {
    return (
        <div className='md:w-1/4 relative'>
            <div className='md:sticky top-4'>
                <NumOfFriends />
                <FriendTable />
            </div>
        </div>
    );
}

export default FriendList;
