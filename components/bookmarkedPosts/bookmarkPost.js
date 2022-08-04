import React,{useEffect, useState} from 'react';
import getFunction from '../../functions/getFunction';
// import PostBody from './PostBody/PostBody';
// import PostFooter from './PostFooter/PostFooter';
// import PostHeader from './PostHeader/PostHeader';
import PostBody from './../Posts/PostBody/PostBody'
import PostHeader from '../Posts/PostHeader/PostHeader'
import PostFooter from './../Posts/PostFooter/PostFooter'

const BookmarkPost = ({bookmark}) => {
    const [post, setPost] = useState({})
    

    useEffect(() => {
        const url = `http://localhost:5000/post/findPostByItsId/${bookmark}`
        getFunction(url,setPost)
    }, []);
    return (
        <div className='p-4 mx-1'>
        {console.log(post.comments)}
            <div className='shadow-xl border rounded bg-white'>
                <PostHeader post={post}/>
                <PostBody  post={post}/>
                <PostFooter post={post}/>
            </div>
        </div>
    );
}

export default BookmarkPost;
