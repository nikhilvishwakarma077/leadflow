import React from "react";
import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";
import api from "../../services/api";

import LeadsHeader from "../../components/admin/leads/LeadsHeader";
import LeadsFilters from "../../components/admin/leads/LeadsFilters";
import LeadsTable from "../../components/admin/leads/LeadsTable";
import LeadsLoading from "../../components/admin/leads/LeadsLoading";
import LeadsEmpty from "../../components/admin/leads/LeadsEmpty";

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        <LeadsHeader />

        <LeadsFilters
          search={search}
          status={status}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
        />

        {error && (
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#171717]">
          {loading ? (
            <LeadsLoading />
          ) : leads.length === 0 ? (
            <LeadsEmpty search={search} status={status}/>
          ) : (
            <LeadsTable leads={leads} />
          )}
        </div>

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

export default Leads;