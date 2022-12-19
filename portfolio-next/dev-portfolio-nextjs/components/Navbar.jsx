import React from 'react';
import Image from "next/image";

const Navbar = () => {
    return (
        <div>
            <div className='fixed w-full h-20 shadow-xl z-[100]'>
                <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                    <Image src='/../public/assets/placeholder-banner.png' alt='/' width='125' height='50'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar