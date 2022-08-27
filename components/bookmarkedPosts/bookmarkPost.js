import React,{useEffect, useState} from 'react';
import getFunction from '../../functions/getFunction';
// import PostBody from './PostBody/PostBody';
// import PostFooter from './PostFooter/PostFooter';
// import PostHeader from './PostHeader/PostHeader';
import PostBody from './../Posts/PostBody/PostBody'
import PostHeader from '../Posts/PostHeader/PostHeader'
import PostFooter from './../Posts/PostFooter/PostFooter'

const BookmarkPost = ({bookmark}) => {
    const [post, setPosts] = useState({})
    

    useEffect(() => {
        const url = `https://mrhblog.herokuapp.com/post/findPostByItsId/${bookmark}`
        getFunction(url,setPosts)
    }, []);
    return (
        <div className='p-4 mx-1'>
            {console.log(bookmark)}
        {console.log(post)}
            <div className='shadow-xl border rounded bg-white'>
                <PostHeader post={post}/>
                <PostBody  post={post}/>
                <PostFooter post={post}/>
            </div>
        </div>
    );
}

export default BookmarkPost;
