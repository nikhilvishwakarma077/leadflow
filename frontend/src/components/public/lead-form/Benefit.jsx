import React from "react";
import { CheckCircle2 } from "lucide-react";

const Benefit = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2
        size={18}
        className="text-[#FF6B00]"
      />

      <span className="text-sm text-[#A3A3A3]">
        {text}
      </span>
    </div>
  );
};

export default Benefit;