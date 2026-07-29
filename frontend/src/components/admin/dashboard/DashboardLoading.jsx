import { Loader2 } from "lucide-react";

const DashboardLoading = () => {
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

export default DashboardLoading;