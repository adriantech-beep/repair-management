import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/FakeAuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(
    function () {
      if (!isAuthenticated)
        navigate("/login", { state: { from: location }, replace: true });
    },
    [isAuthenticated, navigate, location]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
