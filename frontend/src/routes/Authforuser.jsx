import { Navigate } from "react-router-dom";

const Authforuser = (props) => {

    const isAuthenticated = localStorage.getItem("user");
    return isAuthenticated ? props.children : <Navigate to="/login" replace />;
};

export default Authforuser;
