import React from "react";
import { Users } from "lucide-react";

const DashboardEmpty = () => {
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

export default DashboardEmpty;