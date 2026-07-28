import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Loader2,
  Users,
} from "lucide-react";

import api from "../../services/api";

const Dashboard = () => {
  const [leads, setLeads] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Fetch leads
  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/leads");

      setLeads(response.data.leads);
    } catch (error) {
      console.error("Failed to fetch leads:", error);

      setError(
        error.response?.data?.message ||
          "Failed to load leads."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Calculate statistics
  const statistics = useMemo(() => {
    const total = leads.length;

    const newLeads = leads.filter(
      (lead) => lead.status === "New"
    ).length;

    const contacted = leads.filter(
      (lead) => lead.status === "Contacted"
    ).length;

    const closed = leads.filter(
      (lead) => lead.status === "Closed"
    ).length;

    return {
      total,
      newLeads,
      contacted,
      closed,
    };
  }, [leads]);

  // Get latest 5 leads
  const recentLeads = useMemo(() => {
    return [...leads]
      .sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      )
      .slice(0, 5);
  }, [leads]);

  return (
    <div className="min-h-full bg-[#0D0D0D]  p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-[#FF6B00]">
            Overview
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-[#737373]">
            Here's what's happening with your leads.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-8 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            <AlertCircle size={18} />

            <span>{error}</span>
          </div>
        )}

        {/* Statistics */}
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

        {/* Recent Leads */}
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Recent Leads
              </h2>

              <p className="mt-1 text-sm text-[#737373]">
                Your latest incoming leads.
              </p>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#171717]">
            {loading ? (
              <LoadingState />
            ) : recentLeads.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="custom-scrollbar overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-[#1C1C1C]">
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#737373]">
                        Name
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#737373]">
                        Email
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#737373]">
                        Budget
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#737373]">
                        Status
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#737373]">
                        Date
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentLeads.map((lead) => (
                      <tr
                        key={lead._id}
                        className="border-b border-white/5 last:border-0 hover:bg-[#1C1C1C]"
                      >
                        <td className="px-6 py-4">
                          <p className="text-sm font-medium text-white">
                            {lead.name}
                          </p>
                        </td>

                        <td className="px-6 py-4 text-sm text-[#A3A3A3]">
                          {lead.email}
                        </td>

                        <td className="px-6 py-4 text-sm text-[#A3A3A3]">
                          {lead.budgetRange}
                        </td>

                        <td className="px-6 py-4">
                          <StatusBadge
                            status={lead.status}
                          />
                        </td>

                        <td className="px-6 py-4 text-sm text-[#737373]">
                          {formatDate(lead.createdAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

/* ================= STAT CARD ================= */

const StatCard = ({
  label,
  value,
  icon,
  loading,
}) => {
  return (
    <div className="rounded-xl border border-white/10 bg-[#171717] p-6 transition-colors duration-200 hover:border-[#FF6B00]/30">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-[#737373]">
          {label}
        </p>

        <div className="text-[#FF6B00]">
          {icon}
        </div>
      </div>

      {loading ? (
        <Loader2
          size={24}
          className="mt-4 animate-spin text-[#FF6B00]"
        />
      ) : (
        <p className="mt-4 text-3xl font-bold tracking-tight text-white">
          {value}
        </p>
      )}
    </div>
  );
};

/* ================= STATUS BADGE ================= */

const StatusBadge = ({ status }) => {
  const styles = {
    New: "bg-[#FF6B00]/10 text-[#FF8A3D] border border-[#FF6B00]/20",
    Contacted:
      "bg-[#FFB000]/10 text-[#FFB000] border border-[#FFB000]/20",
    Closed:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        styles[status] ||
        "border border-white/10 bg-white/5 text-[#A3A3A3]"
      }`}
    >
      {status}
    </span>
  );
};

/* ================= LOADING ================= */

const LoadingState = () => {
  return (
    <div className="flex min-h-60 items-center justify-center">
      <div className="flex items-center gap-3 text-sm text-[#737373]">
        <Loader2
          size={20}
          className="animate-spin text-[#FF6B00]"
        />

        Loading leads...
      </div>
    </div>
  );
};

/* ================= EMPTY ================= */

const EmptyState = () => {
  return (
    <div className="flex min-h-60 flex-col items-center justify-center px-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B00]/10">
        <Users
          size={22}
          className="text-[#FF6B00]"
        />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-white">
        No leads yet
      </h3>

      <p className="mt-2 max-w-sm text-sm text-[#737373]">
        New leads submitted through your website
        will appear here.
      </p>
    </div>
  );
};

/* ================= DATE ================= */

const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
};

export default Dashboard;