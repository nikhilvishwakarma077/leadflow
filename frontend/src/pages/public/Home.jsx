// import { ArrowRight, CheckCircle2, LayoutDashboard, Search, Zap } from "lucide-react";

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-white text-zinc-900">
//       {/* Navbar */}
//       <header className="border-b border-zinc-200">
//         <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
//           <div className="text-xl font-bold tracking-tight">
//             LeadFlow
//           </div>

//           <div className="hidden items-center gap-8 text-sm font-medium md:flex">
//             <a href="#features" className="text-zinc-600 hover:text-zinc-900">
//               Features
//             </a>

//             <a href="#workflow" className="text-zinc-600 hover:text-zinc-900">
//               How It Works
//             </a>

//             <a href="#contact" className="text-zinc-600 hover:text-zinc-900">
//               Contact
//             </a>
//           </div>

//           <a
//             href="#contact"
//             className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
//           >
//             Get Started
//           </a>
//         </nav>
//       </header>

//       {/* Hero */}
//       <main>
//         <section className="border-b border-zinc-200">
//           <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
//             {/* Hero Content */}
//             <div>
//               <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-600">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500" />
//                 Simple lead management for growing teams
//               </div>

//               <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
//                 Turn every lead into an opportunity.
//               </h1>

//               <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
//                 Capture leads, organize your pipeline, and keep track of every
//                 opportunity from one simple workspace.
//               </p>

//               <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//                 <a
//                   href="#contact"
//                   className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3.5 font-medium text-white transition hover:bg-zinc-800"
//                 >
//                   Submit a Lead
//                   <ArrowRight size={18} />
//                 </a>

//                 <a
//                   href="#workflow"
//                   className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-6 py-3.5 font-medium text-zinc-700 transition hover:bg-zinc-50"
//                 >
//                   See How It Works
//                 </a>
//               </div>
//             </div>

//             {/* Product Preview */}
//             <div className="relative">
//               <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 shadow-sm">
//                 <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
//                   {/* Fake Dashboard Header */}
//                   <div className="flex items-center justify-between border-b border-zinc-100 pb-5">
//                     <div>
//                       <p className="text-sm font-medium text-zinc-500">
//                         Lead Overview
//                       </p>
//                       <h3 className="mt-1 text-2xl font-bold">
//                         248 Leads
//                       </h3>
//                     </div>

//                     <div className="rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white">
//                       This Month
//                     </div>
//                   </div>

//                   {/* Stats */}
//                   <div className="grid grid-cols-3 gap-3 py-5">
//                     <div className="rounded-lg bg-zinc-50 p-4">
//                       <p className="text-xs text-zinc-500">New</p>
//                       <p className="mt-2 text-xl font-bold">84</p>
//                     </div>

//                     <div className="rounded-lg bg-zinc-50 p-4">
//                       <p className="text-xs text-zinc-500">Contacted</p>
//                       <p className="mt-2 text-xl font-bold">72</p>
//                     </div>

//                     <div className="rounded-lg bg-zinc-50 p-4">
//                       <p className="text-xs text-zinc-500">Converted</p>
//                       <p className="mt-2 text-xl font-bold">32</p>
//                     </div>
//                   </div>

//                   {/* Lead Rows */}
//                   <div className="space-y-3">
//                     {[
//                       ["Alex Morgan", "New"],
//                       ["Sarah Wilson", "Contacted"],
//                       ["James Carter", "Converted"],
//                     ].map(([name, status]) => (
//                       <div
//                         key={name}
//                         className="flex items-center justify-between rounded-lg border border-zinc-100 p-4"
//                       >
//                         <div>
//                           <p className="text-sm font-semibold">{name}</p>
//                           <p className="mt-1 text-xs text-zinc-500">
//                             Business inquiry
//                           </p>
//                         </div>

//                         <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
//                           {status}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Value Proposition */}
//         <section className="border-b border-zinc-200">
//           <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
//             <div className="max-w-2xl">
//               <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
//                 Built for simplicity
//               </p>

//               <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
//                 Stop losing track of valuable leads.
//               </h2>

//               <p className="mt-4 text-lg leading-8 text-zinc-600">
//                 LeadFlow gives your team a clear place to capture, organize,
//                 search, and manage every lead without unnecessary complexity.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Features */}
//         <section id="features" className="border-b border-zinc-200">
//           <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
//             <div className="grid gap-6 md:grid-cols-3">
//               <FeatureCard
//                 icon={<Zap size={22} />}
//                 title="Capture Leads"
//                 description="Collect new leads through a simple and frictionless lead capture form."
//               />

//               <FeatureCard
//                 icon={<LayoutDashboard size={22} />}
//                 title="Manage Everything"
//                 description="Keep your leads organized in one centralized workspace."
//               />

//               <FeatureCard
//                 icon={<Search size={22} />}
//                 title="Find Leads Faster"
//                 description="Search and access the right lead information whenever you need it."
//               />
//             </div>
//           </div>
//         </section>

//         {/* Workflow */}
//         <section id="workflow" className="border-b border-zinc-200">
//           <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
//             <div className="mx-auto max-w-2xl text-center">
//               <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
//                 Simple workflow
//               </p>

//               <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
//                 From new lead to closed opportunity.
//               </h2>
//             </div>

//             <div className="mt-16 grid gap-8 md:grid-cols-3">
//               <WorkflowStep
//                 number="01"
//                 title="Capture"
//                 description="A potential customer submits their information through your lead form."
//               />

//               <WorkflowStep
//                 number="02"
//                 title="Organize"
//                 description="The lead is stored securely and becomes available in your admin workspace."
//               />

//               <WorkflowStep
//                 number="03"
//                 title="Follow Up"
//                 description="Your team tracks the lead and updates its status as the relationship progresses."
//               />
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section id="contact">
//           <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
//             <div className="rounded-2xl bg-zinc-900 px-6 py-16 text-center text-white sm:px-12">
//               <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
//                 Ready to start managing your leads?
//               </h2>

//               <p className="mx-auto mt-4 max-w-xl text-zinc-400">
//                 Capture your next opportunity and keep your sales workflow
//                 organized with LeadFlow.
//               </p>

//               <a
//                 href="/contact"
//                 className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-medium text-zinc-900 transition hover:bg-zinc-100"
//               >
//                 Submit a Lead
//                 <ArrowRight size={18} />
//               </a>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-zinc-200">
//         <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
//           <p>© 2026 LeadFlow. All rights reserved.</p>

//           <p className="flex items-center gap-2">
//             Built with
//             <CheckCircle2 size={16} />
//             for better lead management.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// const FeatureCard = ({ icon, title, description }) => {
//   return (
//     <div className="rounded-xl border border-zinc-200 p-7 transition hover:border-zinc-300 hover:shadow-sm">
//       <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
//         {icon}
//       </div>

//       <h3 className="mt-6 text-lg font-semibold">{title}</h3>

//       <p className="mt-3 text-sm leading-6 text-zinc-600">
//         {description}
//       </p>
//     </div>
//   );
// };

// const WorkflowStep = ({ number, title, description }) => {
//   return (
//     <div>
//       <span className="text-sm font-semibold text-zinc-400">
//         {number}
//       </span>

//       <h3 className="mt-4 text-xl font-semibold">{title}</h3>

//       <p className="mt-3 text-sm leading-6 text-zinc-600">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default Home;

import Hero from "../../components/public/Hero";
import Features from "../../components/public/Features";
import Workflow from "../../components/public/Workflow";
import FinalCTA from "../../components/public/FinalCTA";

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