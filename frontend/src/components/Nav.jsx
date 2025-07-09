
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = ({ open, setOpen }) => {
  const navRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // console.log(e.target)
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, setOpen]);

  const user = useSelector((state) => state.userReducer.userData)
  return <nav ref={navRef} className={`flex items-start  px-5 gap-5 mb-10 bg-[rgba(0,0,0,0.1)] backdrop-blur-xl w-1/2 flex-col h-screen text-xl fixed ${open ? "right-0 opacity-100" : "-right-[100%]"} z-10 top-0 py-2 md:flex-row md:w-full md:h-20 md:items-center md:justify-center md:gap-10 md:static md:mb-0 md:bg-red-500 md:opacity-100`}>
    <i className="ri-close-line absolute top-3 right-4 bg-red-500 rounded-full px-1 md:hidden text-white" onClick={() => { setOpen(false) }}></i>

    <NavLink to="/" className={`mt-10 md:mt-0`} onClick={() => { setOpen(false) }}>Home</NavLink>
    <NavLink to="/products" onClick={() => { setOpen(false) }}>Products</NavLink>
    {user ? <>
      <NavLink to="/cart" onClick={() => { setOpen(false) }}>Cart</NavLink>
      <NavLink to="/admin/create-product" onClick={() => { setOpen(false) }}>Create Product</NavLink>
    </> : <>

      <NavLink to="/login" onClick={() => { setOpen(false) }}>Login</NavLink>
    </>}
  </nav>
};

export default Nav;
