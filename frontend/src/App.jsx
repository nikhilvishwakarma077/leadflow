import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import useAuthStore from "./store/authStore";

function App() {

  const getCurrentAdmin = useAuthStore((state) => state.getCurrentAdmin);

  useEffect(() => {
    getCurrentAdmin();
  }, [getCurrentAdmin]);

  return (
    <AppRoutes />
  );
}

export default App;