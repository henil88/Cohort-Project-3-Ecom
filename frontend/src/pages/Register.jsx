import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../action/userAction";
import { useDispatch } from 'react-redux'
import { toast } from "react-toastify";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const registerHandler = (data) => {
    data.id = nanoid()
    data.isAdmin = false
    dispatch(registerUser(data))
    toast.success("register succes", {
      autoClose: 3000,
      hideProgressBar: true
    });
    navigate("/")

  }


  return <div className="flex items-center justify-center h-screen md:h-[80%] lg:h-[80%] md:w-full">
    <form autoComplete="off" className="flex items-center flex-col w-[80%] px-10 mt-20 py-5 gap-2 md:w-1/2 lg:w-1/3 bg-[#fff] rounded-2xl" onSubmit={handleSubmit(registerHandler)}>
      <h1 className="font-semibold mb-10 text-2xl">Sign Up</h1>
      <input type="text"
        {...register("username", {
          required: "username can't blank"
        })}
        placeholder="Username"
        className="border-b outline-0 w-full py-1 px-1"
      />
      {errors.username && <p className="text-red-500">{errors.username.message}</p>}
      <input type="email"
        {...register("emailid", {
          required: "Email can't blank"
        })}
        placeholder="Enter Email Address"
        className="border-b outline-0 w-full py-1 px-1"
      />
      {errors.emailid && <p className="text-red-500">{errors.emailid.message}</p>}
      <input type="password"
        {...register("password", {
          required: "password can't blank",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",

          }
        })}
        placeholder="Enter Password"
        className="border-b outline-0 w-full py-1 px-1"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      <button className=" px-2 py-1 mt-3 w-full rounded-[50px] bg-[#5352EC] text-[#fff] font-semibold cursor-pointer">Sign Up</button>
      <p className="mt-10 mb-3">Already have an Account ? <Link to="/login" className="text-blue-400 border-b border-blue-500">Login</Link></p>
    </form>
  </div >;
};

export default Register;
