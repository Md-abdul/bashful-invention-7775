// import React from 'react'
import React, { useState , useEffect } from 'react'
import ProductsPage from './ProductsPage'
const getdata = () =>{
  return fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
  .then((res) => res.json())
}
export default function Brands() {
  const [data,setdata] = useState([])
  const [loading,setloding] = useState(false)

  const fetchdata = async() => {
    try {
      setloding(true)
     let data = await getdata();
     setdata(data)
     setloding(false)
    } catch (error) {
     console.log(error)
    }
   }
 console.log(data)
   useEffect(() => {
     fetchdata()
   }, [])

   if(loading){
    return <div><h1 style={{fontSize:'40px'}}>Loading....</h1></div>
   }
 
  return (
    <div >
      {
        
        data.map((item) => (<ProductsPage key={item.id} {...item}/>))
      }
    </div>
  )
}
