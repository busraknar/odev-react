import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';


export default function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        setProductDetails(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);


  return (
   <>
        <div className="container">
          <h3>{productDetails.title}</h3>
          <img src={productDetails.thumbnail} style={{ width: 250, height: 250}} />
    
          <p>Price: ${productDetails.price}</p>
          <p>Description: {productDetails.description}</p>
    
          <div className="action-buttons">
            <button className="btn btn-danger">Add To Cart</button>
            <button className="btn btn-success">Shop Now</button>
          </div>
        </div>
        </>
      );
   
 
  
}
