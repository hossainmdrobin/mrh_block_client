import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import getFunction from '../../../functions/getFunction';
import Header from '../../../components/Header/Header';
import postFunction from '../../../functions/postFunction';
import handleBlur from './../../../functions/handleBlur'

const PostId = () => {
    const [posts, setPosts] = useState({})
    const [editedPost, setEditedPost] = useState({})
    const [response, setResponse] = useState({})
    const router = useRouter()
    const id = router.query.postId
    useEffect(() => {
        const url = `http://localhost:5000/post/findPostByItsId/${id}`
        getFunction(url, setPosts)
    }, [])


    const blur = (e) => {
        handleBlur(e, editedPost, setEditedPost)
    }

    const hanldleSubmit = (e) => {
        postFunction(url, editedPost, setResponse)
        e.preventDefault()
    }

    return (
        <>
            {console.log(posts)}
            <Header />

            <div className='flex items-center justify-center flex-col mb-4'>
                <p className='text-center text-3xl font-bold my-4'>Edit Post</p>
                <div class="card w-4/5 bg-base-100 shadow-xl image-full">
                    <div class="card-body">
                        {posts.post && <form onSubmit={hanldleSubmit} action="">
                            <input onBlur={blur} value={posts.post.title} className='input w-full my-4 text-black' type="text" name='title' placeholder='Post Tile' />
                            <textarea onBlur={blur} value={posts.post.body} className='textarea w-full text-black' name="body" id="" placeholder='Post Content' cols="30" rows="10"></textarea>
                            <div className='relative h-12 mt-2'>
                                <input className='absolute right-0 btn' type="submit" value="Submit" />
                            </div>
                        </form>}
                    </div>
                </div>

            </div>
        </>
    );
}

export default PostId;
