
import React from 'react'
import { Link } from 'react-router-dom';
import Brands from './Brands';
 function ProductsPage(props) {

    const {id,brand,price,image_link,rating} = props;
    
    const handelclick = () => {

    }

  return (
    <div>
        <div style={{border:'1px solid'}}>
            
            <img src={image_link} alt="products" />
            <h3>Price: ₹ {price}</h3>
            <h3>Brand:{brand}</h3>
            <h4>Rating: ★ {rating}</h4>
            <Link to={`Brands/${id}`}>more </Link>
        </div>
    </div>
  )
}

export default ProductsPage;