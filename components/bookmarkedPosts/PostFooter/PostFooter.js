import React,{useState} from 'react';
import handleBlur from '../../../functions/handleBlur'
import postFunction from '../../../functions/postFunction'
import {
    ThumbUpIcon
} from '@heroicons/react/outline'
import Comments from './comments';

const PostFooter = ({post}) => {
    

    return (
        <div class='w-full bg-gray-200 p-4 items-center'>
            <div class="flex justify-between">
                <div class='flex justify-center items-center'>
                    <ThumbUpIcon class='h-8 mr-2'/>
                    <p>122</p>
                </div>
                <div>34 comments</div>
            </div>
            <div class='my-4 flex justify-center items-center'>
                <form  class='w-full'>
                    <textarea  className='w-full textarea mb-2' name="body" id="comment" placeholder='Comment...' cols="30" rows="3"></textarea><br />
                    <input type="submit" value='Comment' class='btn' />
                </form>
            </div>
            <Comments />
        </div>

    );
}

export default PostFooter;
