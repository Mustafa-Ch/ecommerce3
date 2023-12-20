import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/home/Home';
// import Products from './pages/produccts/Products';
// import Product from './pages/producrt/Product';
import Navbar from '../src/components/navbar/Navbar'
import Footer from '../src/components/footer/Footer'
import Home from './pages/home/Home';
import Products from './pages/produccts/Products';
import Product from './pages/producrt/Product';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contacts/Contact';
const Layout=()=>{
  return(
    <div className='app'>
       <Navbar/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
path:"/",
element:<Home/>
    },
    {
      path:"/men",
      element:<Products category="men" banner={"https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
    },
    {
      path:"/women",
      element:<Products category="women" banner={"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
    },
    {
      path:"/kid",
      element:<Products category="kid" banner={"https://images.unsplash.com/photo-1606811384460-968dfb95108d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGtpZHMlMjBmYWlzaGlvbiUyMGdhcm1lbnRzfGVufDB8fDB8fHww"}
      />
    },
    {
      path:"/product/:id",
      element:<Product/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ]
  }
])

function App() {
  return (
    <div>
     <RouterProvider router={router}/> 
    </div>
  )
}

export default App
