import { MessageSquare } from "lucide-react";

const LeadMessageCard = ({ message }) => {
  return (
    <section className="rounded-xl border border-white/10 bg-[#171717]">
      <div className="border-b border-white/10 px-6 py-5">
        <div className="flex items-center gap-2">
          <MessageSquare
            size={18}
            className="text-[#FF6B00]"
          />

          <h2 className="font-semibold text-white">
            Message
          </h2>
        </div>
      </div>

      <div className="p-6">
        <p className="whitespace-pre-wrap text-sm leading-7 text-[#A3A3A3]">
          {message || "-"}
        </p>
      </div>
    </section>
  );
};

export default LeadMessageCard;