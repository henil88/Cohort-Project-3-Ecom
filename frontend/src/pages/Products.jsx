import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Productcard from "../components/Productcard";

const Products = () => {
  const product = useSelector((state) => state.productReducer.productData)
  const navigate = useNavigate()
  return product.length > 0 ?
    <div className="grid grid-cols-1 px-12 gap-7 mt-20 mb-20 md:grid-cols-2 lg:grid-cols-3">
      {product.map((item) => (
        <Productcard
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
          id = {item.id}
        />
      ))}
    </div>
    :
    <div className="flex  flex-col gap-5 items-center justify-center">
      <h1 className="mt-15 text-2xl font-semibold">No Any Product</h1>
      <button className="bg-[#5352EC] text-[#fff] px-2 py-1 text-xl rounded-[10px]" onClick={() => { navigate("/admin/create-product") }}>Create Product</button>
    </div>
};

export default Products;
