import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { useDispatch } from "react-redux";
import { loginUser } from "../action/userAction";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const loginHandle = async (data) => {
    data.id = nanoid()
    const res = await dispatch(loginUser(data))
    if (res) {
      navigate("/")
    } else {
      toast.error("please register first", {
        autoClose: 3000,
        hideProgressBar: true
      })
      navigate("/register")
    }
  }

  

  return <div className="flex items-center justify-center h-screen md:h-[80%] lg:h-[80%] md:w-full">
    <form className="flex items-center flex-col w-[80%] px-10 mt-20 py-5 gap-2 md:w-1/2 lg:w-1/3 bg-[#fff] rounded-2xl " onSubmit={handleSubmit(loginHandle)} autoComplete="off">
      <h1 className="font-semibold mb-10 text-2xl">Log in</h1>
      <input type="email"
        {...register("emailid", { required: "Email can't blank" })}
        placeholder="Email Address"
        className="border-b outline-0 w-full py-1 px-1"

      />
      {errors.emailid && <p className="text-red-500">{errors.emailid.message}</p>}
      <input type="password"
        {...register("password", {
          required: "Password cant blank"
        })}
        placeholder="Password"
        className="outline-0 w-full border-b py-1 px-1"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      <button className=" px-2 py-1 mt-3 w-full rounded-[50px] bg-[#5352EC] text-[#fff] font-semibold cursor-pointer">Log In</button>
      <p className="mt-10 mb-3">Dont have an Account ? <Link to="/register" className="text-blue-400 border-b border-blue-500">Sign Up</Link></p>
    </form>
  </div>;
};

export default Login;
