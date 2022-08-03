import React from 'react';
import Header from '../../components/Header/Header';
import Post from '../../components/Posts/Post';
import PostSidebar from '../../components/PostSidebar/PostSidebar';

const DeletePost = () => {
    return (
        <div>
            <Header />
            <div class="md:flex w-full">
                <PostSidebar />
                <div class='md:w-4/5 mt-12 md:mt-0'>
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
}

export default DeletePost;
