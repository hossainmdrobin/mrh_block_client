import React from 'react';
import Navigation from './navigation/navigation';
import { PencilIcon, DotsHorizontalIcon } from '@heroicons/react/solid'

const ProfileNavigation = () => {
    return (
        <div>
            <div class='w-full flex justify-between items-center absolute -top-12'>
                <div class='flex'>
                    <Navigation title='Posts' />
                    <Navigation title='About' />
                    <Navigation title='Friends' />
                </div>
                <DotsHorizontalIcon class='h-8 w-12 p-1 rounded bg-gray-200 cursor-pointer hover:bg-gray-300 mr-6' />
            </div>
        </div>
    );
}

export default ProfileNavigation;
