import React, { useContext, useEffect, useState } from 'react'
import play from '../../assets/images/playstation.jpeg'
import { userContext } from '../../Context/User.context'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import Loader from '../../Components/Loader/Loader'

export default function AllOrders() {
const {token}= useContext(userContext)
const {id} = jwtDecode(token)
console.log(id);
const [orders, setorders] = useState(null)


async function getUserOrders(){
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
        method : "GET",
       
      };
       let {data} =   await axios.request(options)
          setorders(data);
          console.log(data)
          

}

useEffect(() => {
    getUserOrders()
}, [])




  return (
    <>

    <section className='pb-96'>
    {!orders ?<Loader/>:
    orders.map((order)=>

        <div key={order.id} className='orders border-2 border-gray-400 rounded p-4 mb-2'>
        <div className='flex items-center justify-between'>
            <div>
                <h2 className=' text-gray-400'>Order Id</h2>
                <h3 className='font-bold'>#{order.id}</h3>
            </div>
            <div>
             {order.isDelivered?
             <span  className=' font-cairo btn-primary inline-block me-2 bg-lime-500'> تم التوصيل </span>
               :<span  className=' font-cairo btn-primary inline-block me-2 bg-blue-500'> قيد التوصيل </span>
            } 
            {order.ispaid?<span className=' font-cairo btn-primary inline-block me-2 bg-lime-500'> تم الدفع </span>
             :<span className=' font-cairo btn-primary inline-block me-2 bg-red-500'>غير مدفوع </span>

             } 
            </div>
        </div>
        <div className='grid grid-cols-12 mt-5 '>
        {order.cartItems.map((product)=>

<div key={order.cartItems._id} className='product border-2 border-gray-300 p-3 mx-2 rounded col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2'>
<img src={product.product.imageCover} className='w-full h-30 object-cover'/>
<h3 className='font-semibold my-2'>{product.product.title}</h3>
<h4>{product.price} L.E</h4>
</div>
        
        )}
        </div>
    </div>
    )
    }
    </section>
    </>
  )
}
