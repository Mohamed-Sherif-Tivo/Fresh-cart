import React, { useContext } from 'react'
import style from "./ProtectedRoute.module.css"
import { Navigate } from 'react-router-dom'
import { userContext } from '../../Context/User.context'

export default function ProtectedRoute(props) {
  const {token}=useContext(userContext)
// if(localStorage.getItem ("userToken") !== null){
//  return props.children
// }
// else{
//   return <Navigate to={'/Login'}/>
// }

if(token){
return props.children
}else
{
  return <Navigate to="/login"/>
}


  // return (
  //   <div className=''>ProtectedRoute</div>
  // )
}
