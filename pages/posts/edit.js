import React, { useState, useEffect } from 'react';
import EditPostSingle from '../../components/editPostSingle/EditPostSingle';
import Header from '../../components/Header/Header';
import PostSidebar from '../../components/PostSidebar/PostSidebar';
import getFunction from '../../functions/getFunction';

const EditPost = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const url = 'https://mrhblog.herokuapp.com/post'
        getFunction(url, setPosts)
    }, [])
    return (
        <div>
            <Header />
            <div className="md:flex w-full">
                <PostSidebar />
                <div className='md:w-4/5 mt-12 md:mt-0'>
                    {
                        posts.map(post => <EditPostSingle post={post} />)
                    }

                </div>
            </div>
        </div>
    );
}

export default EditPost;
