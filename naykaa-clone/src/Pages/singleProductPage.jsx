import React from "react";
import { useParams } from "react-router-dom";


export default function singleProductPage() {
  
    let {params} = useParams
    console.log(params)

  return (
    <div>
      {/* <img src={res.data.image_link} alt="products" />
      <h3>Price ₹ {res.data.price}</h3>
      <h3>Brand:{res.data.brand}</h3>
      <h4>Rating: {res.data.rating} </h4> */}
    </div>
  );
}
