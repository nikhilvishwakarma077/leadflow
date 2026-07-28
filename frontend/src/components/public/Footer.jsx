const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0D0D0D]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-white">
            Lead<span className="text-[#FF6B00]">Flow</span>
          </p>

          <p className="mt-1 text-sm text-[#737373]">
            Simple lead management for growing teams.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-[#737373] sm:items-end">
          <p>
            Built with{" "}
            <span className="text-[#A3A3A3]">
              React
            </span>
            ,{" "}
            <span className="text-[#A3A3A3]">
              Node.js
            </span>
            ,{" "}
            <span className="text-[#A3A3A3]">
              Express
            </span>{" "}
            &{" "}
            <span className="text-[#A3A3A3]">
              MongoDB
            </span>
            .
          </p>

          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A3A3A3] transition-colors duration-200 hover:text-[#FF6B00]"
          >
            Built for Digital Heroes Training Task
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;