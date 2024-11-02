import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/Cart.context';
import UserProvider, { userContext } from '../../Context/User.context';

export default function ProductCard({productInfo}) {

  const{images,title,price,category,ratingsAverage,id} = productInfo;
  let {addToProductCart}=useContext(cartContext)
  let {token} =useContext(userContext)
  
  return (
    <>
    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 shadow-lg rounded-md overflow-hidden '>
        <div className='relative'>
            <img src={images[0]} className='w-full'/>
             <div className='layer opacity-0 hover:opacity-100 transition-opacity duration-300 absolute w-full h-full left-0 top-0 bg-black bg-opacity-15 flex gap-2 justify-center items-center'>
                <div className='icon cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-6 w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center'>
                <i className="fa-solid fa-heart"></i>
                </div>

                <div  onClick={()=>{ addToProductCart({id})}}
                 className='icon cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-6 w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center'>
                
                <i className="fa-solid fa-cart-shopping" ></i>
                </div>

                <Link to={`/product/${id}/${category.name}`} className='icon cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-6 w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center'>
                <i className="fa-solid fa-eye"></i>
                </Link>
             



             </div>
        </div>
        <div className='p-3 '>
            <h3 className='text-primary'>{category.name}</h3>
            <h2 className='text-lg font-semibold line-clamp-2'>{title}</h2>
            <div className='flex justify-between items-center mt-4'>
                <span>{price} EGP</span>
                <div className='flex justify-center items-center gap-1'>
                <i className='fas fa-star text-yellow-400'></i>
                <span>{ratingsAverage}</span>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}
