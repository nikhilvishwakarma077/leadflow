import LeadRow from "./LeadRow";

const LeadsTable = ({ leads }) => {
  return (
    <div className="custom-scrollbar overflow-x-auto">
      <table className="w-full min-w-212.5">
        <thead>
          <tr className="border-b border-white/10 bg-[#121212]">
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#737373]">
              Lead
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
              Created
            </th>

            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#737373]">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <LeadRow
              key={lead._id}
              lead={lead}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsTable;