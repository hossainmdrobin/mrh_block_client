import React from 'react';
import { useRouter } from 'next/router';

const SidebarItem = ({title, Icon, url}) => {
    const router = useRouter()
    return (
        <div onClick={()=>router.push(url)} class='flex pl-4 py-4 hover:pl-6 transition-all cursor-pointer hover:bg-gray-400'>
            <Icon class='h-8 text-white' />
            <p class='text-white text-xl ml-2'>{title}</p>
        </div>
    );
}

export default SidebarItem;
