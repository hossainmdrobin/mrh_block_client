import React from 'react';
import PostLink from './PostLink/PostLink';
import {
    StarIcon,
    UserIcon,
    ClipboardListIcon,
    PlusIcon,
    PencilAltIcon,
    TrashIcon
    
} from '@heroicons/react/outline';

const PostSidebar = () => {
    return (
        <div className='relative md:w-1/4'>
            <div style={{ maxHeight: '560px' }} className='w-full md:sticky top-4 mt-4 rounded'>
                <PostLink link='/sldkf' title='Recent Posts' Icon={ClipboardListIcon} url='/posts'/>
                <PostLink link='/sldkf' title='Bookmarks' Icon={StarIcon} url='/posts/bookmarks'/>
                <PostLink link='/sldkf' title='My Post' Icon={UserIcon} url='/posts/myposts'/>
                <PostLink link='/sldkf' title='Create Post' Icon={PlusIcon} url='/posts/create' />
                <PostLink link='/sldkf' title='Edit Post' Icon={PencilAltIcon} url='/posts/edit' />
                <PostLink link='/sldkf' title='Delete Post' Icon={TrashIcon} url='/posts/delete' />
                {/* <div className='text-center py-16 px-4 my-4 text-white bg-success rounded cursor-pointer' >
                    addvertisement
                </div> */}
            </div>
        </div>
    );
}

export default PostSidebar;
