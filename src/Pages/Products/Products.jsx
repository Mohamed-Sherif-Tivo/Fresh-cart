import axios from 'axios'
import React from 'react'
import Loader from '../../Components/Loader/Loader'
import ProductCard from '../../Components/ProductCard/ProductCard'
import {  useQuery } from '@tanstack/react-query'

export default function Products() {



  async function getproducts(){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
   
 }


 const {data,isLoading,isError} = useQuery({
  queryKey:["products"],
  queryFn:getproducts,


 })
 
 if(isLoading)  return  <Loader/>
  return (
    <>

<div className=''>
    </div>
    <h2 className="font-bold text-lg capitalize pt-3">our products</h2>
    <div className='grid grid-cols-12 gap-4  pb-48'>
    {data.data.data.map((product)=>(
      <ProductCard productInfo ={product} key={product.id}/>)
    )}

    </div>
    </>
  )
}
