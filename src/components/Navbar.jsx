"use client";

import Link from "next/link";
import React from 'react'

export default function Navbar() {

    const links = <>

        <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
        <li><Link href="/shop" className="hover:text-primary transition">Shop</Link></li>
        <li><Link href="/men" className="hover:text-primary transition">Men</Link></li>
        <li><Link href="/women" className="hover:text-primary transition">Women</Link></li>
        <li><Link href="/kids" className="hover:text-primary transition">Kids</Link></li>
        <li><Link href="/productmanage" className="hover:text-primary transition">Manage Products</Link></li>
        <li><Link href="/addProduct" className="hover:text-primary transition">Add Products</Link></li>

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
                    <Link href="/" className="text-3xl font-bold tracking-wide">Footwear<span className="text-primary">Zone</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href={"/login"} className="btn">Login</Link>
                </div>
            </div>
        </nav>
    )
}
