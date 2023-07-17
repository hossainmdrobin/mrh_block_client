import React from 'react';

const PostBody = ({post}) => {
    return (
        <div className='p-4'>
            <p className="font-bold">{post.title}</p>
            <p className='my-2'>{post.body}</p>
            <hr />
        </div>
    );
}

export default PostBody;
