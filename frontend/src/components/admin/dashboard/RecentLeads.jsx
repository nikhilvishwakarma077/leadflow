import React from "react";

const RecentLeads = ({ leads, StatusBadge }) => {
    
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

    return (
        <div className="custom-scrollbar overflow-x-auto">
            <table className="w-full min-w-175">
                <thead>
                    <tr className="border-b border-white/10 bg-[#1C1C1C]">
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#737373]">
                            Name
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#737373]">
                            Email
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#737373]">
                            Budget
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#737373]">
                            Status
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#737373]">
                            Date
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {leads.map((lead) => (
                        <tr
                            key={lead._id}
                            className="border-b border-white/5 last:border-0 hover:bg-[#1C1C1C]"
                        >
                            <td className="px-6 py-4">
                                <p className="text-sm font-medium text-white">
                                    {lead.name}
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentLeads;