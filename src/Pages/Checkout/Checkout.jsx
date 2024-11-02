// import { data } from 'autoprefixer'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { userContext } from '../../Context/User.context'
import { cartContext } from '../../Context/Cart.context'
import axios, { Axios } from 'axios'
import {  useNavigate } from 'react-router-dom'

export default function Checkout() {
    let {cartInfo,setCartInfo} = useContext(cartContext)
    let  {token}   = useContext(userContext)
    const [orderType, setorderType] = useState(null)
    const navigate = useNavigate()


    async function createCashOrder(values){
        const options = {
            url:`https://ecommerce.routemisr.com/api/v1/orders/${cartInfo.data._id}`,
            method : "POST",
            headers:{
                token:token
            },
            data:{  
             values   
            }
          };
           let {data} =   await axios.request(options)
              console.log(data);
              console.log("######cash order###")
              setCartInfo([])
              setTimeout(()=>{ navigate("/Allorders")},2000)
              
    
    }

    async function createOnlineOrder(values){
        const options = {
            url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo.data._id}?url=http://localhost:5173`,
            method : "POST",
            headers:{
                token:token
            },
            data:{  
             values   
            }
          };
           let {data} =   await axios.request(options)
           setCartInfo([])

              console.log(data);
              console.log("######online order###")

              if(data.status === "success"){
                window.location.href = data.session.url
              }
             
    }

   


    const formik = useFormik({
        initialValues:{
            shippingAddress:{
                details: "",
                phone: "",
                city: ""
                },
            },
               
     onSubmit: (values)=>{
        if(orderType === "onlineorder" )createOnlineOrder(values)
          
         else createCashOrder(values)
        
        }
     
       
    })

  return (
   <>
   <form onSubmit={formik.handleSubmit}>
    <h2 className='text-2xl font-bold m-auto mb-6 w-3/4' >Shipping Address</h2>
   <div className="relative z-0 w-3/4 mb-6 group  m-auto ">
      <input 
      autoComplete='on'
      type="text"
       name="shippingAddress.city" 
      id="name"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
      placeholder=" "
      value={formik.values.shippingAddress.city}
      onChange={formik.handleChange}

      />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> City</label>
  </div>

  <div className="relative z-0 w-3/4 mb-6 group m-auto ">
      <input
       autoComplete='on'
       type="phone" 
       name="shippingAddress.phone"
       id="phone"
       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
        placeholder=" "
        required 
        value={formik.values.shippingAddress.phone}
        onChange={formik.handleChange}

        />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
  </div>


  <div className="relative z-0 w-3/4 mb-6 group m-auto ">
 <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea
   id="message"
   rows="4"
   name="shippingAddress.details"
   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
   placeholder="Write your thoughts here..."
   value={formik.values.shippingAddress.details}
   onChange={formik.handleChange}

   ></textarea>
  </div>



 <div className="relative z-0 w-3/4 mb-6 group m-auto ">
  <button
  onClick={()=>{
    setorderType("cashorder")
  }}
   type="Submit" 
    className='btn-primary bg-blue-500 mr-5'>Cash Order</button>
  <button
  
  onClick={()=>{
    setorderType("onlineorder")
  }}
   type="Submit"
    className='btn-primary '>Online Order</button>
  </div>
  </form>
   </>
  )
}
