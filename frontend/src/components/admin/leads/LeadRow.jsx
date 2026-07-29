import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

import StatusBadge from "../../common/StatusBadge";

const LeadRow = ({ lead }) => {
    return (
        <tr className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/3">
            <td className="px-6 py-4">
                <p className="text-sm font-semibold text-white">
                    {lead.name}
                </p>

                <p className="mt-1 text-xs text-[#525252]">
                    Lead ID: {lead._id.slice(-6)}
                </p>
            </td>

            <td className="px-6 py-4 text-sm text-[#A3A3A3]">
                {lead.email}
            </td>

            <td className="px-6 py-4 text-sm text-[#A3A3A3]">
                {lead.budgetRange}
            </td>

            <td className="px-6 py-4">
                <StatusBadge status={lead.status} />
            </td>

            <td className="px-6 py-4 text-sm text-[#737373]">
                {formatDate(lead.createdAt)}
            </td>

            <td className="px-6 py-4 text-right">
                <Link
                    to={`/admin/leads/${lead._id}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-[#A3A3A3] transition-colors hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/10 hover:text-white"
                >
                    <Eye size={16} />
                    View
                </Link>
            </td>
        </tr>
    );
};

const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric",
        }
    );
};

export default LeadRow;