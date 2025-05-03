import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import  Sidebar from '../components/Sidebar'
import '../pages/CSS/Home.css'
import { GlobalUserContext } from '../General'

const Home = () => {

    const { sidebar } = GlobalUserContext()

    return (
        <div>
        <Navbar />

        <div className='outlet-place'>
            {sidebar && <Sidebar />}
            <Outlet />
        </div>

        <Footer />
    </div>
    )

}

    

   


export default Home