import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../action/userAction";

const Setting = () => {
    const { userData } = useSelector((state) => state.userReducer)
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: userData?.username,
            email: userData?.emailid,
            password: userData?.password
        }
    })
    const dispatch = useDispatch()
    const updateUserData = (data) => {
        console.log(data)
        dispatch(updateUser(userData.id, data))
    }

    const [formOpen, setFormOpen] = useState(false)


    useEffect(() => {
        if (formOpen) {
            reset({
                username: userData?.username,
                email: userData?.emailid,
                password: userData?.password
            });
        }
    }, [formOpen, reset, userData]);

    return <div>
        <div className="flex items-center mt-10 flex-col gap-2">
            <h1 className="text-2xl font-semibold ">User Info</h1>
            <h2>UserName - {userData?.username}</h2>
            <h2>Email - {userData?.emailid}</h2>
            <button className="bg-blue-400 w-1/2 py-1 rounded-[10px] text-[#fff]" onClick={() => { setFormOpen(true) }}>Edit Info</button>

        </div>
        {formOpen && (

            <form className="flex flex-col gap-2 items-center justify-center mt-10" onSubmit={handleSubmit(updateUserData)}>
                <input
                    {...register("username", { required: "Username can't empty" })}
                    type="text"
                    autoComplete="off"
                    placeholder="username"
                    className="border-b outline-none w-[70%]"
                />
                {errors.username && <p className="text-red-600">{errors.username.message}</p>}
                <input
                    {...register("email", { required: "Email can't empty" })}
                    autoComplete="off"
                    type="email"
                    placeholder="email"
                    className="border-b outline-none w-[70%]"
                />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                <input
                    {...register("password", { required: "Password can't empty" })}
                    autoComplete="off"
                    type="password"
                    placeholder="Enter new Password"
                    className="border-b outline-none w-[70%]"
                />
                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                <button className="bg-green-600 w-1/2 mt-5 py-1 text-[#fff] rounded-[10px]">Update User</button>
            </form>

        )}
    </div>;
};

export default Setting;
