import Link from 'next/link';
import React, { useState } from 'react';
import handleBlur from '../../../../functions/handleBlur';
import {useRouter} from 'next/router'

const SignupWithEmailPassword = () => {
    const router = useRouter()
    const [user, setUser] = useState({})
    const [error, setError] = useState({
        username: '',
        email: '',
        password: ''
    })

    const blur = (e) => {
        handleBlur(e, user, setUser)
    }

    const handleSubmit = (e) => {
        fetch("http://localhost:5000/auth/signup",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if(data._id){
                    console.log(data)
                    router.push(`/create_profile/${data._id}`)
                }
            })
            .catch( (res) => res.json())
            .then(err => setError({...error, err}))
        e.preventDefault()
    }

    return (
        <div class='flex justify-center w-full'>
            <form onSubmit={handleSubmit} class='w-full sm:w-1/2 p-2 bg-gray-800 lg:w-1/3 shadow-2xl rounded-xl my-8' action="">
                <h2 class="text-success text-xl text-center my-3">Create an Account</h2>
                <input onBlur={blur} type="text" name="username" id="username" placeholder='username' class='input w-full my-2' />
                {/* {error.username && <small class='text-white'>username</small>} */}
                <input onBlur={blur} type="email" name="email" id="email" placeholder='email' class='input w-full my-2' />
                <input onBlur={blur} type="password" name="password" id="password" placeholder='password' class='input w-full my-2' />
                <input onBlur={blur} type="password" name="confirmPassword" id="confirmPassword" placeholder='confirm password' class='input w-full my-2' />
                <div class="flex justify-center">
                    <input type="submit" value='Signup' class="btn btn-ghost hover:shadow-xl normal-case bg-success my-2 text-white" />
                </div>
                <p class='mb-8 text-center text-gray-200'>Already have an account? <Link href='/auth/login'><a class='text-success hover:underline'>Login</a></Link></p>
            </form>
        </div>
    );
}

export default SignupWithEmailPassword;
