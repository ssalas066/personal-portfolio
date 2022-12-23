import React from "react";

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        Bring your digital vision to life - one line of code at a time
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm <span className='text-yellow-500'>Serge</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>Fullstack Web Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I'm a fullstack web developer with experience in application layers, presentation layers, and databases.
                        I'm currently focused on building responsive and mobile-first front-end web applications, continuing to improve on back-end technologies.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;