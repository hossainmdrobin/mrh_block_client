import React from 'react';
import PostBody from './PostBody/PostBody';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';

const Post = ({post}) => {
    return (
        <div className='p-4 mx-1'>
            <div className='shadow-xl border rounded bg-white'>
                <PostHeader post={post}/>
                <PostBody post={post} />
                <PostFooter post={post} />
            </div>
        </div>
    );
}

export default Post;
