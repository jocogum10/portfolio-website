import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, InformationCircleIcon, CodeIcon, ChatIcon } from '@heroicons/react/solid'

export default function Navbar() {

    const location = useLocation();

    const menuItems = [
        {
            title: "Home",
            path: "/",
            icon: <HomeIcon className='h-8 w-8' />
        },
        {
            title: "About",
            path: "/about",
            icon: <InformationCircleIcon className='h-8 w-8' />
        },
        {
            title: "Projects",
            path: "/projects",
            icon: <CodeIcon className='h-8 w-8' />
        },
        {
            title: "Contact",
            path: "/contact",
            icon: <ChatIcon className='h-8 w-8' />
        },
    ]

    return (
        <div className='flex justify-between items-center px-10 py-3 bg-primary'>
            <div className='text-white text-semibold'>
                {"< Joco />"}
            </div>


            <div className='flex justify-center items-center'>
                {
                    menuItems.map((item) => (
                        <div className={`flex justify-center items-center text-white text-semibold ${location.pathname === item.path ? "underline" : "" } underline-offset-8 decoration-2`} key={item.title}>
                            {/* {item.icon} */}
                            <Link to={`${item.path}`} className="px-5">
                                {item.title}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
