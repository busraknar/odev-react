import React from 'react'
import axios from "axios";

export default function AddProduct() {
    const AddProductAxios=()=>{
        axios.post("https://dummyjson.com/products/add", 
        {
          title: document.getElementById("title").value,
          description: document.getElementById("description").value,
          price: document.getElementById("price").value,
         
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  return (
    <>
    <div className="container">
    <div className="row">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />
    </div>
    <div className="row">
      <label htmlFor="description">Description</label>
      <input type="text" id="description" />
    </div>
    <div className="row">
      <label htmlFor="price">Price</label>
      <input type="number" id="price" />
    </div>
    <br />
    <div className="row">
      <button type="submit" onClick={() => { AddProductAxios() }}>Add</button>
      <br />
     
    </div>
  </div>
    </>
  );
}
