"use client";

import { useState } from "react";
import { Badge } from "@/components/base/badges/badges";
import { FeatureTabVertical } from "@/components/marketing/features/base-components/feature-tab";
import { FadeInUp, Hero3DImage, PopIn, StaggerContainer, StaggerItem, fadeInUp } from "@/components/ui/motion";

export const FeaturesTabsMockup01 = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <FadeInUp className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <PopIn>
                        <Badge color="gray" type="pill-color" size="md">
                            The Solution
                        </Badge>
                    </PopIn>
                    <FadeInUp delay={0.1}>
                        <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">One Dashboard. Total Control.</h2>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            TokenTra is the command center for your AI spending. Connect all providers, see every dollar, optimize automatically. Setup takes 2 minutes.
                        </p>
                    </FadeInUp>
                </FadeInUp>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-20 lg:items-center">
                    <Hero3DImage delay={0.3} className="flex w-full items-center justify-center md:h-128 md:w-auto">
                        <img
                            alt="TokenTra unified dashboard showing all AI providers connected with real-time cost analytics"
                            src="/hero-light.png"
                            className="h-full rounded object-contain shadow-2xl ring-4 ring-screen-mockup-border md:rounded-[10px] dark:hidden"
                        />
                        <img
                            alt="TokenTra unified dashboard showing all AI providers connected with real-time cost analytics"
                            src="/hero-dark.png"
                            className="hidden h-full rounded object-contain shadow-2xl ring-4 ring-screen-mockup-border md:rounded-[10px] dark:block"
                        />
                    </Hero3DImage>

                    <StaggerContainer staggerDelay={0.1} delay={0.4} className="flex flex-1 flex-wrap justify-center gap-y-11 lg:flex-nowrap">
                        {[
                            {
                                title: "5+ Providers Supported",
                                subtitle: "Connect OpenAI, Anthropic, Google, Azure, and AWS Bedrock in one unified dashboard with real-time sync every 5 minutes.",
                            },
                            {
                                title: "<2 min Average Setup",
                                subtitle: "Get started in under 2 minutes. No complex integrations, no engineering resources required. Just connect and go.",
                            },
                            {
                                title: "10-30% Cost Savings",
                                subtitle: "Our customers save 10-30% on AI costs through intelligent optimization suggestions and usage insights.",
                            },
                        ].map((item, index) => (
                            <StaggerItem key={item.title} variants={fadeInUp}>
                                <li onClick={() => setCurrentTab(index)}>
                                    <FeatureTabVertical title={item.title} subtitle={item.subtitle} isCurrent={index === currentTab} />
                                </li>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
};
