import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../action/productAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Createproduct = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const watchedValues = watch()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const createProductHandler = (product) => {
        product.id = nanoid()
        console.log(product)
        dispatch(asyncCreateProduct(product))
        toast.success("Product Created", {
            autoClose: 2000,
            hideProgressBar: true
        }
        )
        navigate("/products")
    }
    return <div className="flex w-full flex-col md:flex-row gap-5">
        <div className="w-[100%] md:w-1/2">
            <form className="flex items-center flex-col w-full px-10 mt-10 py-5 gap-2 md:w-full lg:w-full" onSubmit={handleSubmit(createProductHandler)} autoComplete="off">
                <h1 className="font-semibold mb-10 text-2xl">Create Product</h1>
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
                    className="outline-0 w-full border-b py-1 px-1"
                    step="any"
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
                <button className=" px-2 py-1 mt-3 w-full rounded-[50px] bg-[#5352EC] text-[#fff] font-semibold cursor-pointer">Add Product</button>
            </form>
        </div>
        <div className="flex items-center flex-col w-full px-10 mt-10 py-5 gap-2 md:w-1/2 lg:w-1/2">
            <h1 className="font-semibold mb-10 text-2xl">Product Overview</h1>
            {watchedValues.image ? (
                <img
                    src={watchedValues.image}
                    alt="Product Preview"
                    className="w-full max-h-60 object-contain mb-4 mix-blend-multiply"
                />
            ) : (
                <div className="w-full h-60 flex items-center justify-center bg-gray-100 text-gray-400 mb-4 border">
                    Image Preview
                </div>
            )}
            <h2 className="text-xl font-bold mb-1">
                {watchedValues.title || "Product Title"}
            </h2>

            {/* Description */}
            <p className="text-gray-700 mb-2 break-words w-full px-2 text-center">
                {watchedValues.description || "Product description will appear here."}
            </p>

            {/* Price */}
            <p className="text-lg font-semibold text-green-700 mb-1">
                ₹ {watchedValues.price || "0.00"}
            </p>

            {/* Category */}
            <p className="text-sm text-blue-600">
                Category: {watchedValues.category || "None"}
            </p>

        </div>
    </div>;
};

export default Createproduct;
