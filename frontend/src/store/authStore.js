import { create } from "zustand";
import api from "../services/api";

const useAuthStore = create((set) => ({
  admin: null,
  isAuthenticated: false,
  isLoading: true,

  // Get currently logged-in admin
  getCurrentAdmin: async () => {
    try {
      const response = await api.get("/auth/me");

      set({
        admin: response.data.admin,
        isAuthenticated: true,
      });
    } catch (error) {
      set({
        admin: null,
        isAuthenticated: false,
      });
    } finally {
      set({
        isLoading: false,
      });
    }
  },

  // Login
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);

    set({
      admin: response.data.admin,
      isAuthenticated: true,
    });

    return response.data;
  },

  // Logout
  logout: async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      set({
        admin: null,
        isAuthenticated: false,
      });
    }
  },
}));

export default useAuthStore;