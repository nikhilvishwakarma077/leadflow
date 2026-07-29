import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AlertCircle, CheckCircle2 } from "lucide-react";

import api from "../../services/api";

import LeadDetailsHeader from "../../components/admin/lead-details/LeadDetailsHeader";
import LeadInfoCard from "../../components/admin/lead-details/LeadInfoCard";
import LeadMessageCard from "../../components/admin/lead-details/LeadMessageCard";
import LeadStatusCard from "../../components/admin/lead-details/LeadStatusCard";
import LeadDetailsLoading from "../../components/admin/lead-details/LeadDetailsLoading";
import LeadDetailsNotFound from "../../components/admin/lead-details/LeadDetailsNotFound";

const LeadDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lead, setLead] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchLead = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get(`/leads/${id}`);
      const leadData = response.data.lead;

      setLead(leadData);
      setStatus(leadData.status);
    } catch (error) {
      console.error("Failed to fetch lead:", error);

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
        { status }
      );

      const updatedLead = response.data.lead;

      setLead(updatedLead);
      setStatus(updatedLead.status);
      setSuccess("Lead status updated successfully.");
    } catch (error) {
      console.error(
        "Failed to update status:",
        error
      );

      setError(
        error.response?.data?.message ||
          "Failed to update lead status."
      );

      setStatus(lead.status);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return <LeadDetailsLoading />;
  }

  if (!lead) {
    return (
      <LeadDetailsNotFound
        error={error}
        onBack={() => navigate("/admin/leads")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">
        <LeadDetailsHeader
          name={lead.name}
          onBack={() => navigate("/admin/leads")}
        />

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

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <LeadInfoCard lead={lead} />

            <LeadMessageCard message={lead.message} />
          </div>

          <LeadStatusCard
            status={status}
            currentStatus={lead.status}
            updating={updating}
            onStatusChange={setStatus}
            onUpdate={handleStatusUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;