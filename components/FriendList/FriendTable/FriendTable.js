import React from 'react';
import SearchFriends from './SearchFriends/SearchFriends';

const FriendTable = () => {
    return (
        <div>
            <SearchFriends />
            <div style={{minHeight:'300px'}} class='bg-gray-200 p-2 rounded mt-4'>
                <div>
                    <p class='text-red-400 text-2xl'>No Result Found</p>
                </div>
                
            </div>
        </div>
    );
}

export default FriendTable;
