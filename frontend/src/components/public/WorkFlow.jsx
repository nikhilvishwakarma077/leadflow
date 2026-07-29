import React from "react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Capture",
    description:
      "Potential customers submit their details through your lead capture form.",
  },
  {
    number: "02",
    title: "Organize",
    description:
      "Every submission is automatically stored in your centralized LeadFlow workspace.",
  },
  {
    number: "03",
    title: "Follow Up",
    description:
      "Your team reviews the lead, checks the requirements, and starts the conversation.",
  },
  {
    number: "04",
    title: "Close",
    description:
      "Track the lead through your workflow until the opportunity is successfully closed.",
  },
];

const Workflow = () => {

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section
      ref={sectionRef}
      id="workflow"
      className="border-b border-white/10 bg-[#0D0D0D]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FF6B00]">
              How it works
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              From first contact
              <span className="block text-[#A3A3A3]">
                to closed lead.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#737373] lg:pb-1">
            A simple workflow designed to keep your team focused
            on the next opportunity without unnecessary complexity.
          </p>
        </div>

        {/* Workflow Timeline */}
        <div className="mt-20">
          {/* Desktop Timeline */}
          <div className="relative hidden md:block">
            {/* Background Connecting Line */}
            <div className="absolute left-0 right-0 top-6 h-px bg-white/10" />

            <div className="relative grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group transition-all duration-700 ease-out ${isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                    }`}
                  style={{
                    transitionDelay: `${index * 500}ms`,
                  }}
                >
                  {/* Step Number + Connecting Line */}
                  <div className="relative flex items-center">
                    {/* Step Circle */}
                    <div
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-all duration-500 ${isVisible
                          ? "border-[#FF6B00] bg-[#FF6B00] text-white"
                          : "border-[#3A3A3A] bg-[#0D0D0D] text-[#525252]"
                        }`}
                    >
                      {step.number}
                    </div>

                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="relative h-px flex-1 overflow-hidden bg-white/10">
                        <div
                          className={`absolute inset-y-0 left-0 bg-[#FF6B00] transition-all duration-700 ease-out ${isVisible ? "w-full" : "w-0"
                            }`}
                          style={{
                            transitionDelay: `${index * 500 + 400}ms`,
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-7 pr-6">
                    <h3
                      className={`text-xl font-semibold transition-colors duration-500 ${isVisible
                          ? "text-white"
                          : "text-[#525252]"
                        }`}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="relative space-y-10">
              {/* Background Vertical Line */}
              <div className="absolute bottom-8 left-6 top-8 w-px bg-white/10" />

              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex gap-6 transition-all duration-700 ease-out ${isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                    }`}
                  style={{
                    transitionDelay: `${index * 500}ms`,
                  }}
                >
                  {/* Step Number */}
                  <div
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-all duration-500 ${isVisible
                        ? "border-[#FF6B00] bg-[#FF6B00] text-white"
                        : "border-[#3A3A3A] bg-[#0D0D0D] text-[#525252]"
                      }`}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3
                      className={`text-lg font-semibold transition-colors duration-500 ${isVisible
                          ? "text-white"
                          : "text-[#525252]"
                        }`}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#A3A3A3]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA / Summary */}
        <div className="mt-20 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-[#171717] p-6 sm:flex-row sm:items-center sm:p-7">
          <div>
            <p className="text-sm font-semibold text-white">
              One clear workflow. Every lead accounted for.
            </p>

            <p className="mt-1 text-sm text-[#737373]">
              Capture, organize, follow up, and close — all in one place.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#FF6B00]">
            <span>Simple from start to finish</span>

            <span className="h-2 w-2 rounded-full bg-[#FF6B00]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;