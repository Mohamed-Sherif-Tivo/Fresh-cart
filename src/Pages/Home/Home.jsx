import React, { useEffect, useState } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import CategoriesSlider from '../../Components/CategoriesSlider/CategoriesSlider';
import MainSlider from '../../Components/MainSlider/MainSlider';

export default function Home() {

const [Products, setProducts] = useState(null);
 async function getproducts(){
   let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
   setProducts(data.data)
}

useEffect(() => {
 getproducts()
}, [])



  return (
    <>
    <div className=''>
<MainSlider/>


<CategoriesSlider/>

    </div>
    <h2 className="font-bold text-lg capitalize pt-3">our products</h2>
    <div className='grid grid-cols-12 gap-4  pb-48'>
    {Products ? Products.map((product)=>(
      <ProductCard productInfo ={product} key={product.id}/>)
    ):<Loader/>}

    </div>
    </>
  )
}
