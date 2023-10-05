import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import './Home.css'

export default function Home() {
    return (
        <div className='home-container' id='home'>
            <Navbar/>
            <Profile/>
            <Footer/>
        </div>
    )
}