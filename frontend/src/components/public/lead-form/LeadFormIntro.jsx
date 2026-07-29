import Benefit from "./Benefit";

const LeadFormIntro = () => {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#FF6B00]">
        Let's work together
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Tell us about your project.
      </h1>

      <p className="mt-6 max-w-lg text-base leading-7 text-[#A3A3A3]">
        Share a few details about what you're
        looking to build. Our team will review
        your requirements and get back to you.
      </p>

      <div className="mt-8 space-y-4">
        <Benefit text="Tell us what you need" />
        <Benefit text="Share your estimated budget" />
        <Benefit text="We'll review your requirements" />
      </div>
    </div>
  );
};

export default LeadFormIntro;