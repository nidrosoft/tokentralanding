"use client";

import { type FC, Fragment, type HTMLAttributes, useState } from "react";
import { ChartBreakoutSquare, CheckCircle, MessageChatCircle, PlayCircle, ZapFast, PieChart01, Tag01, Bell01, MagicWand01, Route, Database01 } from "@untitledui/icons";
import { 
    motion, 
    FadeInUp, 
    FadeInLeft, 
    FadeInRight, 
    ScaleIn, 
    StaggerContainer, 
    StaggerItem, 
    Hero3DImage, 
    PopIn, 
    HoverLift,
    BlurFadeIn,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    popIn,
    ScrollProgress,
    MorphingBlob,
    SpotlightCard,
    TiltCard,
    MagneticButton,
    FloatingElement,
} from "@/components/ui/motion";
import { 
    LinearDarkIcon,
    NotionIcon,
    VercelDarkIcon,
    SupabaseIcon,
    RaycastIcon,
    ResendDarkIcon,
    ClerkDarkIcon,
    PosthogDarkIcon,
    PlainDarkIcon,
    TriggerDotDevDarkIcon,
    OpenAIDarkIcon,
    AnthropicDarkIcon,
    GoogleIcon,
    MicrosoftAzureIcon,
    AWSDarkIcon,
    TwitterIcon,
    HuggingFaceIcon,
    SlackIcon,
    GMailIcon,
    StabilityAIIcon,
    ReplicateDarkIcon,
} from "@trigger.dev/companyicons";
import { Collection, Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { AngelList, Dribbble, Facebook, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { ProblemStatementSection } from "@/components/ui/feature-section-with-hover-effects";
import { FeaturesTabsMockup01 } from "@/components/marketing/features/features-tabs-mockup-01";
import { HowItWorksSection } from "@/components/marketing/features/features-tabs-mockup-07";
import { SDKShowcaseSection } from "@/components/ui/sdk-showcase-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { TestimonialSocialCards03 } from "@/components/marketing/testimonials/testimonial-social-cards-03";
import { MetricsSimpleCenteredTextBrand } from "@/components/marketing/metrics/metrics-simple-centered-text-brand";
import { cx } from "@/utils/cx";

const footerSocials = [
    { label: "X (formerly Twitter)", icon: X, href: "https://x.com/zehcyriac" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/in/cyriac-zeh/" },
];

const footerNavList = [
    {
        label: "Product",
        items: [
            { label: "Features", href: "#features" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Integrations", href: "/integrations" },
            { label: "Pricing", href: "#pricing" },
            { label: "SDK", href: "/docs" },
        ],
    },
    {
        label: "Company",
        items: [
            { label: "About", href: "/about" },
            { label: "Changelog", href: "/changelog" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        label: "Resources",
        items: [
            { label: "Documentation", href: "/docs" },
            { label: "Integrations", href: "/integrations" },
            { label: "Help Center", href: "mailto:support@tokentra.io" },
        ],
    },
    {
        label: "Social",
        items: [
            { label: "Twitter", href: "https://x.com/zehcyriac" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/cyriac-zeh/" },
        ],
    },
    {
        label: "Legal",
        items: [
            { label: "Terms of Service", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Cookie Policy", href: "/cookies" },
        ],
    },
];

const AnnouncementBanner = () => {
    return (
        <div className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 py-2.5 px-4">
            <div className="mx-auto max-w-container flex items-center justify-center gap-x-3 text-sm md:text-base">
                <span className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold text-white">
                    NEW
                </span>
                <p className="text-white font-medium">
                    <span className="hidden sm:inline">Introducing our </span>SDK for seamless AI cost tracking integration
                </p>
                <a 
                    href="/docs" 
                    className="inline-flex items-center gap-1 text-white font-semibold hover:underline whitespace-nowrap"
                >
                    Learn more →
                </a>
            </div>
        </div>
    );
};

const HeroScreenMockup01 = () => {
    return (
        <div className="relative overflow-hidden bg-secondary_alt">
            {/* Announcement Banner */}
            <AnnouncementBanner />
            
            {/* Background pattern */}
            <img
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-md-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
                alt="Grid pattern background"
            />
            <img
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-md-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
                alt="Grid pattern background"
            />

            <ScrollProgress />
            <Header />

            <section className="relative overflow-hidden py-16 md:py-24">
                {/* Morphing background blobs for premium feel */}
                <MorphingBlob className="w-[600px] h-[600px] -top-40 -left-40" color="purple" />
                <MorphingBlob className="w-[500px] h-[500px] top-20 -right-40" color="blue" />
                
                <div className="mx-auto w-full max-w-container px-4 md:px-8 relative z-10">
                    <div className="mx-auto flex w-full flex-col items-center text-center">
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            <Badge color="gray" type="modern" size="lg" className="mb-6 px-4 py-2">
                                Trusted by 200+ AI-native companies
                            </Badge>
                        </motion.div>
                        
                        <motion.h1 
                            className="w-full text-[28px] sm:text-[56px] font-[800] tracking-tight text-primary md:text-[56px] lg:text-[80px]" 
                            style={{ fontFamily: 'Satoshi, sans-serif' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            Your AI costs are out of control.
                        </motion.h1>
                        <motion.div 
                            className="relative mt-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            <span className="text-[28px] sm:text-[56px] font-[800] tracking-tight bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 bg-clip-text text-transparent md:text-[56px] lg:text-[80px]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                                We fix that.
                            </span>
                            <motion.svg
                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[180px] md:w-[250px] lg:w-[320px]"
                                viewBox="0 0 318 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                            >
                                <motion.path
                                    d="M2 8.5C47.5 3.5 142.5 -1.5 316 8.5"
                                    stroke="url(#paint0_linear)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                                />
                                <defs>
                                    <linearGradient id="paint0_linear" x1="2" y1="8.5" x2="316" y2="8.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#A855F7" />
                                        <stop offset="1" stopColor="#7C3AED" />
                                    </linearGradient>
                                </defs>
                            </motion.svg>
                        </motion.div>
                        <motion.p 
                            className="mt-8 max-w-3xl text-lg text-tertiary md:mt-10 md:text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            TokenTra gives you complete visibility and control over AI spending across OpenAI, Anthropic, Google, Azure, and AWS Bedrock. Stop guessing. Start optimizing.
                        </motion.p>
                        <motion.div 
                            className="mt-8 flex w-full justify-center md:mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            <MagneticButton strength={0.2}>
                                <motion.a
                                    href="https://app.tokentra.io"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 shadow-lg hover:shadow-xl transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    Get Started Free
                                </motion.a>
                            </MagneticButton>
                        </motion.div>
                        
                        {/* Trust Indicators */}
                        <motion.div 
                            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-tertiary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            {[
                                "Free up to $1K AI spend/month",
                                "Setup in under 2 minutes", 
                                "No credit card required"
                            ].map((text, i) => (
                                <motion.span 
                                    key={text}
                                    className="flex items-center gap-1.5"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                                >
                                    <CheckCircle className="size-4 text-fg-success-primary" />
                                    {text}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-container px-4 md:h-120 md:px-8">
                    <div className="flex flex-col md:items-start">
                        <Hero3DImage className="mx-auto flex h-full w-full items-center justify-center md:max-h-125 md:w-full md:max-w-300 md:items-start lg:max-h-160">
                            <div className="size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[28px] md:p-[3.5px] md:ring-[1.75px]">
                                <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[24.5px] md:p-1 md:shadow-modern-mockup-inner-lg">
                                    <div className="relative size-full overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[21px] md:ring-[1.75px]">
                                        <img
                                            src="/heroo-dark.png"
                                            className="size-full object-cover dark:hidden"
                                            alt="TokenTra dashboard showing AI cost analytics with spend trends and model breakdown"
                                        />
                                        <img
                                            src="/heroo-dark.png"
                                            className="hidden size-full object-cover dark:block"
                                            alt="TokenTra dashboard showing AI cost analytics with spend trends and model breakdown"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Hero3DImage>
                    </div>
                </div>
            </section>
        </div>
    );
};

const aiStartups = [
    "Lovable",
    "Replit",
    "Cursor",
    "Jasper",
    "Copy.ai",
    "Runway",
    "Hugging Face",
    "Cohere",
    "Perplexity",
    "Character.AI",
];

const SocialProofFullWidthMasked = () => {
    return (
        <section className="overflow-hidden bg-primary_alt py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-6">
                    <p className="text-center text-md font-medium text-tertiary">Trusted by innovative AI teams at</p>
                    <div className="flex max-w-full flex-col items-center gap-y-4 mask-x-from-80%">
                        {/* Top layer of company names */}
                        <div className="flex">
                            <div className="flex w-auto max-w-none shrink-0 animate-marquee justify-center gap-8 pl-8 motion-reduce:animate-none md:gap-12 md:pl-12">
                                {aiStartups.map((name) => (
                                    <span key={name} className="text-lg md:text-xl font-semibold text-tertiary whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-200">
                                        {name}
                                    </span>
                                ))}
                            </div>
                            <div className="flex w-auto max-w-none shrink-0 animate-marquee justify-center gap-8 pl-8 motion-reduce:animate-none md:gap-12 md:pl-12">
                                {aiStartups.map((name) => (
                                    <span key={`${name}-2`} className="text-lg md:text-xl font-semibold text-tertiary whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-200">
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div
            className={cx(
                "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[20.08px] md:p-0.5 md:shadow-modern-mockup-outer-lg md:ring-[1.25px] lg:absolute lg:w-auto lg:max-w-none",
                props.className,
            )}
        >
            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.57px] md:p-[3.5px] md:shadow-modern-mockup-inner-lg">
                <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-gray-200 md:rounded-[15.06px] md:ring-[1.25px]">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

const FeaturesAlternatingLayout01 = () => {
    const [showMore, setShowMore] = useState(false);

    const initialFeatures = [
        {
            label: "UNIFIED DASHBOARD",
            title: "See Every Dollar Across Every Provider",
            description: "Connect OpenAI, Anthropic, Google Vertex, Azure OpenAI, and AWS Bedrock in one click. Get a single source of truth for all your AI spending—no more logging into 5 different dashboards.",
            bullets: [
                "Real-time sync every 5 minutes",
                "Historical trends with forecasting",
                "Cost breakdown by provider, model, and team",
                "Custom date ranges and period comparisons",
            ],
            icon: PieChart01,
            imagePosition: "right" as const,
            imageLight: "/heroo-dark.png",
            imageDark: "/heroo-dark.png",
        },
        {
            label: "COST ATTRIBUTION",
            title: "Know Exactly Who's Spending What",
            description: "Tag every AI request with team, project, and feature using our lightweight SDK. Finally answer \"why is our bill so high?\" with data, not guesses. Generate chargeback reports automatically.",
            bullets: [
                "3-line SDK integration (Node.js, Python)",
                "Automatic cost center mapping",
                "Chargeback reports for finance teams",
                "Per-user tracking for SaaS unit economics",
            ],
            icon: Tag01,
            imagePosition: "left" as const,
            imageLight: "/cost-light.png",
            imageDark: "/cost-dark.png",
        },
        {
            label: "BUDGET CONTROLS",
            title: "Never Get Surprised by a Bill Again",
            description: "Set budgets per team, project, or API key. Get alerted at 50%, 80%, and 100% thresholds—before you exceed limits, not after. Optional hard limits can auto-disable keys when budgets are blown.",
            bullets: [
                "Budget limits with customizable thresholds",
                "Anomaly detection (\"spending 300% above normal\")",
                "Forecast alerts (\"you'll exceed budget by Tuesday\")",
                "Slack, Email, PagerDuty integration",
            ],
            icon: Bell01,
            imagePosition: "right" as const,
            imageLight: "/alert-light.png",
            imageDark: "/alert-dark.png",
        },
    ];

    const additionalFeatures = [
        {
            label: "OPTIMIZATION ENGINE",
            title: "AI That Reduces Your AI Costs",
            description: "Our optimization engine analyzes your usage patterns and finds savings opportunities you didn't know existed. Get actionable recommendations that can cut costs 10-30% without sacrificing quality.",
            bullets: [
                "Model downgrade suggestions (GPT-4 → GPT-4o-mini)",
                "Prompt efficiency analysis",
                "Caching opportunities detection",
                "Token waste identification",
            ],
            icon: MagicWand01,
            imagePosition: "left" as const,
            imageLight: "/optimization-light.png",
            imageDark: "/optimization-dark.png",
        },
        {
            label: "SMART ROUTING",
            title: "The Right Model for Every Request",
            description: "Why pay GPT-4 prices for \"What's the weather?\" Automatically route requests to cost-efficient models based on complexity. Simple queries go to cheap models. Complex ones get the power they need.",
            bullets: [
                "Automatic complexity detection",
                "Quality-aware routing rules",
                "Fallback routing when providers are down",
                "Save 30-50% on simple queries",
            ],
            icon: Route,
            imagePosition: "right" as const,
            imageLight: "/provider-light.png",
            imageDark: "/provider-dark.png",
        },
        {
            label: "SEMANTIC CACHING",
            title: "Stop Paying for the Same Answer Twice",
            description: "Intelligent caching that recognizes when you've asked similar questions before—and returns instant responses without calling the API. Perfect for FAQ-style queries and repeated patterns.",
            bullets: [
                "Semantic similarity matching (not just exact match)",
                "Configurable TTL per query type",
                "Cache hit rate analytics",
                "Zero latency for cached responses",
            ],
            icon: Database01,
            imagePosition: "left" as const,
            imageLight: "/usage-light.png",
            imageDark: "/usage-dark.png",
        },
    ];

    const displayedFeatures = showMore ? [...initialFeatures, ...additionalFeatures] : initialFeatures;

    return (
        <section id="features" className="flex flex-col gap-12 overflow-hidden bg-primary py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
            <FadeInUp className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <PopIn>
                        <Badge color="gray" type="pill-color" size="md">
                            Features
                        </Badge>
                    </PopIn>
                    <FadeInUp delay={0.1}>
                        <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">Everything You Need to Control AI Costs</h2>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            From real-time visibility to intelligent optimization, TokenTra gives you the tools to understand, control, and reduce your AI spending.
                        </p>
                    </FadeInUp>
                </div>
            </FadeInUp>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                {displayedFeatures.map((feature, index) => (
                    <div key={feature.label} className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                        {feature.imagePosition === "left" ? (
                            <FadeInRight className={cx("max-w-xl flex-1 self-center lg:order-last")} delay={0.1}>
                                <PopIn delay={0.1}>
                                    <FeaturedIcon icon={feature.icon} size="lg" color="brand" theme="light" />
                                </PopIn>
                                <FadeInUp delay={0.15}>
                                    <Badge color="gray" type="pill-color" size="sm" className="mt-4">
                                        {feature.label}
                                    </Badge>
                                </FadeInUp>
                                <FadeInUp delay={0.2}>
                                    <h2 className="mt-4 text-display-xs font-semibold text-primary md:text-display-sm">{feature.title}</h2>
                                </FadeInUp>
                                <FadeInUp delay={0.25}>
                                    <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                                        {feature.description}
                                    </p>
                                </FadeInUp>
                                <StaggerContainer delay={0.3} staggerDelay={0.08} className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                                    {feature.bullets.map((feat) => (
                                        <StaggerItem key={feat} variants={fadeInUp}>
                                            <CheckItemText size="md" iconStyle="outlined" color="primary" text={feat} />
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            </FadeInRight>
                        ) : (
                            <FadeInLeft className="max-w-xl flex-1 self-center" delay={0.1}>
                                <PopIn delay={0.1}>
                                    <FeaturedIcon icon={feature.icon} size="lg" color="brand" theme="light" />
                                </PopIn>
                                <FadeInUp delay={0.15}>
                                    <Badge color="gray" type="pill-color" size="sm" className="mt-4">
                                        {feature.label}
                                    </Badge>
                                </FadeInUp>
                                <FadeInUp delay={0.2}>
                                    <h2 className="mt-4 text-display-xs font-semibold text-primary md:text-display-sm">{feature.title}</h2>
                                </FadeInUp>
                                <FadeInUp delay={0.25}>
                                    <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                                        {feature.description}
                                    </p>
                                </FadeInUp>
                                <StaggerContainer delay={0.3} staggerDelay={0.08} className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                                    {feature.bullets.map((feat) => (
                                        <StaggerItem key={feat} variants={fadeInUp}>
                                            <CheckItemText size="md" iconStyle="outlined" color="primary" text={feat} />
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            </FadeInLeft>
                        )}

                        {feature.imagePosition === "left" ? (
                            <FadeInLeft className="relative w-full flex-1 lg:h-128">
                                <AlternateImageMockup className="lg:right-0">
                                    <img
                                        alt={`${feature.title} - TokenTra dashboard`}
                                        src={feature.imageLight}
                                        className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                                    />
                                    <img
                                        alt={`${feature.title} - TokenTra dashboard`}
                                        src={feature.imageDark}
                                        className="hidden size-full object-contain lg:w-auto lg:max-w-none dark:block"
                                    />
                                </AlternateImageMockup>
                            </FadeInLeft>
                        ) : (
                            <FadeInRight className="relative w-full flex-1 lg:h-128">
                                <AlternateImageMockup className="lg:left-0">
                                    <img
                                        alt={`${feature.title} - TokenTra dashboard`}
                                        src={feature.imageLight}
                                        className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                                    />
                                    <img
                                        alt={`${feature.title} - TokenTra dashboard`}
                                        src={feature.imageDark}
                                        className="hidden size-full object-contain lg:w-auto lg:max-w-none dark:block"
                                    />
                                </AlternateImageMockup>
                            </FadeInRight>
                        )}
                    </div>
                ))}
            </div>

            {!showMore && (
                <FadeInUp className="mx-auto">
                    <Button size="xl" color="secondary" onClick={() => setShowMore(true)}>
                        Show More Features
                    </Button>
                </FadeInUp>
            )}
        </section>
    );
};

const aiProviders = [
    { name: "OpenAI", models: "GPT-4, GPT-4o, o1, DALL-E", Icon: OpenAIDarkIcon },
    { name: "Anthropic", models: "Claude 3.5 Sonnet, Opus, Haiku", Icon: AnthropicDarkIcon },
    { name: "Google AI", models: "Gemini Pro, Gemini Flash", Icon: GoogleIcon },
    { name: "Azure OpenAI", models: "All OpenAI models via Azure", Icon: MicrosoftAzureIcon },
    { name: "AWS Bedrock", models: "Claude, Titan, Llama, Mistral", Icon: AWSDarkIcon },
    { name: "xAI (Grok)", models: "Grok-1, Grok-2", Icon: TwitterIcon },
    { name: "Hugging Face", models: "Open source models", Icon: HuggingFaceIcon },
    { name: "Vercel AI", models: "AI SDK", Icon: VercelDarkIcon },
    { name: "Supabase AI", models: "Vector, Embeddings", Icon: SupabaseIcon },
    { name: "Replicate", models: "Open models", Icon: ReplicateDarkIcon },
];

const notificationChannels = [
    { name: "Slack", Icon: SlackIcon },
    { name: "Email", Icon: GMailIcon },
    { name: "Linear", Icon: LinearDarkIcon },
    { name: "Webhooks", Icon: ResendDarkIcon },
];

const comingSoon = [
    { name: "Stability AI", Icon: StabilityAIIcon },
    { name: "Notion", Icon: NotionIcon },
    { name: "Posthog", Icon: PosthogDarkIcon },
];

const FeaturesIntegrationsIcons02 = () => {
    return (
        <section id="integrations" className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center gap-12 md:gap-16">
                    <FadeInUp className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <PopIn>
                            <Badge color="gray" type="pill-color" size="md">
                                Integrations
                            </Badge>
                        </PopIn>
                        <FadeInUp delay={0.1}>
                            <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">Works With Your Entire AI Stack</h2>
                        </FadeInUp>
                        <FadeInUp delay={0.2}>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                                Connect all your AI providers in minutes. One dashboard, no silos. TokenTra supports every major AI platform.
                            </p>
                        </FadeInUp>
                    </FadeInUp>

                    {/* AI Providers */}
                    <div className="w-full">
                        <FadeInUp>
                            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-tertiary mb-6">AI Providers</h3>
                        </FadeInUp>
                        <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
                            {aiProviders.map(({ name, models, Icon }, index) => (
                                <StaggerItem key={name} variants={fadeInUp}>
                                    <SpotlightCard>
                                        <TiltCard maxTilt={8}>
                                            <motion.div
                                                className="flex flex-col items-center gap-3 rounded-xl bg-primary p-6 shadow-xs ring-1 ring-secondary ring-inset transition-all duration-300 hover:shadow-lg hover:ring-purple-500/30"
                                                whileHover={{ scale: 1.03, y: -4 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            >
                                                <FloatingElement duration={3} distance={3} delay={index * 0.2}>
                                                    <Icon className="size-12" />
                                                </FloatingElement>
                                                <div className="text-center">
                                                    <p className="font-semibold text-primary">{name}</p>
                                                    <p className="text-xs text-tertiary mt-1">{models}</p>
                                                </div>
                                            </motion.div>
                                        </TiltCard>
                                    </SpotlightCard>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Notification Channels */}
                    <div className="w-full">
                        <FadeInUp>
                            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-tertiary mb-6">Notification Channels</h3>
                        </FadeInUp>
                        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6 max-w-3xl mx-auto">
                            {notificationChannels.map(({ name, Icon }) => (
                                <StaggerItem key={name} variants={fadeInUp}>
                                    <HoverLift lift={-6}>
                                        <motion.div
                                            className="flex flex-col items-center gap-3 rounded-xl bg-primary p-6 shadow-xs ring-1 ring-secondary ring-inset transition-shadow duration-200 hover:shadow-md"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Icon className="size-10" />
                                            <p className="font-semibold text-primary">{name}</p>
                                        </motion.div>
                                    </HoverLift>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Coming Soon */}
                    <div className="w-full">
                        <FadeInUp>
                            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-tertiary mb-6">Coming Soon</h3>
                        </FadeInUp>
                        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-3 gap-4 lg:gap-6 max-w-xl mx-auto">
                            {comingSoon.map(({ name, Icon }) => (
                                <StaggerItem key={name} variants={fadeInUp}>
                                    <div className="flex flex-col items-center gap-3 rounded-xl bg-primary/50 p-5 ring-1 ring-secondary ring-inset opacity-60">
                                        <Icon className="size-8 grayscale" />
                                        <p className="font-medium text-tertiary text-sm">{name}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MetricsSimpleCenteredText = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="flex w-full flex-col items-center self-center text-center md:max-w-3xl">
                        <FeaturedIcon icon={ZapFast} color="brand" theme="light" size="xl" />
                        <h2 className="mt-4 text-display-sm font-semibold text-primary md:mt-6 md:text-display-md">Unleash the full power of data</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Everything you need to convert, engage, and retain more users.</p>
                    </div>
                    <dl className="flex w-full flex-col justify-center gap-8 md:max-w-3xl md:flex-row md:gap-4 md:self-center">
                        {[
                            { title: "400+", subtitle: "Projects completed" },
                            { title: "600%", subtitle: "Return on investment" },
                            { title: "10k", subtitle: "Global downloads" },
                        ].map((item, index) => (
                            <Fragment key={item.title}>
                                {index !== 0 && <div className="hidden border-l border-secondary md:block" />}
                                <div className="flex flex-1 flex-col-reverse gap-3 text-center">
                                    <dt className="text-lg font-semibold text-primary">{item.subtitle}</dt>
                                    <dd className="text-display-lg font-semibold text-brand-tertiary_alt md:text-display-xl">{item.title}</dd>
                                </div>
                            </Fragment>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

const CTACardHorizontal = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <ScaleIn>
                    <div className="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-secondary px-6 py-10 lg:flex-row lg:p-16">
                        <FadeInLeft className="flex max-w-3xl flex-1 flex-col">
                            <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                                <span className="hidden md:inline">Start for Free Today</span>
                                <span className="md:hidden">Start for Free</span>
                            </h2>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">Join 100+ startups already growing with TokenTra.</p>
                        </FadeInLeft>
                        <FadeInRight delay={0.2} className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                            <Button color="secondary" size="xl" href="#features">
                                Learn more
                            </Button>
                            <a 
                                href="https://app.tokentra.io"
                                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get started
                            </a>
                        </FadeInRight>
                    </div>
                </ScaleIn>
            </div>
        </section>
    );
};

const reviews = [
    {
        id: "review-01",
        company: "3Portals",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/3portals.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/3portals.svg",
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        author: { name: "Kelly Williams", role: "Head of Design", avatarUrl: "https://www.untitledui.com/images/avatars/kelly-williams?fm=webp&q=80" },
    },
    {
        id: "review-02",
        company: "Warpspeed",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/warpspeed.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/warpspeed.svg",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: { name: "Candice Wu", role: "Product Manager", avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80" },
    },
    {
        id: "review-03",
        company: "GlobalBank",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/globalbank.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/globalbank.svg",
        quote: "Untitled has saved us thousands of hours of work and has unlock data insights we never thought possible.",
        author: { name: "Ammar Foley", role: "UX Designer", avatarUrl: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80" },
    },
    {
        id: "review-04",
        company: "Ikigai Labs",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/ikigailabs.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/ikigailabs.svg",
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        author: { name: "Olivia Rhye", role: "Head of Product", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
    },
    {
        id: "review-05",
        company: "Eightball",
        companyLogoUrl: "https://www.untitledui.com/logos/logotype/color/eightball.svg",
        companyLogoUrlDark: "https://www.untitledui.com/logos/logotype/white/eightball.svg",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: { name: "Alisa Hester", role: "Head of Product", avatarUrl: "https://www.untitledui.com/images/avatars/alisa-hester?fm=webp&q=80" },
    },
];

const TestimonialSimpleCentered03 = () => {
    const [selectedReviewIndex, setSelectedReviewIndex] = useState(2);

    return (
        <Tabs
            selectedKey={reviews[selectedReviewIndex].id}
            onSelectionChange={(value) => setSelectedReviewIndex(reviews.findIndex((review) => review.id === value))}
        >
            <section className="bg-secondary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col items-center gap-10 md:gap-12">
                        <Collection items={reviews}>
                            {(review) => (
                                <TabPanel className="flex flex-col gap-8 text-center">
                                    <blockquote className="text-display-sm font-medium text-balance text-primary md:text-display-md lg:text-display-lg">
                                        {review.quote}
                                    </blockquote>
                                    <figcaption className="flex justify-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <Avatar src={review.author.avatarUrl} alt={review.author.name} size="2xl" />
                                            <div className="flex flex-col gap-1">
                                                <p className="text-lg font-semibold text-primary">{review.author.name}</p>
                                                <cite className="text-md text-tertiary not-italic">
                                                    {review.author.role}, {review.company}
                                                </cite>
                                            </div>
                                        </div>
                                    </figcaption>
                                </TabPanel>
                            )}
                        </Collection>

                        <TabList className="hidden grid-cols-5 justify-items-center gap-8 md:grid" items={reviews}>
                            {(review) => (
                                <Tab>
                                    <img src={review.companyLogoUrl} className="h-12 dark:hidden" alt={review.company} />
                                    <img src={review.companyLogoUrlDark} className="h-12 opacity-85 not-dark:hidden" alt={review.company} />
                                </Tab>
                            )}
                        </TabList>

                        <div className="flex w-full items-center justify-between md:hidden">
                            <Button
                                aria-label="See previous review"
                                color="link-color"
                                className="text-quaternary md:hidden"
                                onClick={() => {
                                    setSelectedReviewIndex(selectedReviewIndex == 0 ? reviews.length - 1 : selectedReviewIndex - 1);
                                }}
                            >
                                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                                    <path
                                        d="M36.8055 9.99989H3.19434M3.19434 9.99989L9.99989 16.8054M3.19434 9.99989L9.99989 3.19434"
                                        stroke="currentColor"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>

                            <img src={reviews[selectedReviewIndex].companyLogoUrl} className="h-10 object-contain" alt={reviews[selectedReviewIndex].company} />

                            <Button
                                aria-label="See next review"
                                className="md:hidden"
                                color="link-color"
                                onClick={() => {
                                    setSelectedReviewIndex(selectedReviewIndex == reviews.length - 1 ? 0 : selectedReviewIndex + 1);
                                }}
                            >
                                <svg aria-hidden="true" className="h-5 w-10 rotate-180 text-quaternary" viewBox="0 0 40 20" fill="none">
                                    <path
                                        d="M36.8055 9.99989H3.19434M3.19434 9.99989L9.99989 16.8054M3.19434 9.99989L9.99989 3.19434"
                                        stroke="currentColor"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Tabs>
    );
};

const CheckItemText = (props: {
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    color?: "primary" | "success";
    iconStyle?: "outlined" | "contained" | "filled";
    textClassName?: string;
}) => {
    const { text, color, size, iconStyle = "contained" } = props;

    return (
        <li className="flex gap-3">
            {iconStyle === "contained" && (
                <div
                    className={cx(
                        "flex shrink-0 items-center justify-center rounded-full",
                        color === "success" ? "bg-success-secondary text-featured-icon-light-fg-success" : "bg-brand-primary text-featured-icon-light-fg-brand",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                >
                    <svg
                        width={size === "lg" ? 16 : size === "md" ? 15 : 13}
                        height={size === "lg" ? 14 : size === "md" ? 13 : 11}
                        viewBox="0 0 13 11"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            )}

            {iconStyle === "filled" && (
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-solid text-white">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1.5 4L4.5 7L10.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}

            {iconStyle === "outlined" && (
                <CheckCircle
                    className={cx(
                        "shrink-0",
                        color === "success" ? "text-fg-success-primary" : "text-fg-brand-primary",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                />
            )}

            <span
                className={cx(
                    "text-tertiary",
                    size === "lg" ? "pt-0.5 text-lg md:pt-0" : size === "md" ? "pt-0.5 text-md md:pt-0 md:text-lg" : "text-md",
                    iconStyle === "filled" && "text-brand-secondary",
                    props.textClassName,
                )}
            >
                {text}
            </span>
        </li>
    );
};

const CTAScreenMockup01 = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-4 md:px-8 lg:grid-cols-2">
                <FadeInLeft className="flex w-full max-w-3xl flex-col">
                    <FadeInUp>
                        <h1 className="text-display-sm font-semibold text-primary md:text-display-lg">Join 100+ startups growing with TokenTra</h1>
                    </FadeInUp>
                    <StaggerContainer delay={0.2} staggerDelay={0.1} className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                        {["Free account forever", "No credit card required", "Full dashboard access"].map((feat) => (
                            <StaggerItem key={feat} variants={fadeInUp}>
                                <CheckItemText size="md" iconStyle="outlined" color="primary" text={feat} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                    <FadeInUp delay={0.4} className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                        <Button color="secondary" size="xl" href="#features">
                            Learn more
                        </Button>
                        <a 
                            href="https://app.tokentra.io"
                            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Get started
                        </a>
                    </FadeInUp>
                </FadeInLeft>

                <FadeInRight className="relative mx-auto w-full lg:h-128">
                    <Hero3DImage delay={0.2}>
                        <div className="top-0 left-0 w-full max-w-5xl rounded-[9.03px] bg-primary p-[0.9px] shadow-lg ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px] lg:absolute lg:w-max">
                            <div className="rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg">
                                <div className="relative overflow-hidden rounded-[6.77px] bg-utility-gray-50 ring-[0.56px] ring-utility-gray-200 md:rounded-[20.21px] md:ring-[1.68px]">
                                    <img
                                        alt="TokenTra dashboard showing AI cost analytics"
                                        src="/heroo-dark.png"
                                        className="object-cover object-left-top dark:hidden"
                                    />
                                    <img
                                        alt="TokenTra dashboard showing AI cost analytics"
                                        src="/heroo-dark.png"
                                        className="hidden object-cover object-left-top dark:block"
                                    />
                                </div>
                            </div>
                        </div>
                    </Hero3DImage>
                </FadeInRight>
            </div>
        </section>
    );
};

const FooterLarge02 = () => {
    return (
        <footer className="dark-mode">
            <div className="bg-primary py-12 md:pt-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                        <div className="flex flex-col items-start gap-6 md:w-80 md:gap-6">
                            <UntitledLogo className="h-8 w-min shrink-0" />
                            <p className="text-md text-tertiary">Track, optimize, and control your AI spend across all providers. One dashboard, complete visibility.</p>
                        </div>
                        <nav className="flex-1">
                            <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
                                {footerNavList.slice(0, 5).map((category) => (
                                    <li key={category.label}>
                                        <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                        <ul className="mt-4 flex flex-col gap-3">
                                            {category.items.map((item) => (
                                                <li key={item.label}>
                                                    <Button color="link-gray" size="lg" href={item.href} className="gap-1">
                                                        {item.label}
                                                    </Button>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-secondary_alt py-10 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
                        <p className="text-md text-quaternary">© 2026 TokenTra. All rights reserved.</p>
                        <p className="text-md text-quaternary text-center">
                            TokenTra a <a href="https://nidrosoft.com" target="_blank" rel="noopener noreferrer" className="text-fg-quaternary hover:text-fg-quaternary_hover underline">Nidrosoft</a> Company. Built with ❤️ in San Diego, CA.
                        </p>
                        <ul className="flex gap-6">
                            {footerSocials.map(({ label, icon: Icon, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        <Icon size={24} aria-label={label} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const LandingPage02 = () => {
    return (
        <div className="bg-primary">
            <HeroScreenMockup01 />

            <SectionDivider className="max-md:hidden" />

            <SocialProofFullWidthMasked />

            <ProblemStatementSection />

            <FeaturesTabsMockup01 />

            <SectionDivider />

            <FeaturesAlternatingLayout01 />

            <HowItWorksSection />

            <SDKShowcaseSection />

            <FeaturesIntegrationsIcons02 />

            <PricingSection />

            <TestimonialSocialCards03 />

            <MetricsSimpleCenteredTextBrand />

            <CTACardHorizontal />

            <CTAScreenMockup01 />

            <FooterLarge02 />
        </div>
    );
};

export default LandingPage02;
