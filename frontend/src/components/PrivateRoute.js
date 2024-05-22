import { Navigate } from "react-router-dom"; 
import { useSelector } from "react-redux" ; 
import { getToken } from "../app/selectors" ; 

const PrivateRoute = ({ children, path }) => {
  const token = useSelector(getToken);
  
  return token ? children : <Navigate to="/signin" replace />;
}
export default PrivateRoute ; 
