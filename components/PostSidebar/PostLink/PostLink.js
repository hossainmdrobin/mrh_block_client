import React from 'react';
import { useRouter } from 'next/router';


const PostLink = ({ Icon, link, title,url }) => {
    const router = useRouter()
    return (
        <div onClick={()=>router.push(url)} className='flex pl-4 rounded items-center py-4 hover:bg-success cursor-pointer ghost'>
            <Icon className='h-8 mr-3 text-yellow-500' />
            <div>{title}</div>
        </div>
    );
}

export default PostLink;
