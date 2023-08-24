import React from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  const {addToCart } = useCart() ;
 
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">name</p>
      <div className="action">
        <p> ${price}</p>
        <button onClick={()=>addToCart(product)} type="button">Add To cart</button>
      </div>
    </div>
  );
};
