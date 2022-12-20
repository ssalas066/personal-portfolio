import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {AiOutlineMenu} from "react-icons/all";
// import {AiOutlineMenu} from "react-icons/all";

const Navbar = () => {
    return (
        <div>
            <div className='fixed w-full h-20 shadow-xl z-[100]'>
                <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                    <Image src='/../public/assets/placeholder-banner.png' alt='/' width='125' height='50'/>
                    <div>
                        <ul className='hidden md:flex'>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                            </Link>
                        </ul>
                        <div>
                            <AiOutlineMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar