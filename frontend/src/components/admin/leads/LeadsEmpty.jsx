import { Users } from "lucide-react";

const LeadsEmpty = ({
  search,
  status,
}) => {
  const hasFilters =
    search.trim() || status !== "All";

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

export default LeadsEmpty;