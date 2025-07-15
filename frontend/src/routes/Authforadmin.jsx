import { Navigate } from "react-router-dom";

const AdminRoute = (props) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const isAuthenticated = !!user;
    const isAdmin = user?.isAdmin === true;

    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (!isAdmin) return <Navigate to="/" replace />;

    return props.children;
};

export default AdminRoute;
