import React from "react";
import { Search } from "lucide-react";

const LeadsFilters = ({ search, status, onSearchChange, onStatusChange}) => {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
            onSearchChange(e.target.value)
          }
          className="w-full rounded-lg border border-white/10 bg-[#171717] py-3 pl-10 pr-4 text-sm text-white outline-none transition-colors placeholder:text-[#525252] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10"
        />
      </div>

      <select
        value={status}
        onChange={(e) =>
          onStatusChange(e.target.value)
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
  );
};

export default LeadsFilters;