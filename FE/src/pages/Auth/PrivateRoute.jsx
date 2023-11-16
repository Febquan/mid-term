import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return isLogin === true ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
