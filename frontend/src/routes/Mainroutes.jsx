import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Login from "../pages/Login"
import Createproduct from "../pages/admin/Createproduct";
import Productdetails from "../pages/admin/Productdetails"
import Setting from "../pages/Setting";
import Pagenotfound from "../pages/Pagenotfound";
import Authforuser from "./Authforuser";
import Authforadmin from "./Authforadmin";

const Mainroutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route path="/cart" element={
            <Authforuser>
                <Cart />
            </Authforuser>
        } />
        <Route path="/products" element={
            <Authforuser>
                <Products />
            </Authforuser>
        } />
        <Route path="/admin/create-product" element={
            <Authforadmin>
                <Createproduct />
            </Authforadmin>

        } />
        <Route path="/product-details/:id" element={
            <Authforadmin>
                <Productdetails />
            </Authforadmin>
        } />


        <Route path="/setting" element={
            <Authforuser>
                <Setting />
            </Authforuser>
        } />

        <Route path="*" element={<Pagenotfound />} />
    </Routes>
};

export default Mainroutes;
