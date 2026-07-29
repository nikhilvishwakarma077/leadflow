import React from "react";
import { AlertCircle, ArrowLeft } from "lucide-react";

const LeadDetailsNotFound = ({ error, onBack}) => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-[#A3A3A3] transition-colors hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Leads
        </button>

        <div className="mt-10 rounded-xl border border-red-500/20 bg-red-500/10 p-6">
          <div className="flex items-center gap-3 text-red-400">
            <AlertCircle size={20} />

            <p className="text-sm">
              {error || "Lead not found."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsNotFound;