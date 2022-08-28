import React,{useState, useEffect} from 'react'
import getFunction from '../../../functions/getFunction';

const Comments = ({comment}) => {
    const [loadComment, setloadComment] = useState({});
    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `https://mrhblog.herokuapp.com/comment/get/${comment}`
        getFunction(url,setloadComment)
    }, [loadComment]);

    useEffect(()=>{
        const url = `https://mrhblog.herokuapp.com/profile/getProfileByUserId/${loadComment.user}`
        getFunction(url, setUser)

    },[user])
    return (
        <div className='bg-white rounded my-2 p-2'>
            <p className='font-bold'>{user.name}</p>
            <p className='text-gray-500'>{loadComment.body}</p>
        </div>
    );
}

export default Comments;
