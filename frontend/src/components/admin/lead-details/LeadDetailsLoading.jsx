import React from "react";
import { Loader2 } from "lucide-react";

const LeadDetailsLoading = () => {
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
};

export default LeadDetailsLoading;