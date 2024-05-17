"use client"
import React from 'react';
import { signOut, useSession } from 'next-auth/react'


function Navbar({ onSearch }) {
    const {data: session} = useSession()

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost text-xl">BlogRepo</a>
            </div>
            {!session ? (
                    //if the user is not logged in
                <>
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <a href="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-current="page"> Login</a>
                        </div>
                        <div className="form-control">
                            <a href="/register" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-current="page"> Register</a>
                        </div>
                    </div>
                
                    
                
                </>
                ) : (
                    //if the user is successfully logged in
                    <>
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="input input-bordered w-24 md:w-auto"
                                    onChange={(e) => onSearch(e.target.value)}
                                />
                            </div>
                            <div className="form-control">
                                <a href="/addBlog" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-current="page"> Add blog</a>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-cyan-700 rounded-box w-52">
                                    <li><a onClick={() => {signOut();}} >Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            
        </div>
    );
}

export default Navbar;
