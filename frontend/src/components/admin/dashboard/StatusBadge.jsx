import React from "react";

const StatusBadge = ({ status }) => {

    const styles = {
        New: "bg-[#FF6B00]/10 text-[#FF8A3D] border border-[#FF6B00]/20",
        Contacted:"bg-[#FFB000]/10 text-[#FFB000] border border-[#FFB000]/20",
        Closed:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    };

    return (
        <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${styles[status] ||
                "border border-white/10 bg-white/5 text-[#A3A3A3]"}`}
        >
            {status}
        </span>
    );
};

export default StatusBadge;