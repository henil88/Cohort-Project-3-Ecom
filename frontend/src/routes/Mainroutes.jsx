import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Login from "../pages/Login"
import Createproduct from "../pages/admin/Createproduct";
import Productdetails from "../pages/admin/Productdetails"
import Setting from "../pages/Setting";

const Mainroutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin/create-product" element={<Createproduct />} />
        <Route path="/product-details/:id" element={<Productdetails />} />
        <Route path="/setting" element={<Setting />} />
    </Routes>
};

export default Mainroutes;
