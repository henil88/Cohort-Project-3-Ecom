import React from "react";
import { useNavigate } from "react-router-dom";

const Productcard = ({ title, price, description, image, id }) => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center w-full bg-[#fff] rounded-2xl shadow-[#fff] shadow-5xl">
            <div className="flex flex-col items-center justify-center  px-2 py-2 w-[80%] gap-1 max-h-[80%] text-center">
                <img src={image} alt="" className="object-cover mix-blend-multiply w-1/3" />
                <h2 className="text-xl font-bold mb-1">
                    {title}
                </h2>
                <p className="text-gray-700 mb-2 break-words w-full px-2 text-center">
                    {description.slice(0, 100)}
                </p>
                <p className="text-lg font-semibold text-green-700 mb-1">
                    ₹ {price}
                </p>
                <div className="flex items-center justify-center  sm:gap-15 w-full gap-5 mb-5 sm:mt-5 md:gap-25  text-[#fff]">
                    <button className="bg-[#397EB9] px-2 whitespace-nowrap py-2 rounded-[5px]" onClick={() => { navigate(`/product-details/${id}`) }}>More info</button>
                    <button className="bg-[#397EB9] px-2 py-2 rounded-[5px] whitespace-nowrap" onClick={() => { navigate(`/cart`) }}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Productcard;
