import React,{useState, useEffect} from 'react'
import getFunction from '../../../functions/getFunction';

const Comments = ({comment}) => {
    const [loadComment, setloadComment] = useState({});
    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/comment/get/${comment}`
        getFunction(url,setloadComment)
    }, []);

    useEffect(()=>{
        const url = `http://localhost:5000/profile/getProfileByUserId/${loadComment.user}`
        getFunction(url, setUser)

    },[loadComment])
    return (
        <div className='bg-white rounded my-2 p-2'>
            <p className='font-bold'>{user.name}</p>
            <p className='text-gray-500'>{loadComment.body}</p>
        </div>
    );
}

export default Comments;
