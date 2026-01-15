import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const storedData = localStorage.getItem("successionData");
  const successionData = storedData ? JSON.parse(storedData) : null;
  const token = successionData?.temporary_user?.token;
  if (!token) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default ProtectedRoute;
