import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/Cart.context';
import Loader from '../../Components/Loader/Loader';
import test from '../../assets/images/playstation.jpeg'
export default function Cart() {
const {cartInfo,removeProductFromCart,updateProductCartcount,clearCart}=useContext(cartContext)

// console.log(cartInfo);
//   useEffect(() => {
//     getCartInfo();
//   }, [])
  
  return (
    <>
    {cartInfo === null ? <Loader/>:<section className='bg-slate-100 p-5 max-h-fit'>
        <h2 className='text-2xl font-bold mb-2'>
            <span>Shop Cart</span>
            <i className="fa-solid fa-cart-shopping text-2xl ml-2 "></i>
        </h2>
        
       {cartInfo.length === 0 ? <div className='py-16 flex flex-col justify-center items-center'> 
            <h3 className='text-lg'>there are not items yet.</h3>
                <Link to='/' className='btn-primary text-sm'>ADD YOUR FIRST PRODUCT TO CART  </Link>
                
        </div>:
        (
      <>
       {
        cartInfo.data.products.map((product)=>
        <div key={product.product.id} className='product grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-5 p-5 bg-white'>
          <div className='col-span-1 border-2 border-green-500  shadow-lg rounded'>
            <img src={product.product.imageCover} className='w-full'/>
          </div>
          <div className='flex justify-between items-center col-span-11 gap-5'>
            <div>
            <h3 className='text-lg font-semibold'>{product.product.title} </h3>
            <h4 className='text-primary'>price: {product.price} EGP</h4>
            <button 
            onClick={()=>removeProductFromCart({id : product.product.id})}
            className='btn-primary bg-red-600 text-sm mt-3 p-4'><i className="fa-solid fa-trash-can mr-1"></i>Remove</button>
            </div>
            <div className='flex  items-center gap-4'>
              <button 
              onClick={()=>{updateProductCartcount({id : product.product.id,count :product.count - 1})}}
              className='btn-primary '><i className="fa-solid fa-minus"></i></button>
              <span className='text-lg font-bold'>{product.count}</span>
              <button
              onClick={()=>{updateProductCartcount({id : product.product.id,count :product.count + 1})}}
              className='btn-primary '><i className="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
      )

    }
      <button
        onClick={clearCart}
        className='btn-primary bg-red-500 block mt-4 ms-auto'>Clear Cart </button>
     
      </>

       ) }


       
   
        
    </section>}
    {cartInfo.length !== 0 ?
    <Link to="/Checkout" className='btn-primary mt-4 ms-auto block uppercase w-fit mb-6'>Next Step</Link>:""}

    
    </>
  )
}
