import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/authStore";

const ProtectedRoute = () => {
  const {
    isAuthenticated,
    isLoading,
  } = useAuthStore();

  // Wait for authentication check
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-zinc-500">
          Checking authentication...
        </p>
      </div>
    );
  }

  // Not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Authenticated
  return <Outlet />;
};

export default ProtectedRoute;