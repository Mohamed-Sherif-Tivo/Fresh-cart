import React from 'react'
import style from "./MainSlider.module.css"
import Slider from "react-slick";

import mainslider from "../../assets/images/slider-image-3.jpeg"
import mainslider1 from "../../assets/images/slider-image-2.jpeg"
import mainslider2 from "../../assets/images/slider-image-1.jpeg"
import slide1 from "../../assets/images/slider-image-1.jpeg"
import slide2 from "../../assets/images/slider-image-2.jpeg"


export default function MainSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false

  };

  return (
    <div className='row flex  justify-center items-center'>
    <div className='w-3/4'>

    <Slider {...settings}>
    <img src={mainslider} className='w-full h-[600px]'/>
    <img src={mainslider1} className='w-full h-[600px]'/>
    <img src={mainslider2} className='w-full h-[600px]'/>
   </Slider>
      
    </div>
    <div className='w-1/4'>
    <img src={slide1} className='w-full h-[300px]'/>
    <img src={slide2} className='w-full h-[300px]'/>
    </div>

    </div>
  )
}
