
import React from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from './Navbar'

export default function Layout({ children }) {

    return (
        <div className='min-h-screen'>
            {/* navbar */}
            <Navbar />
            {/* content */}
            <div className='px-10'>
                {children}
            </div>

        </div>
    )
}
