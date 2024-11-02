import React, { useContext, useEffect } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { userContext } from '../../Context/User.context';
import { cartContext } from '../../Context/Cart.context';

export default function Navbar() {

    const {token ,logOut}= useContext(userContext);
    const {cartInfo,getCartInfo}= useContext(cartContext)

    useEffect(() => {
        getCartInfo()
    }, [])
    
  return (
    <>


<nav className="bg-slate-300   dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600  ">

    <div className='bg-primary  py-3  flex-row  md:flex  items-center justify-around font-semibold text-xl'>
        <h1>1418 Riverwood Drive, Egypt, Cairo</h1>
        <p><span className='text-white'>Welcome to Fastkart!</span> Wrap new offers/gift every single day on Weekends. New Coupon Code: Fast024</p>
    <ul className='flex gap-4 items-center '>
        <li> 
            <a href='https://www.facebook.com'>
            <i className='fa-brands fa-facebook'></i>
            </a>
        </li>

        <li> 
            <a href='https://www.twitter.com'>
            <i className='fa-brands fa-twitter'></i>
            </a>
        </li>

        <li> 
            <a href='https://www.tiktok.com'>
            <i className='fa-brands fa-tiktok'></i>
            </a>
        </li>

        <li> 
            <a href='https://www.Instagram.com'>
            <i className='fa-brands fa-instagram'></i>
            </a>
        </li>

        <li> 
            <a href='https://www.youtube.com'>
            <i className='fa-brands fa-youtube'></i>
            </a>
        </li>
    </ul>
    </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-xl">
          <NavLink to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Logo" />

          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <ul className='flex gap-4 items-center mr-7 '>

            <li>
        
        <Link to='/' className='  relative '>
<i className=" fa-regular fa-heart text-2xl "></i>
<span className='bg-primary w-5 h-5 text-sm font-bold text-white 
rounded-full flex items-center justify-center absolute top-0 right-0 translate-x-3/4 -translate-y-3/4'>1</span>


         </Link>
        </li>

            <li>
            <Link to='/Cart' className='  relative '>
<i className="fa-solid fa-cart-shopping text-2xl "></i>
<span className='bg-primary w-5 h-5 text-sm font-bold text-white 
rounded-full flex items-center justify-center absolute top-0 right-0 translate-x-3/4 -translate-y-3/4'>{cartInfo === null ? <i className='fa-solid fa-spinner fa-spain'></i> : cartInfo.numOfCartItems || 0 }
</span>

         </Link>
            </li>
            </ul>

                      
          <ul className='flex gap-5 items-center ps-4'>
{!token?<>
    <li>
    <NavLink className={({isActive})=>{
        return `relative  before:h-[2px] hover:before:w-full hover:font-bold hover:transition-[width] hover:duration-300  before:absolute before:bg-primary before:left-0 before:bottom-0 ${isActive? "font-bold before:w-full":"before:w-0"}`
    }} to='/Login'>Login</NavLink>
</li>
<li>
    <NavLink className={({isActive})=>{
        return `relative  before:h-[2px] hover:before:w-full hover:font-bold hover:transition-[width] hover:duration-300  before:absolute before:bg-primary before:left-0 before:bottom-0 ${isActive? "font-bold before:w-full":"before:w-0"}`
    }} to='/signup'>Sign up</NavLink>
</li>


</>:<li className='cursor-pointer' onClick={logOut}>
    <span>
    <i className="fa-solid fa-right-from-bracket text-2xl"></i>
    </span>
</li>}





          </ul> 

           


          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          {token?<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-50 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li> 
            <NavLink className={({isActive})=>{
                return `relative  before:h-[2px] hover:before:w-full hover:font-bold hover:transition-[Width] hover:duration-300  before:absolute before:bg-primary before:left-0 before:bottom-0 ${isActive? "font-bold before:w-full":"before:w-0"}`
            }} to="/Home">Home</NavLink> 
        </li>
        <li>
        <NavLink className={({isActive})=>{
                return `relative  before:h-[2px] hover:before:w-full hover:font-bold hover:transition-[width] hover:duration-300  before:absolute before:bg-primary before:left-0 before:bottom-0 ${isActive? "font-bold before:w-full":"before:w-0"}`
            }}  to="Products">Products</NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=>{
                return `relative  before:h-[2px] hover:before:w-full hover:font-bold hover:transition-[width] hover:duration-300  before:absolute before:bg-primary before:left-0 before:bottom-0 ${isActive? "font-bold before:w-full":"before:w-0"}`
            }} to="Categories">Categories</NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=>{
                return `relative  before:h-[2px] hover:before:w-full hover:font-bold hover:transition-[width] hover:duration-300  before:absolute before:bg-primary before:left-0 before:bottom-0 ${isActive? "font-bold before:w-full":"before:w-0"}`
            }} to="Brands">Brands</NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=>{
                return `relative  before:h-[2px] hover:before:w-full hover:font-bold hover:transition-[width] hover:duration-300  before:absolute before:bg-primary before:left-0 before:bottom-0 ${isActive? "font-bold before:w-full":"before:w-0"}`
            }} to="Allorders">Orders</NavLink>
        </li>
          </ul>
          </div>:<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-50 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li> 
            <NavLink className={({isActive})=>{
                return `relative  before:h-[2px] hover:before:w-full hover:font-bold hover:transition-[Width] hover:duration-300  before:absolute before:bg-primary before:left-0 before:bottom-0 ${isActive? "font-bold before:w-full":"before:w-0"}`
            }} to="/Home">Home</NavLink> 
        </li>
        <li>
        <NavLink className={({isActive})=>{
                return `relative  before:h-[2px] hover:before:w-full hover:font-bold hover:transition-[width] hover:duration-300  before:absolute before:bg-primary before:left-0 before:bottom-0 ${isActive? "font-bold before:w-full":"before:w-0"}`
            }}  to="Products">Products</NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=>{
                return `relative  before:h-[2px] hover:before:w-full hover:font-bold hover:transition-[width] hover:duration-300  before:absolute before:bg-primary before:left-0 before:bottom-0 ${isActive? "font-bold before:w-full":"before:w-0"}`
            }} to="Categories">Categories</NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=>{
                return `relative  before:h-[2px] hover:before:w-full hover:font-bold hover:transition-[width] hover:duration-300  before:absolute before:bg-primary before:left-0 before:bottom-0 ${isActive? "font-bold before:w-full":"before:w-0"}`
            }} to="Brands">Brands</NavLink>
        </li>
       
          </ul>
          </div>}

{/* ===================================================== */}


{/* =========================================================== */}

        </div>
      </nav>









   
    </>
  )
}
