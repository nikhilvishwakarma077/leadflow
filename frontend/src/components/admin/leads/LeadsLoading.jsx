import { Loader2 } from "lucide-react";

const LeadsLoading = () => {
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

export default LeadsLoading;