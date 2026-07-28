import { Routes, Route } from "react-router-dom";

import Home from "../pages/public/Home";
import LeadForm from "../pages/public/LeadForm";

import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import Leads from "../pages/admin/Leads";
import LeadDetails from "../pages/admin/LeadDetails";

import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import PublicLayout from "../layouts/PublicLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= PUBLIC ================= */}

      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/contact"
          element={<LeadForm />}
        />
      </Route>

      {/* ================= AUTH ================= */}

      <Route
        path="/admin/login"
        element={<Login />}
      />

      {/* ================= PROTECTED ADMIN ================= */}

      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route
            path="/admin/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/admin/leads"
            element={<Leads />}
          />

          <Route
            path="/admin/leads/:id"
            element={<LeadDetails />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;