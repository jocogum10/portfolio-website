
import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'

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
            {/* footer */}
            {/* <Footer /> */}
        </div>
    )
}
