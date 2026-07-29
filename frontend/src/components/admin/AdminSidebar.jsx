import React from "react";
import {LayoutDashboard,Users,LogOut,X} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import useAuthStore from "../../store/authStore";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { admin, logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();

      navigate("/admin/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-lg border border-white/10 bg-[#171717] p-2.5 text-[#A3A3A3] shadow-sm transition-colors hover:border-[#FF6B00]/40 hover:text-white lg:hidden"
      >
        <LayoutDashboard size={20} />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/10 bg-[#0D0D0D] transition-transform duration-300 lg:translate-x-0 ${
          isMobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Lead<span className="text-[#FF6B00]">Flow</span>
            </h1>

            <p className="mt-0.5 text-xs text-[#737373]">
              Admin Workspace
            </p>
          </div>

          <button
            onClick={() => setIsMobileOpen(false)}
            className="rounded-lg p-2 text-[#737373] transition-colors hover:bg-[#171717] hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          <SidebarLink
            to="/admin/dashboard"
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            onClick={() => setIsMobileOpen(false)}
          />

          <SidebarLink
            to="/admin/leads"
            icon={<Users size={18} />}
            label="Leads"
            onClick={() => setIsMobileOpen(false)}
          />
        </nav>

        {/* Admin Section */}
        <div className="border-t border-white/10 p-4">
          {/* Admin Info */}
          <div className="mb-4 rounded-lg border border-white/10 bg-[#171717] p-3">
            <p className="truncate text-sm font-medium text-white">
              {admin?.name || "Admin"}
            </p>

            <p className="mt-1 truncate text-xs text-[#737373]">
              {admin?.email || "Admin account"}
            </p>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#A3A3A3] transition-colors hover:bg-[#171717] hover:text-white"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

const SidebarLink = ({
  to,
  icon,
  label,
  onClick,
}) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
          isActive
            ? "bg-[#FF6B00] text-white"
            : "text-[#A3A3A3] hover:bg-[#171717] hover:text-white"
        }`
      }
    >
      {icon}

      <span>{label}</span>
    </NavLink>
  );
};

export default AdminSidebar;