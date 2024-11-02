import axios from "axios";
import { createContext, useContext, useState } from "react";
import  { userContext } from "./User.context";
import toast from "react-hot-toast";

 export const cartContext = createContext(null)

 export default function CartProvider({children}){

  const [cartInfo , setCartInfo] = useState([])
  const {token}= useContext(userContext)
 async function addToProductCart({id}){

try {
  const options = {
    url:"https://ecommerce.routemisr.com/api/v1/cart",
    method:"post",
   headers:{
    token:token
   },
    data:{
      productId: id
  }
}
    let {data} =  await axios.request(options)
    console.log(data)
    toast.success("Product add to Cart")
    setCartInfo(data)
} catch (error) {
  console.log(error)
}

  }

  async function removeProductFromCart({id}){

    try {
      const options = {
        url:`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method:"DELETE",
       headers:{
        token:token
       },
       
    }
        let {data} =  await axios.request(options)
        console.log(data)
        if(data.numOfCartItems === 0){
          setCartInfo([])
          
        }
        else{
          setCartInfo(data)
        }
        toast.success("Product Removed Successfully")
    } catch (error) {
      console.log(error)
    }
      
      }

  async function getCartInfo(){
 try {
  const options = {
    url: "https://ecommerce.routemisr.com/api/v1/cart",
    method: "GET",
    headers:{
      token:token
    } 
   }
    let {data} = await axios.request(options)
    // console.log(data)
    setCartInfo(data)
    if(data.numOfCartItems === 0){
      setCartInfo([])
      
    }
    else{
      setCartInfo(data)
    }


 } catch (error) {
  console.log(error);
  if(error.response.data.message.includes("No cart")){
    setCartInfo([])
  }
 }

  }

  async function updateProductCartcount({id,count}){

    try {
      const options = {
        url:`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method:"PUT",
       headers:{
        token:token
       },
        data:{
          count,
      }
    }
        let {data} =  await axios.request(options)
        console.log(data)
        
        setCartInfo(data)
    } catch (error) {
      console.log(error)
    }
    
      }

      async function clearCart(){

        try {
          const options = {
            url:"https://ecommerce.routemisr.com/api/v1/cart",
            method:"DELETE",
           headers:{
            token:token
           },
            
        }
            let {data} =  await axios.request(options)
            console.log(data)
            if(data.message === "success"){
              setCartInfo([])
            }
           
        } catch (error) {
          console.log(error)
        }
        
          }

    return ( <cartContext.Provider value={{addToProductCart,getCartInfo,cartInfo,removeProductFromCart,updateProductCartcount, clearCart,setCartInfo}}>
  {children}
    </cartContext.Provider> 
    )
 }