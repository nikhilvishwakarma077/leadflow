import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Mail,
  MessageSquare,
  User,
  Wallet,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

import api from "../../services/api";

const LeadDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lead, setLead] = useState(null);

  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(true);

  const [updating, setUpdating] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  // Fetch single lead
  const fetchLead = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get(`/leads/${id}`);

      const leadData = response.data.lead;

      setLead(leadData);
      setStatus(leadData.status);
    } catch (error) {
      console.error(
        "Failed to fetch lead:",
        error
      );

      setError(
        error.response?.data?.message ||
          "Failed to load lead details."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLead();
  }, [id]);

  // Update status
  const handleStatusUpdate = async () => {
    if (!lead || status === lead.status) {
      return;
    }

    try {
      setUpdating(true);
      setError("");
      setSuccess("");

      const response = await api.patch(
        `/leads/${id}/status`,
        {
          status,
        }
      );

      const updatedLead =
        response.data.lead;

      setLead(updatedLead);

      setStatus(updatedLead.status);

      setSuccess(
        "Lead status updated successfully."
      );
    } catch (error) {
      console.error(
        "Failed to update status:",
        error
      );

      setError(
        error.response?.data?.message ||
          "Failed to update lead status."
      );

      // Reset dropdown if update failed
      setStatus(lead.status);
    } finally {
      setUpdating(false);
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0D0D0D]">
        <div className="flex items-center gap-3 text-sm text-[#A3A3A3]">
          <Loader2
            size={20}
            className="animate-spin text-[#FF6B00]"
          />

          Loading lead details...
        </div>
      </div>
    );
  }

  // Lead not found
  if (!lead) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] p-6 lg:p-8">
        <div className="mx-auto max-w-4xl">
          <button
            onClick={() =>
              navigate("/admin/leads")
            }
            className="flex items-center gap-2 text-sm font-medium text-[#A3A3A3] transition-colors hover:text-white"
          >
            <ArrowLeft size={18} />

            Back to Leads
          </button>

          <div className="mt-10 rounded-xl border border-red-500/20 bg-red-500/10 p-6">
            <div className="flex items-center gap-3 text-red-400">
              <AlertCircle size={20} />

              <p className="text-sm">
                {error ||
                  "Lead not found."}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <button
          onClick={() =>
            navigate("/admin/leads")
          }
          className="flex items-center gap-2 text-sm font-medium text-[#737373] transition-colors hover:text-white"
        >
          <ArrowLeft size={18} />

          Back to Leads
        </button>

        {/* Header */}
        <div className="mt-8">
          <p className="text-sm font-medium text-[#FF6B00]">
            Lead Details
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">
            {lead.name}
          </h1>

          <p className="mt-2 text-sm text-[#737373]">
            View and manage this lead.
          </p>
        </div>

        {/* Notifications */}
        {error && (
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            <AlertCircle size={18} />

            {error}
          </div>
        )}

        {success && (
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#FF6B00]/20 bg-[#FF6B00]/10 p-4 text-sm text-[#FFB000]">
            <CheckCircle2 size={18} />

            {success}
          </div>
        )}

        {/* Main Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Lead Information */}
          <div className="space-y-6 lg:col-span-2">
            {/* Contact Information */}
            <section className="rounded-xl border border-white/10 bg-[#171717]">
              <div className="border-b border-white/10 px-6 py-5">
                <h2 className="font-semibold text-white">
                  Contact Information
                </h2>
              </div>

              <div className="grid gap-6 p-6 sm:grid-cols-2">
                <InfoItem
                  icon={<User size={18} />}
                  label="Name"
                  value={lead.name}
                />

                <InfoItem
                  icon={<Mail size={18} />}
                  label="Email"
                  value={lead.email}
                />

                <InfoItem
                  icon={<Wallet size={18} />}
                  label="Budget Range"
                  value={lead.budgetRange}
                />

                <InfoItem
                  icon={<CalendarDays size={18} />}
                  label="Created"
                  value={formatDate(
                    lead.createdAt
                  )}
                />
              </div>
            </section>

            {/* Message */}
            <section className="rounded-xl border border-white/10 bg-[#171717]">
              <div className="border-b border-white/10 px-6 py-5">
                <div className="flex items-center gap-2">
                  <MessageSquare
                    size={18}
                    className="text-[#FF6B00]"
                  />

                  <h2 className="font-semibold text-white">
                    Message
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <p className="whitespace-pre-wrap text-sm leading-7 text-[#A3A3A3]">
                  {lead.message}
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <section className="rounded-xl border border-white/10 bg-[#171717]">
              <div className="border-b border-white/10 px-6 py-5">
                <h2 className="font-semibold text-white">
                  Lead Status
                </h2>
              </div>

              <div className="p-6">
                <label className="mb-2 block text-sm font-medium text-[#A3A3A3]">
                  Current Status
                </label>

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value)
                  }
                  className="w-full rounded-lg border border-white/10 bg-[#0D0D0D] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10"
                >
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

                <button
                  onClick={handleStatusUpdate}
                  disabled={
                    updating ||
                    status === lead.status
                  }
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#FF7A1A] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {updating ? (
                    <>
                      <Loader2
                        size={17}
                        className="animate-spin"
                      />

                      Updating...
                    </>
                  ) : (
                    "Update Status"
                  )}
                </button>

                {status === lead.status && (
                  <p className="mt-3 text-center text-xs text-[#525252]">
                    No status changes to save.
                  </p>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= INFO ITEM ================= */

const InfoItem = ({
  icon,
  label,
  value,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 text-[#737373]">
        {icon}

        <p className="text-xs font-medium uppercase tracking-wide">
          {label}
        </p>
      </div>

      <p className="mt-2 text-sm font-medium text-white">
        {value || "-"}
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
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );
};

export default LeadDetails;