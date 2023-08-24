import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  const { id , name, price, image } = product;
  const { addToCart, removeFromCart, cartList } = useCart(); ;
  const [ isInCart , setIsInCart] = useState(false) ;
  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList ,id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">name</p>
      <div className="action">
        <p> ${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)} type="button">
            Remove
          </button>
        ) : (
          <button  onClick={() => addToCart(product)} type="button">
            Add To cart
          </button>
        )}
      </div>
    </div>
  );
};
