"use client";

import { Monitor, Clock, TrendingDown } from "lucide-react";

const stats = [
  {
    value: "5+",
    label: "Providers Supported",
    icon: Monitor,
  },
  {
    value: "<2 min",
    label: "Average Setup Time",
    icon: Clock,
  },
  {
    value: "10-30%",
    label: "Average Cost Savings",
    icon: TrendingDown,
  },
];

export function SolutionOverviewSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple-600 mb-3 block">
            The Solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            One Dashboard. Total Control.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            TokenTra is the command center for your AI spending. Connect all providers, see every dollar, optimize automatically. Setup takes 2 minutes.
          </p>
        </div>

        {/* Dashboard Screenshot */}
        <div className="relative mb-16">
          <div className="mx-auto max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              {/* Light mode image */}
              <img
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                className="w-full h-auto dark:hidden"
                alt="TokenTra unified dashboard showing all AI providers connected with real-time cost analytics"
              />
              {/* Dark mode image */}
              <img
                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                className="w-full h-auto hidden dark:block"
                alt="TokenTra unified dashboard showing all AI providers connected with real-time cost analytics"
              />
              
              {/* Annotation callouts */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-slate-200 hidden md:block">
                <p className="text-xs font-medium text-purple-600">Real-time sync every 5 minutes</p>
              </div>
              <div className="absolute bottom-1/3 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-slate-200 hidden md:block">
                <p className="text-xs font-medium text-purple-600">Breakdown by team & feature</p>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-slate-200 hidden md:block">
                <p className="text-xs font-medium text-purple-600">AI-powered optimization suggestions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 hover:bg-purple-50 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-slate-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
