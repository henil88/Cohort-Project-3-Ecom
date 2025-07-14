import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncDeleteProduct, asyncUpdateProduct } from "../../action/productAction";

const Productdetails = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { productReducer: { productData }, userReducer: { userData } } = useSelector((state) => state)
  // console.log(productData, userData)
  const product = productData?.find((product) => product.id == id)
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category
    }
  })

  const updateProductHandler = (updatedata) => {
    dispatch(asyncUpdateProduct(id, updatedata))
    navigate("/products")
  }
  return <>
    {product && <div className="flex flex-col items-center justify-center w-full rounded-2xl shadow-[#fff] shadow-5xl md:flex-row">
      <div className="flex flex-col items-center justify-center  px-2 py-2 w-[80%] gap-1 max-h-[80%] text-center">
        <img src={product.image} alt="" className="object-cover mix-blend-multiply w-1/3" />
        <h2 className="text-xl font-bold mb-1">
          {product.title}
        </h2>
        <p className="text-gray-700 mb-2 break-words w-full px-2 text-center">
          {product.description}
        </p>
        <p className="text-lg font-semibold text-green-700 mb-1">
          ₹ {product.price}
        </p>
        <div className="flex items-center justify-center  sm:gap-15 w-full gap-5 mb-5 sm:mt-5 md:gap-25  text-[#fff]">
          <button className="bg-[#397EB9] px-2 py-2 rounded-[5px] whitespace-nowrap" onClick={() => { navigate(`/update`) }}>Add to cart</button>
        </div>
      </div>
      {userData && userData?.isAdmin &&
        <form className="flex items-center flex-col w-full px-10 mt-10 py-5 gap-2 md:w-full lg:w-full" onSubmit={handleSubmit(updateProductHandler)} autoComplete="off">
          <h1 className="font-semibold mb-10 text-2xl">Update Product</h1>
          <input type="url"
            {...register("image", { required: "url can't blank" })}
            placeholder="Producr-url"
            className="border-b outline-0 w-full py-1 px-1"

          />
          {errors.url && <p className="text-red-500">{errors.url.message}</p>}
          <input type="text"
            {...register("title", {
              required: "title can't blank"
            })}
            placeholder="title"
            className="outline-0 w-full border-b py-1 px-1"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          <input
            {...register("price", { required: "price can't blank" })}
            type="number"
            placeholder="price"
            step="any"
            className="outline-0 w-full border-b py-1 px-1"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
          <textarea
            {...register("description", { required: "description can't blanl" })}
            placeholder="Product Description"
            className="outline-0 w-full border-b px-1"
          >
          </textarea>
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          <input
            {...register("category", { required: "category can't blank" })}
            placeholder="catogary"
            className="outline-0 w-full border-b py-1 px-1"
          />
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
          <div className="flex items-center justify-between w-full">
            <button className=" px-2 py-1 mt-3  rounded-[50px] w-1/3 bg-[#5352EC] text-[#fff] font-semibold cursor-pointer">Update Product</button>
            <button type="button" className="px-2 py-1 mt-3 w-1/3 rounded-[50px] bg-red-500 text-[#fff] font-semibold cursor-pointer" onClick={() => {
              dispatch(asyncDeleteProduct(id))
              navigate("/products")
            }}>Delete Product</button>
          </div>
        </form>
      }
    </div>

    }
  </>
};

export default Productdetails;
