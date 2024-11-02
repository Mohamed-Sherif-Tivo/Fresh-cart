import axios from 'axios'
import React, { useEffect, useState } from 'react'
import playstation from '../../assets/images/playstation.jpeg'

export default function Brands() {

  const [brands, setBrands] = useState([])
  async function getBrandsInfo(){
    try {
     const options = {
       url: "https://ecommerce.routemisr.com/api/v1/brands",
       method: "GET",
      
      }
       let {data} = await axios.request(options)
       console.log(data)
       setBrands(data.data)
       
   
    } 
    catch (error) {
     console.log(error);
     
     }
    }
     
    useEffect(() => {
      getBrandsInfo()
    }, [])
    console.log(brands)
  return (
    <>
    <section>
    <h2 className="font-bold text-lg capitalize pb-3">our Brands</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4  pb-48'>

{brands.map((brand)=><div  key={brand._id} className="group overflow-hidden shadow-lg px-2 py-1 bg-white border hover:shadow-2xl hover:border hover:border-green-500 rounded-md transition-all duration-300">
  <img src={brand.image} className="scale-[.9] group-hover:scale-100 transition-all duration-300 w-full block object-contain h-[150px]"/>
  <p className="text-colorHeading font-extrabold text-green-500 my-3 translate-x-[110%] group-hover:translate-x-0 transition-all duration-[.8s]">{brand.name}</p>
  </div>

)}
  



       




    

    </div>
    


    </section>
    </>
  )
}
