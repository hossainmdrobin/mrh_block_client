import { BookmarkIcon, StarIcon } from '@heroicons/react/outline';
import React from 'react';

const PostHeader = ({ post }) => {
    return (
        <div className='w-full bg-gray-200 p-4 flex justify-between items-center'>
            <div className=''>
                <p className="text-xl">Md Robin Hossain</p>
                <p className="text-sm text-gray-500">{post.createdAt}</p>

            </div>
            <div className="tooltip tooltip-bottom mx-4 py-1 group" data-tip='Book mark this post'>
                <label class="swap">
                    <input type="checkbox" />
                    <BookmarkIcon class="swap-on fill-current text-yellow-500 h-6" width="48" height="48" viewBox="0 0 24 24"/>
                    <BookmarkIcon class="swap-off fill-current text-gray-400 h-6" width="48" height="48" viewBox="0 0 24 24"/>

                </label>
                
                {/* <StarIcon className='group-hover:amimate-bounce h-6 mb-1 group-hover:animate-bounce text-yellow-500' /> */}
            </div>
        </div>
    );
}

export default PostHeader;
