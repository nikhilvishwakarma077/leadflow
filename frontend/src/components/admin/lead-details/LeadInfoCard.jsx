import { CalendarDays, Mail, User, Wallet } from "lucide-react";

const LeadInfoCard = ({ lead }) => {
    return (
        <section className="rounded-xl border border-white/10 bg-[#171717]">
            <div className="border-b border-white/10 px-6 py-5">
                <h2 className="font-semibold text-white">
                    Contact Information
                </h2>
            </div>

            <div className="grid gap-6 p-6 sm:grid-cols-2">
                <InfoItem
                    icon={<User size={18} />}
                    label="Name"
                    value={lead.name}
                />

                <InfoItem
                    icon={<Mail size={18} />}
                    label="Email"
                    value={lead.email}
                />

                <InfoItem
                    icon={<Wallet size={18} />}
                    label="Budget Range"
                    value={lead.budgetRange}
                />

                <InfoItem
                    icon={<CalendarDays size={18} />}
                    label="Created"
                    value={formatDate(lead.createdAt)}
                />
            </div>
        </section>
    );
};

const InfoItem = ({ icon, label, value }) => {
    return (
        <div>
            <div className="flex items-center gap-2 text-[#737373]">
                {icon}

                <p className="text-xs font-medium uppercase tracking-wide">
                    {label}
                </p>
            </div>

            <p className="mt-2 text-sm font-medium text-white">
                {value || "-"}
            </p>
        </div>
    );
};

const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString(
        "en-US",
        {
            month: "long",
            day: "numeric",
            year: "numeric",
        }
    );
};

export default LeadInfoCard;