import React from 'react';
import PostHeader from './PostHeader/PostHeader'
import PostBody from './PostBody/PostBody'
import PostFooter from './PostFooter/PostFooter'

const DeletePostSingle = ({post}) => {
    
    return (
        <div className='mx-4 my-4 rounded-lg'>
            <PostHeader post={post} />
            <PostBody post={post}/>
        </div>
    );
}

export default DeletePostSingle;
