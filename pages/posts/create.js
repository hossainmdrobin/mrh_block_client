import React from 'react';
import Header from '../../components/Header/Header';
import PostSidebar from '../../components/PostSidebar/PostSidebar';
import CreatePost from './../../components/CreatePost/CreatePost'

const PostCreatePost = () => {
    return (
        <>
            <Header />
            <div className="md:flex w-full">
                <PostSidebar />
                <div className='md:w-4/5 mt-12 md:mt-0'>
                    <CreatePost />
                </div>
            </div>
        </>
    );
}

export default PostCreatePost;
