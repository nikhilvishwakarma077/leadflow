import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import useAuthStore from "./store/authStore";

function App() {
  const getCurrentAdmin = useAuthStore(
    (state) => state.getCurrentAdmin
  );

  useEffect(() => {
    getCurrentAdmin();
  }, [getCurrentAdmin]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;