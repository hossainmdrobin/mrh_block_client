import { BookmarkIcon } from '@heroicons/react/outline';
import React,{useState,useEffect} from 'react';
import getFunction from '../../../functions/getFunction'

const PostHeader = ({ post }) => {

    const [response, setResponse] = useState({});
    const [profile, setProfile] = useState({});

    const addBookmark = () => {
        const url = `https://mrhblog.herokuapp.com/post/bookmark/${post._id}`
        getFunction(url,setResponse )
    }
    useEffect(() => {
        const url = `https://mrhblog.herokuapp.com/profile/getProfileByUserId/${post.author}`
        getFunction(url,setProfile )
    }, []);

    return (
        <div className='w-full bg-gray-200 p-4 flex justify-between items-center'>
            <div className=''>
                <p className="text-xl">{profile.name}</p>
                <p className="text-sm text-gray-500">{post.createdAt}</p>
            </div>
            <div onClick={addBookmark} className="tooltip tooltip-bottom mx-4 py-1 group" data-tip='Book mark this post'>
                <label className="swap">
                    <input type="checkbox" />
                    <BookmarkIcon className="swap-on fill-current text-yellow-500 h-6" width="48" height="48" viewBox="0 0 24 24" />
                    <BookmarkIcon className="swap-off fill-current text-gray-400 h-6" width="48" height="48" viewBox="0 0 24 24" />
                </label>
            </div>
        </div>
    );
}

export default PostHeader;
