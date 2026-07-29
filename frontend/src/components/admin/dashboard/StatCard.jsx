import { Loader2 } from "lucide-react";

const StatCard = ({ label, value, icon, loading }) => {
    
    return (
        <div className="rounded-xl border border-white/10 bg-[#171717] p-6 transition-colors duration-200 hover:border-[#FF6B00]/30">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[#737373]">
                    {label}
                </p>

                <div className="text-[#FF6B00]">
                    {icon}
                </div>
            </div>

            {loading ? (
                <Loader2
                    size={24}
                    className="mt-4 animate-spin text-[#FF6B00]"
                />
            ) : (
                <p className="mt-4 text-3xl font-bold tracking-tight text-white">
                    {value}
                </p>
            )}
        </div>
    );
};

export default StatCard;