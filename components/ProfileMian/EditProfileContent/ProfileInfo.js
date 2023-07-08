import React from 'react';
import { GlobeAltIcon, HeartIcon } from '@heroicons/react/outline';

const ProfileInfo = ({profileDetail}) => {
    return (
        <div className='w-full'>
            <div className="flex items-center py-2">
                <div className="w-8">
                    <GlobeAltIcon className='h-8 text-gray-400' />
                </div>
                <p className='ml-2 text-gray-500'>Email</p>
            </div>
            <div className="flex items-center py-2">
                <div className="w-8">
                    <GlobeAltIcon className='h-8 text-gray-400' />
                </div>
                <p className='ml-2 text-gray-500'>{profileDetail?.facebook}</p>
            </div>
            <div className="flex items-center py-2">
                <div className="w-8">
                    <GlobeAltIcon className='h-8 text-gray-400' />
                </div>
                <p className='ml-2 text-gray-500'>{profileDetail?.website?.slice(0,40)}</p>
            </div>
            <div className="flex items-center py-2">
                <div className="w-8">
                    <GlobeAltIcon className='h-8 text-gray-400' />
                </div>
                <p className='ml-2 text-gray-500'>{profileDetail?.twitter?.slice(0,40)}</p>
            </div>
            <div className="flex items-center py-2">
                <div className="w-8">
                    <GlobeAltIcon className='h-8 text-gray-400' />
                </div>
                <p className='ml-2 text-gray-500'>{profileDetail?.github?.slice(0,40)}</p>
            </div>
            <div className="flex items-center py-2">
                <div className="w-8">
                    <HeartIcon className='h-8 w-8 text-gray-400' />
                </div>
                <p className='ml-2 text-gray-500'>Single</p>
            </div>
        </div>
    );
}

export default ProfileInfo;
