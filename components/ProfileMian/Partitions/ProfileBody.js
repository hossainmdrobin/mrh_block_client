import { useEffect, useState } from 'react';
import getFunction from '../../../functions/getFunction';
import CreatePost from '../../CreatePost/CreatePost';
import Post from '../../Posts/Post';
import ProfileInfo from '../EditProfileContent/ProfileInfo';

const ProfileBody = ({ profileDetail }) => {
    const [posts, setPost] = useState([])

    useEffect(() => {
        getFunction('http://localhost:5000/post', setPost)
    }, []);
    return (
        <div className='flex justify-center items-center bg-gray-200'>
            <div style={{ maxWidth: '950px' }} className='w-full flex'>
                <div className="w-2/5 relative">
                    <div className='sticky top-2 bg-white p-2 mt-4 rounded'>
                        <p className="text-xl font-bold">Intro</p>
                        <div>
                            <p className='text-center my-4'>{profileDetail.bio}</p>
                            <button className='btn w-full mb-2'>Edit bio</button>
                        </div>
                        <ProfileInfo profileDetail={profileDetail} />
                        <button className='btn w-full my-2'>Edit Details</button>
                        <button className='btn w-full my-2'>Add Hobbies</button>
                    </div>
                </div>
                <div className="w-3/5">
                    {/* {console.log(posts[0]._id)} */}
                    <CreatePost />

                    {
                        posts ? posts.map((post) => <Post post={post} key={post._id} />) : <p className='text-2xl text-red-500'>No post Found</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileBody;
