import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="border-t border-white/10 bg-[#0D0D0D]">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-28">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to turn your next lead into an{" "}
          <span className="text-[#FF6B00]">
            opportunity?
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#A3A3A3]">
          Give your team a simple way to capture and manage
          every potential customer.
        </p>

        <Link
          to="/contact"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#FF7A1A]"
        >
          Get Started

          <ArrowRight
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;