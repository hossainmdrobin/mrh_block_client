import { BookmarkIcon, TrashIcon } from '@heroicons/react/outline';
import React,{useState} from 'react';
import getFunction from '../../../functions/getFunction'

const PostHeader = ({ post }) => {
    const [response, setResponse] = useState({});
    const deletePost = () => {
        const url = `http://localhost:5000/post/delete/${post._id}`
        getFunction(url,setResponse )
    }
    return (
        <div className='w-full bg-gray-200 p-4 flex justify-between items-center'>
            <div className=''>
                <p className="text-xl">Md Robin Hossain</p>
                <p className="text-sm text-gray-500">{post.createdAt}</p>
            </div>
            <div onClick={deletePost} className="tooltip tooltip-bottom mx-4 py-1 group hover:bg-gray-300 p-1 rounded" data-tip='Delete this post'>
                <TrashIcon className='h-8 text-gray-400'/>
            </div>
        </div>
    );
}

export default PostHeader;
