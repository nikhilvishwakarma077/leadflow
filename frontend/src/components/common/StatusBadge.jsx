const StatusBadge = ({ status }) => {

  const styles = {
    New: "border border-[#FF6B00]/20 bg-[#FF6B00]/10 text-[#FF9A4D]",
    Contacted:"border border-[#FFB000]/20 bg-[#FFB000]/10 text-[#FFB000]",
    Closed:"border border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        styles[status] ||
        "border border-white/10 bg-white/5 text-[#A3A3A3]"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;