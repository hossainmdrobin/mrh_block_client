import React from 'react';
import NavbarItems from './NavbarItems/NavbarItems';
import {
    HomeIcon,
    ViewGridIcon,
    LoginIcon,
    ClipboardListIcon
} from '@heroicons/react/outline'

const Navbar = () => {
    return (
        <div className="px-12 navbar flex flex-col md:flex-row md:justify-between md:items-center bg-gray-300">
            <div className="py-2 flex justify-between w-full md:w-1/3 rounded bg-gray-800">
                <NavbarItems Icon={HomeIcon} title='Home' url='/'/>
                <NavbarItems className='text-white' Icon={ViewGridIcon} title='Dashboard' url='/dashboard'/>
                <NavbarItems Icon={ClipboardListIcon} title='Posts' url='/posts'/>
                <NavbarItems Icon={LoginIcon} title='Login' url='/auth/login'/>
            </div>
            <div className="py-2">
                <a className="btn btn-ghost normal-case text-gray-800 text-3xl"><i>MRH BLOG</i></a>
            </div>
            <div className="py-2 flex justify-between w-full md:w-1/3 rounded bg-gray-800">
                <form className="px-2 flex w-3/4" action="">
                    <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
                    <button type='submit' className="btn btn-ghost btn-circle bg-success ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </form>

                <button className="btn btn-ghost btn-circle bg-success mr-1">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
