import React from "react";
import { useId } from "react";
import { TrendingUp, Layers, HelpCircle, AlertTriangle, BarChart3, Trash2 } from "lucide-react";

const problemCards = [
  {
    title: "Exploding Bills",
    stat: "$500K+",
    description: "Monthly AI bills with no idea what's causing the spike or who's responsible",
    icon: TrendingUp,
  },
  {
    title: "Provider Fragmentation",
    stat: "3-5",
    description: "AI providers each with their own dashboard, billing cycle, and data format",
    icon: Layers,
  },
  {
    title: "Zero Attribution",
    stat: "0%",
    description: "Can't attribute spending to teams, projects, or features",
    icon: HelpCircle,
  },
  {
    title: "Bill Shock",
    stat: "Every Month",
    description: "End-of-month invoices that blow through budgets",
    icon: AlertTriangle,
  },
  {
    title: "No Unit Economics",
    stat: "Unknown",
    description: "Can't answer basic questions about AI cost per user",
    icon: BarChart3,
  },
  {
    title: "Wasted Tokens",
    stat: "40%+",
    description: "Using expensive models for simple tasks, redundant prompts",
    icon: Trash2,
  },
];

export function ProblemStatementSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3 block">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            The AI Cost Crisis Is Real
          </h2>
          <p className="text-lg md:text-xl text-tertiary max-w-3xl mx-auto">
            Your AI spend is growing 3x faster than your revenue. Here&apos;s why every AI-powered company is struggling:
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problemCards.map((card) => (
            <div
              key={card.title}
              className="relative bg-primary p-6 md:p-8 rounded-2xl overflow-hidden border border-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Grid size={20} />
              
              {/* Icon */}
              <div className="relative z-20 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-brand-600" />
                </div>
              </div>
              
              {/* Stat */}
              <p className="text-3xl md:text-4xl font-bold text-primary relative z-20 mb-2">
                {card.stat}
              </p>
              
              {/* Title */}
              <p className="text-lg font-semibold text-primary relative z-20 mb-2">
                {card.title}
              </p>
              
              {/* Description */}
              <p className="text-tertiary text-base relative z-20">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-slate-100/30 to-slate-200/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-slate-300/20 fill-slate-300/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: {
  width: number;
  height: number;
  x: string;
  y: string;
  squares: number[][];
  className?: string;
}) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy]: number[]) => (
            <rect
              strokeWidth="0"
              key={`${sx}-${sy}`}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
