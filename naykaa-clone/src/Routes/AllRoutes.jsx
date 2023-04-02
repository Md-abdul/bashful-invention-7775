
import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Brands from '../Pages/Brands'
import BeautyAdvice from '../Pages/BeautyAdvice'
import Categories from '../Pages/Categories'
import Luxe from '../Pages/Luxe'
import Naykafashion from '../Pages/Naykafashion'
import sinleProductPage from '../Pages/singleProductPage'
import Home from '../Pages/Home'
// import
export default function AllRoutes() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/Categories' element={<Categories/>}/>
     <Route path='/Brands' element={<Brands/>}/>
     <Route path='/Luxe' element={<Luxe/>}/>
     <Route path='/Naykafashion' element={<Naykafashion/>}/>
     <Route path='/BeautyAdvice' element={<BeautyAdvice/>}/>
     <Route path='/Brands/:id' element={<sinleProductPage/>}/>
     
   </Routes>
  )
  
}
