import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Login from "../pages/Login"
import Createproduct from "../pages/admin/Createproduct";

const Mainroutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin/create-product" element={<Createproduct />} />
    </Routes>
};

export default Mainroutes;
