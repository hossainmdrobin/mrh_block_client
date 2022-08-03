import React from 'react';

const PostBody = ({post}) => {
    return (
        <div class='p-4'>
            <p className="text-2xl font-bold">{post.title}</p>
            <p className='my-4'>{post.body}</p>
        </div>
    );
}

export default PostBody;
