import React, { useState, useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";

import { PRODUCTS } from "../products";
import { Product } from "../pages/shop/product";

export const Navbar = () => {
  const { filtering } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="links">
        <div className="filter">
          <Link to="/" onClick={() => filtering("Engineering")}>
            Engineering
          </Link>
          <Link to="/" onClick={() => filtering("Medical")}>
            Medical
          </Link>
          <Link to="/" onClick={() => filtering("Story")}>
            Story
          </Link>
          <Link to="/" onClick={() => filtering("Arts")}>
            Arts
          </Link>
        </div>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
