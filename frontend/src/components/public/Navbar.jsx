import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-14 max-w-5xl items-center rounded-full border border-[#3A2415] bg-[#1A120D] px-2 shadow-2xl shadow-black/30 md:h-16 md:px-2.5">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 rounded-full px-3 py-2"
        >

          <span className="text-base font-bold tracking-[-0.03em] text-[#FFF7ED] md:text-lg">
            Lead<span className="text-[#FF6B00]">Flow</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-[#3A2415] bg-[#241810] p-1 md:flex">
          <a
            href="#features"
            className="rounded-full px-4 py-2 text-sm font-medium text-[#C7B8AA] transition-all duration-200 hover:bg-[#3A2415] hover:text-[#FFF7ED]"
          >
            Features
          </a>

          <a
            href="#workflow"
            className="rounded-full px-4 py-2 text-sm font-medium text-[#C7B8AA] transition-all duration-200 hover:bg-[#3A2415] hover:text-[#FFF7ED]"
          >
            How It Works
          </a>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="group ml-auto flex items-center gap-2 rounded-full bg-[#FF6B00] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#FF7A1A] hover:shadow-lg hover:shadow-orange-500/20"
        >
          <span>Get Started</span>

          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1A120D]/20 transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRight size={13} />
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;