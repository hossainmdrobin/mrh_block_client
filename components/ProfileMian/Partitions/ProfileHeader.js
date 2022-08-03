import React from 'react';
import Image from 'next/image'
import coverpic from '../../../Images/coverpic.jpg'
import { PencilIcon } from '@heroicons/react/solid'
import ProfileNavigation from '../profileNavigation';
import EditProfile from '../EditProfile';
import { XIcon } from '@heroicons/react/outline';

const ProfileHeader = ({ profileDetail }) => {
    const divStyle = {
        color: 'blue',
        borderRadius: '50%'
    };
    return (
        <div className="w-full flex flex-col items-center justify-center mt">
            <div style={{ maxWidth: '950px' }} >
                <div>
                    <Image src={coverpic} height={1800} className='rounded-xl' />
                </div>
                <div className='md:flex justify-between items-center  relative -top-12'>
                    <div className='md:flex items-center'>
                        <div style={{ height: '205px', width: '205px' }} className='rounded-full bg-gray-400 flex items-center justify-center'>
                            <Image
                                style={divStyle}
                                loade={() => `http://localhost:5000/${profileDetail.profilePic}`}
                                src={profileDetail.profilePic ? `http://localhost:5000/${profileDetail.profilePic}` : coverpic} 
                                height={200} 
                                width={200}
                            />
                        </div>
                        <div className='ml-3'>
                            <p className='text-3xl font-bold'>{profileDetail.name}</p>
                            <p className='font-bold text-gray-400'>1222 friends</p>
                        </div>
                    </div>
                    <label htmlFor="my-modal" className="btn modal-button">
                        <PencilIcon className='h-6 mr-1' />
                        <p>edit profile</p>
                    </label>

                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <div className='flex justify-between items-center'>
                                <p className='text-center font-bold text-xl mb-2'>Edit Profile</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="absolute top-4 cursor-pointer flex items-center justify-center p-1 rounded-full bg-gray-300">
                                        <XIcon className='h-6' />
                                    </label>
                                </div>
                            </div>
                            <EditProfile profileDetail={profileDetail} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ maxWidth: '950px' }} className='w-full relative h-0'>
                <ProfileNavigation />
            </div>
        </div>
    );
}

export default ProfileHeader;
