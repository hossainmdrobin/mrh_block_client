import React,{useState} from 'react';
import {useRouter }  from 'next/router'
import {HomeIcon,DotsHorizontalIcon, ViewGridAddIcon,PencilIcon,UserIcon, TrashIcon} from '@heroicons/react/outline'
import SidebarItem from './SidebarItem/SidebarItem';
const DashboardSidebar = () => {
    const router = useRouter()
    const [isOpen, setisOpen] = useState(true);
    return (
        <div className='relative top-0 z-10'>
            <div className={isOpen?'z-100 w-60 h-screen fixed bg-success transition-all duration-1000 ease-in-out':'w-60 h-screen fixed bg-success -left-60 transition-all duration-1000 ease-in-out'}>
                <p onClick={()=> router.push('/')} className="text-2xl text-center my-4 transition-all duration-500 ease-in-out cursor-pointer">MRH BLOG</p>
                <SidebarItem title='Dashboard' Icon={ViewGridAddIcon} url='/dashboard' />
                <SidebarItem title='Friends' Icon={UserIcon} url='/dashboard/friends' />
                <SidebarItem title='Remove Friends' Icon={TrashIcon} url='/dashboard/remove' />
            </div>
            <div onClick={()=>setisOpen(!isOpen)} className={isOpen?"cursor-pointer flex justify-center items-center top-4 rounded-full fixed left-64 w-10 h-10 bg-yellow-300":"cursor-pointer flex justify-center items-center top-4 rounded-full fixed left-2 w-10 h-10 bg-yellow-300"}><DotsHorizontalIcon className='h-6 text-white' /></div>
            <div onClick={()=> router.push('/')} className={isOpen?"cursor-pointer flex justify-center items-center rounded-full fixed top-20 left-64 bg-red-600 w-10 h-10":"cursor-pointer flex justify-center items-center rounded-full fixed top-20 left-2 bg-red-600 w-10 h-10"}><HomeIcon className='h-8 text-white' /></div>
        </div>
    );
}

export default DashboardSidebar;
