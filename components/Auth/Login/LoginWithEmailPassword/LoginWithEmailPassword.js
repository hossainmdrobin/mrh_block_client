import Link from 'next/link';
import React, { useState } from 'react';
import handleBlur from '../../../../functions/handleBlur';
import { useRouter } from 'next/dist/client/router';
const LoginWithEmailPassword = () => {
    const [loginUser, setLoginUser] = useState({ email: '', password: '' })
    const [err, setErr] = useState({})
    const router = useRouter()
    const blur = (e) => {
        handleBlur(e, loginUser, setLoginUser)
    }

    const handleSubmit = (e) => {
        fetch("https://mrhblog.herokuapp.com/auth/login",
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
                    router.push('/')
                }
            })
            .catch(err => setErr({message:'Internal Server Error'}))
            // .then(err => setErr({message:'server Error'}))
        e.preventDefault()
    }
    return (
        <div className='flex justify-center w-full'>
            <form onSubmit={handleSubmit} className='w-full sm:w-1/2 p-2 bg-gray-800 lg:w-1/3 shadow-2xl rounded-xl my-8' action="">
                <h2 className="text-success text-xl text-center my-3">Create an Account</h2>
                <input onBlur={blur} type="email" name="email" id="email" placeholder='email' className='input w-full my-2' />
                <input onBlur={blur} type="password" name="password" id="password" placeholder='password' className='input w-full my-2' />
                <p className="text-center hover:underline p-3 cursor-pointer text-success">Forget Password</p>
                <div className="flex justify-center">
                    <input type="submit" value="Login" className="btn btn-ghost hover:shadow-xl normal-case bg-success my-2 text-white" />
                </div>
                <p className="mb-8 text-center text-gray-200">Don't have an account? <Link href="/auth/signup"><span className="text-success hover:underline">Sign Up</span></Link></p>

                {err && <p>{err.message}</p>}
            </form>
        </div>
    );
}

export default LoginWithEmailPassword;
