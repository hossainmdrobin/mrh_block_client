import React from 'react';
import { useRouter } from 'next/router';

const SidebarItem = ({title, Icon, url}) => {
    const router = useRouter()
    return (
        <div onClick={()=>router.push(url)} className='flex pl-4 py-4 hover:pl-6 transition-all cursor-pointer hover:bg-gray-400'>
            <Icon className='h-8 text-white' />
            <p className='text-white text-xl ml-2'>{title}</p>
        </div>
    );
}

export default SidebarItem;
