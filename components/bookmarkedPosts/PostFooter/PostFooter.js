import React,{useState} from 'react';
import handleBlur from '../../../functions/handleBlur'
import postFunction from '../../../functions/postFunction'
import {
    ThumbUpIcon
} from '@heroicons/react/outline'
import Comments from './comments';

const PostFooter = ({post}) => {
    

    return (
        <div className='w-full bg-gray-200 p-4 items-center'>
            <div className="flex justify-between">
                <div className='flex justify-center items-center'>
                    <ThumbUpIcon className='h-8 mr-2'/>
                    <p>122</p>
                </div>
                <div>34 comments</div>
            </div>
            <div className='my-4 flex justify-center items-center'>
                <form  className='w-full'>
                    <textarea  className='w-full textarea mb-2' name="body" id="comment" placeholder='Comment...' cols="30" rows="3"></textarea><br />
                    <input type="submit" value='Comment' className='btn' />
                </form>
            </div>
            <Comments />
        </div>

    );
}

export default PostFooter;
