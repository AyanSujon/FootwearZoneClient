"use client";

import { AuthContext } from "@/Context/AuthContext";
import Link from "next/link";
import React, { useContext } from 'react'

export default function Navbar() {
    const { user, signOutUser, loading } = useContext(AuthContext);



    const links = <>

        <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
        <li><Link href="/shop" className="hover:text-primary transition">Shop</Link></li>
        <li><Link href="/men" className="hover:text-primary transition">Men</Link></li>
        <li><Link href="/women" className="hover:text-primary transition">Women</Link></li>
        <li><Link href="/kids" className="hover:text-primary transition">Kids</Link></li>

    </>

    return (
        <nav className="sticky top-0 z-50 shadow-sm bg-base-100">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-1">
                        <img className="w-12" src="https://i.ibb.co.com/gMv9LHn0/logo.png" alt="site logo" />
                        <Link href="/" className="text-3xl font-bold tracking-wide">Foot<span className="text-primary">Wear</span></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <Link href={"/login"} className="btn">Login</Link>
                </div> */}




                <div className="navbar-end">


                    {loading ? <span className="loading loading-ring loading-xl"></span> :
                        user ? (

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className=" m-1">
                                    <img className='w-10 mx-auto rounded-full overflow-hidden border border-primary' src={user?.photoURL || "https://i.ibb.co.com/tp3xgXbG/avater.jpg"} alt="Avater" />

                                </div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm space-y-3 text-center">
                                    <Link href={"/"} className="tooltip" data-tip="Click to Home">
                                        <img className='w-25 mx-auto rounded-full overflow-hidden border border-primary' src={user?.photoURL || "https://i.ibb.co.com/tp3xgXbG/avater.jpg"} alt="Avater" />
                                    </Link>
                                    <Link href="/addProduct" className={" text-center font-semebold hover:underline"}>Add Product</Link>
                                    <Link href="/productmanage" className=" hover:underline">
                                        Manage Products
                                    </Link>

                                    <h2 className='text-xl font-semebold'>{user?.displayName}</h2>
                                    <p className='text-black'>{user?.email}</p>
                                    <button onClick={signOutUser} className={"btn bg-primary text-white"}>Sign Out</button>
                                </ul>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="btn text-white bg-primary border-none"
                            >
                                Log in
                            </Link>

                        )
                    }
                </div>


















            </div>
        </nav>
    )
}
