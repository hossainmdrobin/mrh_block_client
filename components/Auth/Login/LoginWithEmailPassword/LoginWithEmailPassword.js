import Link from 'next/link';
import React, { useState } from 'react';
import handleBlur from '../../../../functions/handleBlur';
const LoginWithEmailPassword = () => {
    const [loginUser, setLoginUser] = useState({ email: '', password: '' })
    const blur = (e) => {
        handleBlur(e, loginUser, setLoginUser)
    }

    const handleSubmit = (e) => {
        fetch("http://localhost:5000/auth/login",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(loginUser),
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    localStorage.setItem('token',data.accessToken)
                    localStorage.setItem('login','true')
                }
            })
            .catch(err => console.log(err))
        e.preventDefault()
    }
    return (
        <div class='flex justify-center w-full'>
            <form onSubmit={handleSubmit} class='w-full sm:w-1/2 p-2 bg-gray-800 lg:w-1/3 shadow-2xl rounded-xl my-8' action="">
                <h2 class="text-success text-xl text-center my-3">Create an Account</h2>
                <input onBlur={blur} type="email" name="email" id="email" placeholder='email' class='input w-full my-2' />
                <input onBlur={blur} type="password" name="password" id="password" placeholder='password' class='input w-full my-2' />
                <p class="text-center hover:underline p-3 cursor-pointer text-success">Forget Password</p>
                <div class="flex justify-center">
                    <input type="submit" value='Login' class="btn btn-ghost hover:shadow-xl normal-case bg-success my-2 text-white" />
                </div>
                <p class='mb-8 text-center text-gray-200'>Don't have an account? <Link href='/auth/signup'><a class='text-success hover:underline'>Login</a></Link></p>
            </form>
        </div>
    );
}

export default LoginWithEmailPassword;
