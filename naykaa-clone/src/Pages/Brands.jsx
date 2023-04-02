// import React from 'react'
import React, { useState, useEffect } from "react";
import ProductsPage from "./ProductsPage";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { Grid, GridItem } from '@chakra-ui/react'
//http://makeup-api.herokuapp.com/api/v1/products.json

//http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline  =maybelline
export default function Brands() {
  const [data, setdata] = useState([]);
  const [loading, setloding] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setpage] = useState(1);
  const [orderby, setOrderby] = useState('')
  const [rorder,setrOrder] = useState('')
  const limit = 8;

  const sort = 'price';
  const asort = 'rating'

  useEffect(() =>{
    // setloding(true)

    let apiurl;
    if(orderby){
      apiurl = `http://localhost:8080/products?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${orderby}`
    }
    else if(rorder){
      apiurl = `http://localhost:8080/products?_page=${page}&_limit=${limit}&_sort=${asort}&_order=${rorder}`
    }
    else{
      apiurl = `http://localhost:8080/products?_page=${page}&_limit=${limit}`
    }
    fetch(apiurl)
    .then((res) => res.json())
    .then((json) => setdata(json))
  }, [page, orderby,rorder])

  useEffect(() => {
    let paramObj = {page, orderby, rorder};
    setSearchParams(paramObj)
  }, [page, orderby, rorder])

  console.log(data)

  // const getdata = () => {
  //   return fetch(
  //     `http://localhost:8080/products?_page=${page}&_limit=${limit}`
  //   ).then((res) => res.json());
  // };

  // const fetchdata = async () => {
  //   try {
  //     setloding(true);
  //     let data = await getdata();
  //     console.log(data);
  //     setdata(data);
  //     setloding(false);
  //   } catch (error) {
  //     setloding(false);
  //     console.log(error);
  //   }
  // };
  // // console.log(data);

  // useEffect(() => {
  //   fetchdata();
  // }, [page]);

  // const setPage = () => {};

  if (loading) {
    return (
      <div>
        <h1 style={{ fontSize: "40px" }}>Loading....</h1>
      </div>
    );
  }

  return (
<div>
    <div style={{display:'flex'}}>

      <div style={{
    marginLeft:'150px', marginTop:'50px',padding:'20px', backgroundColor:'rgb(218, 210, 208)'}}>
      <h1 style={{fontSize:'50px'}}>Filter By Price</h1>
      <Button style={{fontSize:'30px'}} 
      onClick ={()=> setOrderby('asc')}colorScheme='blue'>High To Low</Button>
      <br />
      <br />
      <Button style={{fontSize:'30px'}} 
      onClick ={()=> setOrderby('desc')}colorScheme='blue'>Low to High</Button>
      <br />
      <br />
      <Button style={{fontSize:'30px'}} 
      onClick ={()=> setOrderby('')}colorScheme='blue'>Resat All</Button>

      <hr style={{backgroundColor:'blue'}}/>

      <br />
      <br />

      <h1 style={{fontSize:'50px'}}>Filter By Rating</h1>
      <Button onClick={()=> setrOrder('asc')} style={{fontSize:'30px'}} colorScheme='blue'>Low to High</Button>
      <br />
      <br />
      <Button onClick={()=> setrOrder('desc')} style={{fontSize:'30px'}} colorScheme='blue'>High To Low</Button>
      <br />
      <br />
      <Button onClick={()=> setrOrder('')} style={{fontSize:'30px'}} colorScheme='blue'>Resat All</Button>

      </div>



    
    
   
    <div style={{
      display:'grid',
      gridTemplateColumns:'repeat(3, 1fr)',
      gap:'30px',
      margin:'auto',
      marginLeft:'5px',
      backgroundColor:'rgb(208, 208, 207)',
      padding:'20px'
      }} >
      {data.map((item) => (
        <ProductsPage key={item.id} {...item} />
      ))
      }

      {/* {
        data?.data?.map((e) => {
          <div key={e.id}>
            <img src={e.image_link} alt="" />
          </div>
        })
      } */}
    </div>
    
    </div>
    <div style={{alignContent:'center', padding:'30px', gap:'10px',}}>
        <Button  style={{fontSize:'30px'}} isDisabled={page===1} onClick={() => setpage(page - 1)} colorScheme="red">
          PRE
        </Button>
        <Button style={{fontSize:'40px'}}  colorScheme="blue">{page}</Button>
        <Button  style={{fontSize:'30px'}} isDisabled={page===7} onClick={() => setpage(page + 1)} colorScheme="red">
          NEXT
        </Button>
      </div>
    </div>
  );
}
