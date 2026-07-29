import React from "react";
import {ArrowRight,CheckCircle2,ChevronRight} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.png"

const Hero = () => {
  return (
    <section className="relative  h-screen overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="heroImg"
          className="h-full  w-full object-cover object-center opacity-60"
        />

      </div>

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-10 lg:pt-24">

        {/* Main Hero */}
        <div className="relative py-16 sm:py-5 lg:py-10">
          {/* Center Content */}
          <div className="mx-auto max-w-5xl text-center">
            {/* Eyebrow */}
            <div className="mx-auto mb-8 flex w-fit items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 bg-[#FF6B00]" />
                <span className="h-1.5 w-1.5 bg-[#F59E0B]" />
                <span className="h-1.5 w-1.5 bg-[#FF6B00]" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A3A3A3]">
                Digital Design & Development
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[88px]">
              Turn your ideas into
              <span className="mt-3 block text-[#FF6B00]">
                digital experiences.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#A3A3A3] sm:text-lg sm:leading-8">
              We design and build fast, modern, conversion-focused
              websites and digital solutions tailored to your
              business goals.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#FF6B00] px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#FF7A1A] hover:shadow-lg hover:shadow-orange-500/20 sm:w-auto"
              >
                Start Your Project

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/20">
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>

              <a
                href="#workflow"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#262626] bg-[#121212]/90 px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1A1A1A] sm:w-auto"
              >
                Explore Our Services

                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;