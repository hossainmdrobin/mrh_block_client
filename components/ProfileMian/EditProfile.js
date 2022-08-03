import React from 'react';
import ProfileInfo from './EditProfileContent/ProfileInfo';
import Image from 'next/image'
import coverpic from './../../Images/coverpic.jpg'
const EditProfile = ({ profileDetail }) => {
    const roundImg = {
        borderRadius: '50%'
    }
    return (
        <>
            <hr />
            <div>
                <div className='flex justify-between items-center m-2'>
                    <p className='font-bold'>Profile Picture</p>
                    <button className='btn btn-sm'>edit</button>
                </div>
                <div className='flex items-center justify-center mb-2'>
                    <span className='rounded-full'>
                        <Image src={coverpic} style={roundImg} height={150} width={150} />
                    </span>
                </div>
                <hr />
                <div className='flex justify-between items-center m-2'>
                    <p className='font-bold'>Bio</p>
                    <button className='btn btn-sm'>edit</button>
                </div>
                <div className='flex items-center justify-center text-gray-500 mb-4'>
                    I am Iron-Man
                </div>
                <hr />
                <div className='flex justify-between items-center m-2'>
                    <p className='font-bold'>Profile Info</p>
                    <button className='btn btn-sm'>edit</button>
                </div>
                <div className='flex items-center justify-center text-gray-500'>
                    <ProfileInfo profileDetail={profileDetail} />
                </div>
            </div>
        </>
    );
}

export default EditProfile;
