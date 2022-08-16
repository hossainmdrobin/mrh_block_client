import React,{useState} from 'react';
import handleBlur from '../../../functions/handleBlur'
import postFunction from '../../../functions/postFunction'
import {
    ThumbUpIcon
} from '@heroicons/react/solid'
import Comments from './comments';

const PostFooter = ({post}) => {
    const [comment, setComment] = useState({})

    const blur = (e) => {
        handleBlur(e,comment, setComment)
    }

    const handleSubmit = (e) => {
        const url = `http://localhost:5000/comment/add/${post._id}`
        postFunction(url, comment, setComment)
        e.preventDefault()
    }

    return (
        <div class='w-full bg-gray-200 p-4 items-center'>
            <div class="flex justify-between">
                {post.likes && <div class='flex justify-center items-center'>
                    <ThumbUpIcon class='h-8 mr-2 hover:text-primary cursor-pointer'/>
                    <p>{post.likes.length}</p>
                </div>}
                {post.comments && <div>{post.comments.length} comments</div>}
            </div>
            <div class='my-4 flex justify-center items-center'>
                <form onSubmit={handleSubmit} class='w-full'>
                    <textarea onBlur={blur} className='w-full textarea mb-2' name="body" id="comment" placeholder='Comment...' cols="30" rows="3"></textarea><br />
                    <input type="submit" value='Comment' class='btn' />
                </form>
            </div>
            {
                post.comments && post.comments.map(comment=> <Comments comment={comment} key={comment} />)
            }
        </div>

    );
}

export default PostFooter;
