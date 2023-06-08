import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export const Shop = () => {
  const { edit, getbookbyid } = useContext(ShopContext);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Library Management System</h1>
      </div>
      <div className="searchdiv">
        <input
          type="text"
          className="search"
          placeholder="Search based on Book Name, Author or Category..."
          size="50"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="count">Total number of books : {PRODUCTS.length}</div>
      <div className="products">
        {edit &&
          edit
            .filter(
              (product) =>
                product.author.toLowerCase().includes(query) ||
                product.productName.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            )
            .map((product) => <Product data={product} />)}
      </div>
      {/* key={i} */}
      {/* <div className="products">
        {edit && edit.map((product) => <Product data={product} />)}
      </div> */}
    </div>
  );
};
