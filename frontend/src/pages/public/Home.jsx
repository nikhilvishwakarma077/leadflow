import React from "react";
import Features from "../../components/public/Features";
import Hero from "../../components/public/Hero";
import { Workflow } from "lucide-react";

const Home = () => {
  return (
    <>
      
      <Hero />

      <Features />

      <Workflow />

      <FinalCTA />
    </>
  );
};

export default Home;