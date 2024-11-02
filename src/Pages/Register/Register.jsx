import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
export default function Register() {

const PhoneReg =/^01[0125][0-9]{8}$/
const navigate = useNavigate()
const [Errmsg, setErrmsg] = useState(null)



 const validationSchema = Yup.object({
name:Yup.string().required("Name is required").min(3,"Name must be at last 3 character").max(25,"Name must be at modt 25 character"),
email:Yup.string().required("Email is required").email("E-mail is not valid"), 
password:Yup.string().required("Password is required").matches(/^[A-Z][0-9a-zA-Z]{5,25}$/,"password must be start uppercase letter and at least 5 character "),
rePassword:Yup.string().required("re-Password is required").oneOf([Yup.ref("password")],"password and re-password should be the same "),
phone:Yup.string().required("Phone is required").matches(PhoneReg,"phone is not valid you must be egyption number "),

 })


 async function reg (values){
  let id;
  try {
    id = toast.loading("Loading.....");

    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
  console.log(values)
  console.log(data)
  
  toast.dismiss(id);
  toast.success("User Created Sucessfully");
  setTimeout(()=>{
    if (data.message === "success"){
      navigate("/Login")
    }
  },3000)
  } catch (error) {
    console.log(error)
    setErrmsg(error.response.data.message)
    toast.error(error.response.data.message)
    if (error.response.data.errors.msg !== null){
      toast.error(error.response.data.errors.msg )
    }
    toast.dismiss(id);
  }



}

  let formik = useFormik({
initialValues:{
  name:'',
  email:'',
  password:'',
  rePassword:'',
  phone:''
},
onSubmit: reg,
validationSchema:validationSchema


  })


  return (
    <>
    <div className="max-w-2xl mx-auto">
      <h1 className='text-3xl text-green-600 font-bold mb-4'>Register Now</h1>
    <form  onSubmit={formik.handleSubmit}>

    <div className="relative z-0 w-full mb-3 group">
      <input autoComplete='on'onBlur={formik.handleBlur} type="text" name="name" value={formik.values.name} onChange={formik.handleChange} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>



  {formik.errors.name && formik.touched.name ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.name}
      </div>:""}

  <div className="relative z-0 w-full mb-3 group">
      <input autoComplete='on'onBlur={formik.handleBlur} type="email" name="email" value={formik.values.email} onChange={formik.handleChange}  id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>


  {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.email}
      </div>:""}

      {/* {Errmsg ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {Errmsg}
      </div>:""} */}

  <div className="relative z-0 w-full mb-3 group">
      <input autoComplete='on'onBlur={formik.handleBlur} type="password" name="password" value={formik.values.password} onChange={formik.handleChange}  id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>


  {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.password}
      </div>:""}


  <div className="relative z-0 w-full mb-3 group">
      <input autoComplete='on'onBlur={formik.handleBlur} type="password" name="rePassword" value={formik.values.rePassword} onChange={formik.handleChange}  id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>


  {formik.errors.rePassword && formik.touched.rePassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.rePassword}
      </div>:""}


  <div className="relative z-0 w-full mb-3 group">
      <input autoComplete='on' onBlur={formik.handleBlur} type="phone" name="phone" value={formik.values.phone} onChange={formik.handleChange}  id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
  </div>



  {formik.errors.phone && formik.touched.phone ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.phone}
      
      </div>:""}

  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
  
  </form>
  </div>
    </>
  )
}
