import React from 'react';
import CreatePost from '../../components/CreatePost/CreatePost';
import FriendList from '../../components/FriendList/FriendList';
import Header from '../../components/Header/Header';
import Post from '../../components/Posts/Post';
import PostSidebar from '../../components/PostSidebar/PostSidebar';

const Bookmarks = () => {
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

export default Bookmarks;
