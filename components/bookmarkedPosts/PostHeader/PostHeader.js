import { BookmarkIcon } from '@heroicons/react/outline';
import React,{useState} from 'react';
import getFunction from '../../../functions/getFunction'

const PostHeader = ({ post }) => {
    const [response, setResponse] = useState({});

    const addBookmark = () => {
        const url = `https://mrhblog.herokuapp.com/post/bookmark/${post._id}`
        getFunction(url,setResponse )
    }

    return (
        <div className='w-full bg-gray-200 p-4 flex justify-between items-center'>
            <div className=''>
                <p className="text-xl">Md Robin Hossain</p>
                <p className="text-sm text-gray-500">15 jan 1999</p>

            </div>
            <div className="tooltip tooltip-bottom mx-4 py-1 group" data-tip='Book mark this post'>
                <label class="swap">
                    <input type="checkbox" />
                    <BookmarkIcon class="swap-on fill-current text-yellow-500 h-6" width="48" height="48" viewBox="0 0 24 24" />
                    <BookmarkIcon class="swap-off fill-current text-gray-400 h-6" width="48" height="48" viewBox="0 0 24 24" />
                </label>
            </div>
        </div>
    );
}

export default PostHeader;
