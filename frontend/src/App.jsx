import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useDispatch } from "react-redux";
import { currentUser } from "./action/userAction";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(currentUser())
  }, [])
  return <div>
    <Nav />
    <Mainroutes />
  </div>;
};

export default App;
