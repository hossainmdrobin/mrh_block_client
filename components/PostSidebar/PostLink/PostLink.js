import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const PostLink = ({ Icon, link, title,url }) => {
    const router = useRouter()
    return (
        <Link href={url}>
            <div className={`flex pl-4 py-2 border-l-4 ${router.pathname==url? "border-success": "border-white hover:border-gray-300"} cursor-pointer ghost`}>
        {/* <div className={`flex pl-4 items-center ${router.pathname==url?"bg-success":"hover:bg-gray-300"} py-4  cursor-pointer ghost`}> */}
            <Icon className='h-6 mr-3 text-yellow-500' />
            <div>{title}</div>
        </div>
        </Link>
    );
}

export default PostLink;
