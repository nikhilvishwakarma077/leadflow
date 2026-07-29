import { useEffect, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Clock3, Users } from "lucide-react";
import api from "../../services/api";

import StatCard from "../../components/admin/dashboard/StatCard";
import RecentLeads from "../../components/admin/dashboard/RecentLeads";
import DashboardLoading from "../../components/admin/dashboard/DashboardLoading";
import DashboardEmpty from "../../components/admin/dashboard/DashboardEmpty";
import StatusBadge from "../../components/common/StatusBadge";
const Dashboard = () => {

  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/leads");

      setLeads(response.data.leads);
    } catch (error) {
      console.error("Failed to fetch leads:", error);

      setError(
        error.response?.data?.message || "Failed to load leads."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const statistics = useMemo(() => {
    return {

      total: leads.length,

      newLeads: leads.filter((lead) => lead.status === "New").length,
      contacted: leads.filter((lead) => lead.status === "Contacted").length,
      closed: leads.filter((lead) => lead.status === "Closed").length,
    };
  }, [leads]);

  const recentLeads = useMemo(() => {
    return [...leads]
      .sort(
        (a, b) =>
          new Date(b.createdAt) - new Date(a.createdAt)
      )
      .slice(0, 5);
  }, [leads]);

  return (

    <div className="min-h-full bg-[#0D0D0D] p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <header>
          <p className="text-sm font-medium text-[#FF6B00]">
            Overview
          </p>


          <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-[#737373]">
            Here's what's happening with your leads.
          </p>
        </header>

        {error && (
          <div className="mt-8 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total Leads"
            value={statistics.total}
            icon={<Users size={20} />}
            loading={loading}
          />

          <StatCard
            label="New Leads"
            value={statistics.newLeads}
            icon={<Clock3 size={20} />}
            loading={loading}
          />

          <StatCard
            label="Contacted"
            value={statistics.contacted}
            icon={<AlertCircle size={20} />}
            loading={loading}
          />

          <StatCard
            label="Closed"
            value={statistics.closed}
            icon={<CheckCircle2 size={20} />}
            loading={loading}
          />
        </div>

        <section className="mt-10">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Recent Leads
            </h2>

            <p className="mt-1 text-sm text-[#737373]">
              Your latest incoming leads.
            </p>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#171717]">
            {loading ? (
              <DashboardLoading />
            ) : recentLeads.length === 0 ? (
              <DashboardEmpty />
            ) : (
              <RecentLeads
                leads={recentLeads}
                StatusBadge={StatusBadge}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;