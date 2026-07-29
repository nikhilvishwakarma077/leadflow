import React from "react";
import { Loader2 } from "lucide-react";

const LeadStatusCard = ({ status, currentStatus, updating, onStatusChange, onUpdate }) => {

    return (
        <section className="rounded-xl border border-white/10 bg-[#171717]">
            <div className="border-b border-white/10 px-6 py-5">
                <h2 className="font-semibold text-white">
                    Lead Status
                </h2>
            </div>

            <div className="p-6">
                <label className="mb-2 block text-sm font-medium text-[#A3A3A3]">
                    Current Status
                </label>

                <select
                    value={status}
                    onChange={(e) =>
                        onStatusChange(e.target.value)
                    }
                    className="w-full rounded-lg border border-white/10 bg-[#0D0D0D] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10"
                >
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

                <button
                    onClick={onUpdate}
                    disabled={updating || status === currentStatus}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#FF7A1A] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {updating ? (
                        <>
                            <Loader2 size={17} className="animate-spin" />
                            Updating...
                        </>
                    ) : (
                        "Update Status"
                    )}
                </button>

                {status === currentStatus && (
                    <p className="mt-3 text-center text-xs text-[#525252]">
                        No status changes to save.
                    </p>
                )}
            </div>
        </section>
    );
};

export default LeadStatusCard;