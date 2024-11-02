import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Loader from '../../Components/Loader/Loader';
import ImageGallery from "react-image-gallery";
import { cartContext } from '../../Context/Cart.context';

export default function ProductDetails() {
 let {id,category}= useParams();
 const [details, setDetails] = useState(null)
 const [RelatedProduct, setRelatedProduct] = useState([])
let {addToProductCart}= useContext(cartContext)

 async function getProductDetails(){

    let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setDetails(data.data)
    // console(data.data);
}
// useEffect(() => {
//     getProductDetails();
// },[])


function getRelatedproduct(category){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`).then((respose)=>{
      let allproducts = respose.data.data
     let related = allproducts.filter((product)=> product?.category?.name == category)
      setRelatedProduct(related)
                
    }).catch((error)=>{})
    }
  
  useEffect(() => {
    getProductDetails(id)
    getRelatedproduct(category)
  },[id , category])

const imageitems = details?.images.map((imageURL)=>{
    return {
        original: imageURL,
        thumbnail: imageURL,
      }

})
  return (
    <>

{details === null?<Loader/>:
    <div className='grid grid-cols-12 gap-6 '>
<div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3'>
<ImageGallery items={imageitems} 
showNav={false}
 showFullscreenButton={false}
 showPlayButton={false} />
  
</div>
<div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-9 xl:col-span-9'>
<h2 className='text-2xl font-bold  '>{details?.title}</h2>
<h3 className='text-lg font-semibold text-primary '>{details?.category?.name}</h3>
 <p className='text-gray-700 mt-3 '>{details?.description}</p>
 <div className='flex justify-between items-center mt-3'> 
          <span>{details?.price} EGP</span>
          <span>{details?.ratingsAverage} <i className='fas fa-star text-yellow-400'></i> </span>
         </div>
         <button   onClick={()=>{addToProductCart({id:details.id})}} className='btn-primary mt-4 w-full'>Add To Cart</button>
        
</div>
</div>}




  
 <div className='grid grid-cols-12 pb-48'>
      {RelatedProduct.map((product)=>
        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2' key={product.id}>
<div className='product p-4'>
         <Link to={`/product/${product?.id}/${product?.category.name}`}>
         <img className='w-full' src={product?.imageCover} alt={product?.title}/>
         <span className='text-lg font-semibold '>{product?.title.split(' ').slice(0,2).join(' ') }</span>
         <h3 className='text-lg font-semibold text-primary '>{product?.category?.name}</h3>
         
         <div className='flex justify-between items-center'> 
          <span>{product?.price} EGP</span>
          <span>{product?.ratingsAverage} <i className='fas fa-star text-yellow-400'></i> </span>
         </div>
         <button className='btn-primary mt-2'>Add To Cart</button>
         </Link>
          </div>
 </div>

      )}
      

    </div> 

 

   
   

    </>
    
  )
}
