import { cn } from "@/lib/utils";
import {
  TrendUp,
  Layer,
  MessageQuestion,
  Danger,
  Chart,
  Trash,
} from "iconsax-reactjs";

export function ProblemStatementSection() {
  const features = [
    {
      title: "Exploding Bills",
      stat: "$500K+",
      description:
        "Monthly AI bills with no idea what's causing the spike or who's responsible",
      icon: <TrendUp size={24} variant="Bold" />,
    },
    {
      title: "Provider Fragmentation",
      stat: "3-5",
      description:
        "AI providers each with their own dashboard, billing cycle, and data format",
      icon: <Layer size={24} variant="Bold" />,
    },
    {
      title: "Zero Attribution",
      stat: "0%",
      description:
        "Can't attribute spending to teams, projects, or features",
      icon: <MessageQuestion size={24} variant="Bold" />,
    },
    {
      title: "Bill Shock",
      stat: "Every Month",
      description: "End-of-month invoices that blow through budgets",
      icon: <Danger size={24} variant="Bold" />,
    },
    {
      title: "No Unit Economics",
      stat: "Unknown",
      description: "Can't answer basic questions about AI cost per user",
      icon: <Chart size={24} variant="Bold" />,
    },
    {
      title: "Wasted Tokens",
      stat: "40%+",
      description:
        "Using expensive models for simple tasks, redundant prompts",
      icon: <Trash size={24} variant="Bold" />,
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700 mb-4">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            The AI Cost Crisis Is Real
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Your AI spend is growing 3x faster than your revenue. Here&apos;s why every AI-powered company is struggling:
          </p>
        </div>

        {/* Features Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  stat,
  description,
  icon,
  index,
}: {
  title: string;
  stat: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-slate-200",
        (index === 0 || index === 3) && "lg:border-l border-slate-200",
        index < 3 && "lg:border-b border-slate-200"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-slate-100 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-slate-100 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">
        <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
          {icon}
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-2 relative z-10 px-10 text-slate-900">
        {stat}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-300 group-hover/feature:bg-purple-600 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-slate-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-slate-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
