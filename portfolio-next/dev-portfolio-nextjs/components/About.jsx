import React from 'react';

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div></div>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-black'>
                        About
                    </p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-yellow-500'>Hi there!</p>
                    <p className='py-2 text-yellow-500'>
                        I'm a junior web developer with a passion for creating engaging, user-friendly websites and applications. I have experience in HTML, CSS, and JavaScript and have recently started working with React.js. I'm constantly looking for ways to improve my coding skills.
                    </p>
                    <p className='py-2 text-yellow-500'>
                        I'm also a big fan of open source projects and have contributed to several over the past year. I'm always excited to learn something new and enjoy collaborating with other developers to create something great.
                    </p>
                    <p className='py-2 text-yellow-500'>
                        Outside of coding, I'm an active gamer, clan admin, an avid rock climber, and love creating new relationships with ambitious and like minded developers in my community. I'm always looking for ways to challenge myself and grow both professionally and personally.
                    </p>
                    <p className='py-2 text-yellow-500 underline cursor-pointer'>Check out some of my latest projects.</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default About