import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const cartItemAmount = cartItems[id];
  const handleSingleBook = (id, productImage, productName) => {
    navigate("/book", { state: { detail: [id, productImage, productName] } });
  };
  return (
    <div className="product">
      <img
        src={productImage}
        alt="="
        // onClick={() => handleSingleBook({ id, productImage, productName })}
      />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};
