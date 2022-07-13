import { Navigate, Outlet } from "react-router-dom";


const PrivatRouter = () => {
  const user = true;

  return (
    user ? <Outlet /> : <Navigate to="/login" /> 
  )
};

export default PrivatRouter