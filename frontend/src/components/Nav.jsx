import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return <nav className="flex items-center justify-center gap-15 mb-10 bg-red-500 w-full h-15">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/cart">Cart</NavLink>
    <NavLink to="/login">Login</NavLink>
  </nav>
};

export default Nav;
