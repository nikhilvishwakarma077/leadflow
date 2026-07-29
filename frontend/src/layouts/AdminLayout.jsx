import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";


const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-50">
      <AdminSidebar />

      <main className="min-h-screen lg:pl-64">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;