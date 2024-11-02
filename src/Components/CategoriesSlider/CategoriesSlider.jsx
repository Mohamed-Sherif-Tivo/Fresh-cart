import React, { useEffect, useState } from 'react'
import style from "./CategoriesSlider.module.css"
import axios from 'axios'
import Slider from "react-slick";

export default function CategoriesSlider() {
  const [Categories, setCategories] = useState([])
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed:2000
  };


function getcategories(){

  axios.get(`https://ecommerce.routemisr.com/api/v1/categories`).then(({data})=>{
    setCategories(data.data)
   
  }).catch((error)=>{})
}

useEffect(() => {

  getcategories()
}, [])


  return (
    <>
   
   <div className='mx-20 my-2  '>
   <h1 className=' font-extrabold py-3'>Shop Populer categories</h1>
    <Slider {...settings}>
     
    {Categories.map((category)=><div key={category.name} className='  grid grid-cols-12 '>
      
<img className='category-img  w-full h-28' src={category?.image} alt={category?.name} />

</div>
    )}
    
   </Slider>

   <Slider {...settings}>
    {Categories.map((category)=><div key={category.name} className='row'>
<img className='category-img  w-full h-28' src={category?.image} alt={category?.name} />
<h3 className='text-center'>{category?.name}</h3>
</div>
    )}
    
   </Slider>
   </div>
   </>
  )
}
