import React from "react";
import {LayoutDashboard,Search,BarChart3} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: LayoutDashboard,
    title: "One place for every lead",
    description:
      "Keep your incoming leads organized in a centralized workspace instead of scattered across forms, spreadsheets, and messages.",
  },
  {
    icon: Search,
    title: "Find leads instantly",
    description:
      "Search through your leads quickly and filter them by their current status so your team always knows what needs attention.",
  },
  {
    icon: BarChart3,
    title: "Know what's moving",
    description:
      "See your lead pipeline at a glance with simple statistics for new, contacted, and closed opportunities.",
  },
];

const Features = () => {

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
      id="features"
      className="border-b border-white/10 bg-[#0D0D0D]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#FF6B00]">
            Built for clarity
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to manage your leads.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#A3A3A3]">
            LeadFlow removes the unnecessary complexity from
            lead management and gives your team a clear view
            of every opportunity.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group rounded-xl border border-white/10 bg-[#171717] p-7 transition-all duration-700 ease-out hover:border-[#FF6B00]/40 hover:bg-[#1A1A1A] ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  }`}
                style={{
                  transitionDelay: `${index * 250}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-lg bg-[#FF6B00] text-white transition-transform duration-500 ${isVisible
                      ? "scale-100"
                      : "scale-75"
                    } group-hover:scale-105`}
                >
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;