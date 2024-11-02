import React from 'react'
import amazon from '../../assets/images/amazon-pay.png'
import amrican from '../../assets/images/American-Express-Color.png'
import mastercard from '../../assets/images/mastercard.webp'
import paypal from '../../assets/images/paypal.png'
import appstore from '../../assets/images/get-apple-store.png'
import gooleplay from '../../assets/images/get-google-play.png'

export default function Footer() {
  return (
    <>





    <footer className='bg-slate-300  sticky left-0 right-0 bottom-0 '>
        <div className='container '>
         <h2 className='text-2xl font-semiboldbold'>Get The Fresh Cart App</h2>
         <p>We will send you alink, open it on your phone to download the app</p>
         <div className='flex items-center'>
         <input type='text' className='form-control flex-grow' placeholder='Email....'/>
         <button className='btn-primary'>Share app link</button>
         </div>
         <div className='flex items-center justify-between mt-4'>
            <div className='flex gap-4 font-semibold items-center '>
                <span>payment partners</span>
                <div className='flex-row md:flex gap-3 items-center'>
                <img src={amazon} alt='amazon'className='w-16'/>
                <img src={amrican} alt='amrican'className='w-16'/>
                <img src={mastercard} alt='mastercard'className='w-16'/>
                <img src={paypal} alt='paypal'className='w-16'/>
                </div>
            </div>
            <div className='flex gap-4 font-semibold items-center '>
                <span>Get deliveries with Fresh Cart</span>
                <div className='flex gap-3 items-center'>
                <img src={appstore} alt='appstore'className='w-16'/>
                <img src={gooleplay} alt='gooleplay'className='w-16'/>
                
                </div>
            </div>
         </div>


        </div>
    </footer>
    </>
  )
}
