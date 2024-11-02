import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Categories() {

  const [Categories, setCategories] = useState([])
  async function getCategoriesInfo(){
    try {
     const options = {
       url: "https://ecommerce.routemisr.com/api/v1/categories",
       method: "GET",
      
      }
       let {data} = await axios.request(options)
       console.log(data)
       setCategories(data.data)
       
   
    } 
    catch (error) {
     console.log(error);
     
     }
    }
     
    useEffect(() => {
      getCategoriesInfo()
    }, [])
    console.log(Categories)

  return (
    <>
    <section>
    <h2 className="font-bold text-lg capitalize pb-3">our Categories</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4  pb-48'>

{Categories.map((Categorg)=><div  key={Categorg._id} className="group overflow-hidden shadow-lg px-2 py-1 bg-white border hover:shadow-2xl hover:border hover:border-green-500 rounded-md transition-all duration-300">
  <img src={Categorg.image} className="scale-[.9] group-hover:scale-100 transition-all duration-300 w-full block object-contain h-[250px]"/>
  <p className="text-colorHeading font-extrabold text-green-500 my-3 translate-x-[110%] group-hover:translate-x-0 transition-all duration-[.8s]">{Categorg.name}</p>
  </div>

)}
  



       




    

    </div>
    


    </section>
    </>
  )
}
