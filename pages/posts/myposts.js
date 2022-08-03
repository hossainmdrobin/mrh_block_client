import React from 'react';
import Post from '../../components/Posts/Post';
import PostSidebar from '../../components/PostSidebar/PostSidebar';
import Header from './../../components/Header/Header'
const Myposts = () => {
    return (
        <>
        <Header />
            <div class="md:flex w-full">
                <PostSidebar />
                <div class='md:w-4/5 mt-12 md:mt-0'>
                    <Post />
                    <Post />
                </div>
            </div>
            
        </>
    );
}

export default Myposts;
