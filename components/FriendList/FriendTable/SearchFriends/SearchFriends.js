import React from 'react';
import Input from '../../../Input/Input';

const SearchFriends = () => {
    return (
        <form className='flex justify-center items-center bg-gray-800 p-1 rounded '>
            <Input placeHolder='Search your friends' type='text'/>
            <input type="submit" value='search' className='btn btn-success ml-1 text-white' />
        </form>
    );
}

export default SearchFriends;
