import { PRODUCTS } from "../../products";
import "./book.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import React from "react";

export const Book = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { details } = location.state;
  console.log(details);
  const { category, author, productName, productImage } = props.data;
  return (
    <div>
      <div className="image">
        <img src={productImage} alt="" />
      </div>

      <div className="header">
        <span>{productName}</span>
        <span>{category}</span>
        <span>{author}</span>
        <span>"Description Hello"</span>
      </div>
      <div onClick={() => navigate("/cart")}>Add to Cart</div>
    </div>
  );
};
