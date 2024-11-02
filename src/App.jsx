import { useContext, useState } from 'react'
import { useQuery,useMutation,useQueryClient,QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import Layout from './Components/Layout/Layout'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Notfound from './Pages/NotFound/Notfound'
import Products from './Pages/Products/Products'
import Brands from './Pages/Brands/Brands'
import Categories from './Pages/Categories/Categories'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import UserProvider from './Context/User.context'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Pages/Cart/Cart'
import CartProvider from './Context/Cart.context'
import Checkout from './Pages/Checkout/Checkout'
import AllOrders from './Pages/AllOrders/AllOrders'





const queryClient = new QueryClient()
function App() {
  // const [count, setCount] = useState(0)
const routes =  createBrowserRouter([{path:"/",element:<Layout/>,children:[
{index:true,element:<Home/>},
{path:"/Home",element:<Home/>},
{path:"/product/:id/:category",element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
{path:"/Brands",element:<Brands/>},
{path:"/products",element:<Products/>},
{path:"/Categories",element:<Categories/>},
{path:"/Cart",element:<ProtectedRoute><Cart/></ProtectedRoute>},
{path:"/Checkout",element:<ProtectedRoute><Checkout/></ProtectedRoute>},
{path:"/Allorders",element:<ProtectedRoute><AllOrders/></ProtectedRoute>},
{path:"/login",element:<Login/>},
{path:"/signup",element:<Register/>},
{path:"*",element:<Notfound/>},

] }])
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <UserProvider>
    <CartProvider>
    <RouterProvider router={routes}></RouterProvider>
    <ReactQueryDevtools/>
    <Toaster /> 
    </CartProvider> 
    </UserProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
