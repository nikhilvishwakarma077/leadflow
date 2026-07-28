import { useEffect, useState } from "react";
import {
  AlertCircle,
  Eye,
  Loader2,
  Search,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import api from "../../services/api";

const Leads = () => {
  const [leads, setLeads] = useState([]);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Fetch leads
  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError("");

      const params = {};

      if (search.trim()) {
        params.search = search.trim();
      }

      if (status !== "All") {
        params.status = status;
      }

      const response = await api.get("/leads", {
        params,
      });

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
    const timeout = setTimeout(() => {
      fetchLeads();
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, status]);

  return (
    <div className="min-h-screen bg-[#0D0D0D] p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-[#FF6B00]">
            CRM
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">
            Leads
          </h1>

          <p className="mt-2 text-sm text-[#737373]">
            Manage and track your incoming leads.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#737373]"
            />

            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-lg border border-white/10 bg-[#171717] py-3 pl-10 pr-4 text-sm text-white outline-none transition-colors placeholder:text-[#525252] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10"
            />
          </div>

          {/* Status Filter */}
          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="rounded-lg border border-white/10 bg-[#171717] px-4 py-3 text-sm text-[#A3A3A3] outline-none transition-colors focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10 sm:w-48"
          >
            <option
              value="All"
              className="bg-[#171717]"
            >
              All Statuses
            </option>

            <option
              value="New"
              className="bg-[#171717]"
            >
              New
            </option>

            <option
              value="Contacted"
              className="bg-[#171717]"
            >
              Contacted
            </option>

            <option
              value="Closed"
              className="bg-[#171717]"
            >
              Closed
            </option>
          </select>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            <AlertCircle size={18} />

            <span>{error}</span>
          </div>
        )}

        {/* Lead Table */}
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#171717]">
          {loading ? (
            <LoadingState />
          ) : leads.length === 0 ? (
            <EmptyState
              search={search}
              status={status}
            />
          ) : (
            <div className="custom-scrollbar overflow-x-auto">
              <table className="w-full min-w-[850px]">
                <thead>
                  <tr className="border-b border-white/10 bg-[#121212]">
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#737373]">
                      Lead
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
                      Created
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#737373]">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {leads.map((lead) => (
                    <tr
                      key={lead._id}
                      className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/[0.03]"
                    >
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-white">
                          {lead.name}
                        </p>

                        <p className="mt-1 text-xs text-[#525252]">
                          Lead ID: {lead._id.slice(-6)}
                        </p>
                      </td>

                      <td className="px-6 py-4 text-sm text-[#A3A3A3]">
                        {lead.email}
                      </td>

                      <td className="px-6 py-4 text-sm text-[#A3A3A3]">
                        {lead.budgetRange}
                      </td>

                      <td className="px-6 py-4">
                        <StatusBadge status={lead.status} />
                      </td>

                      <td className="px-6 py-4 text-sm text-[#737373]">
                        {formatDate(lead.createdAt)}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <Link
                          to={`/admin/leads/${lead._id}`}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-[#A3A3A3] transition-colors hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/10 hover:text-white"
                        >
                          <Eye size={16} />
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Results Count */}
        {!loading && leads.length > 0 && (
          <p className="mt-4 text-sm text-[#737373]">
            Showing {leads.length} lead
            {leads.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>
    </div>
  );
};

/* ================= STATUS BADGE ================= */

const StatusBadge = ({ status }) => {
  const styles = {
    New: "border border-[#FF6B00]/20 bg-[#FF6B00]/10 text-[#FF9A4D]",
    Contacted:
      "border border-[#FFB000]/20 bg-[#FFB000]/10 text-[#FFB000]",
    Closed:
      "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${styles[status] ||
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
    <div className="flex min-h-72 items-center justify-center">
      <div className="flex items-center gap-3 text-sm text-[#A3A3A3]">
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

const EmptyState = ({
  search,
  status,
}) => {
  const hasFilters =
    search || status !== "All";

  return (
    <div className="flex min-h-72 flex-col items-center justify-center px-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0D0D0D]">
        <Users
          size={22}
          className="text-[#737373]"
        />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-white">
        {hasFilters
          ? "No matching leads"
          : "No leads yet"}
      </h3>

      <p className="mt-2 max-w-sm text-sm text-[#737373]">
        {hasFilters
          ? "Try adjusting your search or status filter."
          : "New leads submitted through your website will appear here."}
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

export default Leads;