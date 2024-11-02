import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Offline, Online } from 'react-detect-offline'
import offlineimg from '../../assets/images/undraw_going_offline_ihag.svg'

export default function Layout() {
  return (
    <>
    <Navbar/>
   <Online>
   <div className='container mt-44'>
   <Outlet/>
  </div>
  </Online>  
  <Offline>
    <img src={offlineimg} className='w-1/2' alt=''/>
  </Offline>
   <Footer/>
    </>
  )
}
