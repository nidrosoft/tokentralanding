"use client";

import { useState } from "react";
import { ArrowRight, Link01, BarChart01, TrendDown01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { FadeInUp, FadeInLeft, FadeInRight, PopIn, StaggerContainer, StaggerItem, fadeInUp } from "@/components/ui/motion";

const steps = [
    {
        number: 1,
        title: "Connect Your Providers",
        subtitle: "Link OpenAI, Anthropic, Google, Azure, and AWS in one click. OAuth or API key—your choice. Takes less than 2 minutes.",
        bullets: [
            "One-click OAuth connection",
            "API key support for all providers",
            "No code changes required",
            "Secure credential storage",
        ],
        icon: Link01,
    },
    {
        number: 2,
        title: "See Your Spending",
        subtitle: "View your unified dashboard with real-time cost data. Breakdown by provider, model, team, and feature—all in one place.",
        bullets: [
            "Real-time cost tracking",
            "Breakdown by team & feature",
            "Historical trends & forecasting",
            "Export reports for finance",
        ],
        icon: BarChart01,
    },
    {
        number: 3,
        title: "Optimize & Save",
        subtitle: "Implement AI-powered recommendations. Enable smart routing and caching. Save 10-30% on AI costs automatically.",
        bullets: [
            "AI-powered recommendations",
            "Smart model routing",
            "Semantic caching",
            "Budget alerts & controls",
        ],
        icon: TrendDown01,
    },
];

export const HowItWorksSection = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <section id="how-it-works" className="overflow-hidden bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <FadeInUp className="flex w-full flex-col lg:max-w-3xl">
                    <PopIn>
                        <Badge color="gray" type="pill-color" size="md">
                            How It Works
                        </Badge>
                    </PopIn>

                    <FadeInUp delay={0.1}>
                        <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">Get Started in 3 Steps</h2>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Whether you have 1 AI integration or 100, the process is the same. Get complete visibility in under 2 minutes.
                        </p>
                    </FadeInUp>
                </FadeInUp>

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-start">
                    <StaggerContainer staggerDelay={0.15} className="flex flex-col min-h-[400px]">
                        {steps.map((step, index) => (
                            <StaggerItem key={step.title} variants={fadeInUp}>
                                <li 
                                    onMouseEnter={() => setCurrentTab(index)}
                                    className="cursor-pointer"
                                >
                                    <div className={`border-l-2 py-6 pl-6 pr-4 rounded-r-xl transition-colors duration-500 ease-in-out ${index === currentTab ? 'border-purple-600 bg-purple-50' : 'border-gray-200 bg-transparent'}`}>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-colors duration-500 ease-in-out ${index === currentTab ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                                                {step.number}
                                            </span>
                                            <h3 className={`text-lg font-semibold transition-colors duration-500 ease-in-out ${index === currentTab ? 'text-primary' : 'text-tertiary'}`}>
                                                {step.title}
                                            </h3>
                                        </div>
                                        
                                        <div className={`grid transition-all duration-500 ease-in-out ${index === currentTab ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                            <div className="overflow-hidden">
                                                <p className="text-md text-tertiary mt-2 mb-4">
                                                    {step.subtitle}
                                                </p>
                                                <ul className="space-y-2">
                                                    {step.bullets.map((bullet) => (
                                                        <li key={bullet} className="flex items-center gap-2 text-sm text-tertiary">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                                                            {bullet}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <FadeInRight className="relative -ml-4 w-screen md:w-full lg:h-140">
                        <div className="-mx-4 flex items-center justify-center lg:absolute lg:mr-9.5 lg:-ml-0 lg:h-140 lg:w-[50vw] lg:justify-start">
                            <img
                                alt="TokenTra Dashboard - Step by step setup"
                                src="/how.png"
                                className="h-full object-contain lg:max-w-none"
                            />
                        </div>
                    </FadeInRight>
                </div>

                <FadeInUp delay={0.3} className="mt-12 flex justify-center">
                    <Button size="xl" iconTrailing={ArrowRight}>
                        Get Started Free
                    </Button>
                </FadeInUp>
            </div>
        </section>
    );
};

export const FeaturesTabsMockup07 = HowItWorksSection;
