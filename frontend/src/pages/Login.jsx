import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { useDispatch } from "react-redux";
import { loginUser } from "../action/userAction";

const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const loginHandle = (data) => {
    data.id = nanoid()
    dispatch(loginUser(data))
    navigate("/")
  }

  return <div className="flex items-center justify-center">
    <form className="flex items-center flex-col w-full  px-10 mt-10 py-5 gap-2 md:w-2/3 lg:w-1/3" onSubmit={handleSubmit(loginHandle)} autoComplete="off">
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
      <p className="mt-5">Dont have an Account ? <Link to="/register" className="text-blue-400 border-b border-blue-500">Sign Up</Link></p>
    </form>
  </div>;
};

export default Login;
