import React, { useState } from 'react';
import { UserIcon, CameraIcon } from '@heroicons/react/outline'
import handleBlur from '../../functions/handleBlur';
import { useRouter } from 'next/router';

const CreateProfile = () => {
    const [profilePic, setProfilePic] = useState({})
    const [image, setImage] = useState()
    const [profile, setProfile] = useState({})
    const router = useRouter()
    const { user_id } = router.query

    const blur = (e) => {
        handleBlur(e, profile, setProfile);
    }

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]))
            setProfilePic(e.target.files[0])
            console.log(e.target.files[0])
        }
    }

    const handleSubmit = (e) => {
        const profileInfo = new FormData()
        profileInfo.append('profilePic', profilePic)
        profileInfo.append('user', user_id)
        Object.keys(profile).map(p => {
            profileInfo.append(p, profile[p])
        })
        fetch("http://localhost:5000/profile",
            {
                body: profileInfo,
                method: "POST"
            })
            .then((res) => res.json())
            .then(data => {
                if (data) {
                    console.log(data)
                    router.push('/')
                }
            })
            .catch(error => console.log(error))
        e.preventDefault()
    }

    return (
        <div className='bg-gray-200'>
            <p className="text-center text-2xl text-success py-4">Please Create Your Profile</p>
            <div className='flex justify-center items-center relative'>
                <div htmlFor='profilePic' className='overflow-hidden h-44 w-44 rounded-full bg-success flex justify-center cursor-pointer items-center'>
                    {!image && <UserIcon className='h-24 text-gray-400' />}
                    {image && <img src={image} className='w-full h-full' alt="" />}
                </div>
                <label htmlFor="profilePic" className='relative top-8 right-6 bg-gray-400 rounded-full p-1 cursor-pointer'>
                    <CameraIcon className='h-5 text-white' />
                </label>
            </div>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit} className='p-2 w-full md:w-1/2 flex flex-col items-center'>
                    <input onChange={handleChange} type="file" name="profilePic" id="profilePic" className='hidden' />
                    <input onBlur={blur} type="text" placeholder='Full name' name='name' className='input input-success my-4 w-full' />
                    <input onBlur={blur} type="text" placeholder='title' name='title' className='input input-success my-4 w-full' />
                    <textarea onBlur={blur} className="textarea textarea-success h-32 w-full" placeholder="Bio" name='bio'></textarea>
                    <input onBlur={blur} type="text" placeholder='Your website  url' name='website' className='input input-success my-4 w-full' />
                    <input onBlur={blur} type="text" placeholder='Your facebook profile url' name='facebook' className='input input-success my-4 w-full' />
                    <input onBlur={blur} type="text" placeholder='Your twitter profile url' name='twitter' className='input input-success my-4 w-full' />
                    <input onBlur={blur} type="text" placeholder='Your github profile url' name='github' className='input input-success my-4 w-full' />
                    <div className='flex justify-center my-4 w-full'>
                        <input type="submit" value="Save" className='btn btn-success w-full text-white' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProfile;
