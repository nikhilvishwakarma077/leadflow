import { ArrowLeft } from "lucide-react";

const LeadDetailsHeader = ({name,onBack}) => {
  return (
    <>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-medium text-[#737373] transition-colors hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to Leads
      </button>

      <header className="mt-8">
        <p className="text-sm font-medium text-[#FF6B00]">
          Lead Details
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">
          {name}
        </h1>

        <p className="mt-2 text-sm text-[#737373]">
          View and manage this lead.
        </p>
      </header>
    </>
  );
};

export default LeadDetailsHeader;