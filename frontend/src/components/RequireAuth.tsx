import { Navigate } from "react-router-dom";
export const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("token")) {
    alert("please login/signup first");
    return <Navigate to="/signup" />;
  }
  return children;
};
