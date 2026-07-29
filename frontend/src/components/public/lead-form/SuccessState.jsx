import { CheckCircle2 } from "lucide-react";

const SuccessState = ({ onReset }) => {
  return (
    <div className="flex min-h-125 flex-col items-center justify-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B00]/10">
        <CheckCircle2
          size={28}
          className="text-[#FF6B00]"
        />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-white">
        Request submitted
      </h2>

      <p className="mt-3 max-w-sm text-sm leading-6 text-[#737373]">
        Thanks for reaching out. We've received
        your project details and will get back to
        you soon.
      </p>

      <button
        onClick={onReset}
        className="mt-8 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-[#A3A3A3] transition-colors duration-200 hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/10 hover:text-white"
      >
        Submit another request
      </button>
    </div>
  );
};

export default SuccessState;