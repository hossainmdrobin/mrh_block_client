import React, { useState, useEffect } from 'react';
import CreatePost from '../components/CreatePost/CreatePost';
import FriendList from '../components/FriendList/FriendList';
import Navbar from '../components/Header/Navbar/Navbar';
import Post from '../components/Posts/Post';
import PostSidebar from '../components/PostSidebar/PostSidebar';
import getFunction from '../functions/getFunction';

const Posts = () => {
    const [posts, setPost] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/post/getAllPost`
        getFunction(url, setPost)
    }, []);
    return (
        <>
            <Navbar />
            <div class="md:flex w-full">
                <PostSidebar />
                <div class='md:w-3/5 mt-12 md:mt-0'>
                    <CreatePost />
                    {
                        posts ? posts.map((post) => <Post post={post} key={post._id} />) : <p className='text-2xl text-red-500'>No post Found</p>
                    }
                </div>
                <FriendList />
            </div>
        </>
    );
}

export default Posts;
