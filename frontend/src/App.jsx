import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useDispatch } from "react-redux";
import { currentUser } from "./action/userAction";
import { asyncLoadProduct } from "./action/productAction";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(currentUser())
    dispatch(asyncLoadProduct())
  }, [])
  let [open, setOpen] = useState(false)
  const navbaropen = () => {
    setOpen(prev => !prev);
  }
  return <div className="relative overflow-x-hidden md:static bg-[#ECEEEE] w-screen h-screen">
    <div className="fixed top-2 right-3 md:hidden">
      <i className="ri-menu-line text-2xl" onClick={navbaropen}></i>
    </div>
    <Nav open={open} setOpen={setOpen} />
    <Mainroutes />
  </div>;
};

export default App;
