"use client";

import { Badge } from "@/components/base/badges/badges";
import { Header } from "@/components/marketing/header-navigation/header";
import { Button } from "@/components/base/buttons/button";

const changelogEntries = [
    {
        date: "January 1, 2026",
        title: "GPT-5 & Claude Opus 4.5 Support",
        description: "Full support for the latest flagship models from OpenAI and Anthropic, including GPT-5, GPT-5.1, GPT-5 Pro, and Claude Opus 4.5.",
        features: [
            "Complete cost tracking for GPT-5 family (GPT-5, GPT-5.1, GPT-5 Pro)",
            "Claude Opus 4.5 and Claude Sonnet 4 integration",
            "Updated pricing models for new tiers",
            "Enhanced token counting for extended context windows",
            "Automatic model version detection",
        ],
        highlight: "Stay ahead with day-one support for the latest AI models.",
        type: "feature",
    },
    {
        date: "December 28, 2025",
        title: "Gemini 3 Integration",
        description: "Full support for Google's Gemini 3 family including Pro, Flash, and Ultra variants.",
        features: [
            "Gemini 3 Pro, Flash, and Ultra model tracking",
            "Updated Vertex AI cost calculations",
            "Multimodal usage tracking for Gemini 3",
            "Enhanced BigQuery export integration",
        ],
        type: "integration",
    },
    {
        date: "December 15, 2025",
        title: "Advanced Cost Forecasting v2",
        description: "Our most accurate forecasting engine yet, powered by transformer-based time series models.",
        features: [
            "95% accuracy on 30-day forecasts",
            "Automatic seasonality and trend detection",
            "Per-team and per-project forecasts",
            "Confidence intervals with Monte Carlo simulation",
            "Slack and email forecast digests",
        ],
        highlight: "Customers report 40% fewer budget surprises with our new forecasting.",
        type: "feature",
    },
    {
        date: "December 1, 2025",
        title: "o3 Reasoning Model Support",
        description: "Full support for OpenAI's o3 and o3-mini advanced reasoning models.",
        features: [
            "o3 and o3-mini cost tracking",
            "Reasoning token accounting",
            "Extended thinking time cost attribution",
            "Comparison analytics vs standard models",
        ],
        type: "feature",
    },
    {
        date: "November 20, 2025",
        title: "Enterprise SSO & SCIM",
        description: "Enterprise-grade identity management for large organizations.",
        features: [
            "SAML 2.0 and OIDC single sign-on",
            "SCIM 2.0 user provisioning",
            "Okta, Azure AD, and Google Workspace integration",
            "Just-in-time user provisioning",
            "Group-based role mapping",
        ],
        type: "feature",
    },
    {
        date: "November 10, 2025",
        title: "Smart Model Routing GA",
        description: "Smart Model Routing is now generally available after successful beta with 500+ teams.",
        features: [
            "Automatic complexity detection for incoming requests",
            "Configurable routing rules based on cost/quality tradeoffs",
            "A/B testing framework to validate quality isn't degraded",
            "Fallback routing when primary providers are down",
            "Real-time routing analytics dashboard",
        ],
        highlight: "Teams using Smart Routing see 30-50% savings on routine queries.",
        type: "feature",
    },
    {
        date: "October 25, 2025",
        title: "AWS Bedrock Integration v2",
        description: "Enhanced AWS Bedrock support with Llama 3 and Mistral Large 2.",
        features: [
            "Llama 3.2 and Llama 3.1 model support",
            "Mistral Large 2 integration",
            "Amazon Titan v2 tracking",
            "Cross-region cost aggregation",
            "Reserved capacity cost tracking",
        ],
        type: "integration",
    },
    {
        date: "October 10, 2025",
        title: "Semantic Caching GA",
        description: "Semantic caching is now generally available with 99.9% uptime SLA.",
        features: [
            "Semantic similarity matching (not just exact match)",
            "Configurable TTL per query type",
            "Cache hit rate analytics",
            "Zero latency for cached responses",
            "Automatic invalidation options",
        ],
        highlight: "Customers see 15-25% cost reduction on FAQ-style and repetitive queries.",
        type: "feature",
    },
    {
        date: "September 15, 2025",
        title: "Python SDK v2.0",
        description: "Major update to the Python SDK with async-first architecture.",
        features: [
            "Native async/await throughout",
            "GPT-5 and Claude Opus 4.5 support",
            "LangChain and LlamaIndex integrations",
            "Automatic retry with exponential backoff",
            "Structured logging with OpenTelemetry",
        ],
        type: "sdk",
    },
    {
        date: "August 20, 2025",
        title: "Budget Forecasting",
        description: "Know when you'll exceed your budget before it happens.",
        features: [
            "Holt-Winters forecasting with seasonality awareness",
            '"You\'ll exceed budget by Tuesday" predictive alerts',
            "Confidence intervals on projections",
            "Weekly and monthly forecast reports",
        ],
        type: "feature",
    },
    {
        date: "July 15, 2025",
        title: "Anomaly Detection Engine",
        description: "ML-powered anomaly detection catches unusual spending patterns automatically.",
        features: [
            "Spending spikes (Z-score > 3)",
            "Unusual model usage patterns",
            "Off-hours activity detection",
            "New cost centers appearing",
            "Rapid growth detection",
        ],
        highlight: "We analyze your historical patterns and alert you when something looks unusual—before it becomes a $10K surprise.",
        type: "feature",
    },
    {
        date: "June 1, 2025",
        title: "Google Vertex AI Integration",
        description: "Full support for Google Cloud's Vertex AI platform.",
        features: [
            "Gemini 2 Pro & Gemini 2 Flash",
            "PaLM 2 (legacy)",
            "Imagen 2",
            "Embeddings",
        ],
        type: "integration",
    },
    {
        date: "May 15, 2025",
        title: "Team Workspaces",
        description: "Organize your AI spending by team with dedicated workspaces.",
        features: [
            "Separate dashboards per team",
            "Team-specific budgets and alerts",
            "Role-based access control",
            "Cross-team comparison views",
        ],
        type: "feature",
    },
    {
        date: "April 1, 2025",
        title: "Slack Integration",
        description: "Get alerts where your team already works.",
        features: [
            "Real-time alert notifications",
            "Weekly digest summaries",
            "Slash commands for quick lookups",
            "Interactive budget approvals",
        ],
        type: "integration",
    },
    {
        date: "March 1, 2025",
        title: "Node.js SDK v1.0",
        description: "The official TokenTra Node.js SDK is now generally available.",
        features: [
            "Zero-latency wrapper for OpenAI, Anthropic, Google, Azure",
            "Automatic token counting and cost calculation",
            "Custom attribution tags",
            "TypeScript support",
            "Batch telemetry (non-blocking)",
        ],
        type: "sdk",
    },
    {
        date: "February 1, 2025",
        title: "Azure OpenAI Integration",
        description: "Connect your Azure OpenAI deployments to TokenTra.",
        features: [
            "Service principal authentication",
            "Cost data via Azure Cost Management API",
            "Usage metrics via Azure Monitor",
            "Per-deployment breakdown",
        ],
        type: "integration",
    },
    {
        date: "January 15, 2025",
        title: "Cost Attribution",
        description: "Finally know who's spending what.",
        features: [
            "Attribution by Team, Project, Feature, User, and Custom tags",
            "Chargeback reports for finance",
            "Per-user unit economics",
            "Feature cost analysis",
        ],
        type: "feature",
    },
    {
        date: "January 1, 2025",
        title: "TokenTra Launch 🚀",
        description: "We're live! TokenTra launches with support for OpenAI and Anthropic.",
        features: [
            "Unified cost dashboard",
            "Real-time sync (5-minute refresh)",
            "Historical trends and comparison",
            "Budget limits and alerts",
            "Email notifications",
            "CSV export",
        ],
        type: "launch",
    },
];

const getTypeBadge = (type: string) => {
    switch (type) {
        case "feature":
            return <Badge color="brand" type="pill-color" size="sm">New Feature</Badge>;
        case "integration":
            return <Badge color="success" type="pill-color" size="sm">Integration</Badge>;
        case "sdk":
            return <Badge color="blue" type="pill-color" size="sm">SDK</Badge>;
        case "launch":
            return <Badge color="warning" type="pill-color" size="sm">Launch</Badge>;
        default:
            return <Badge color="gray" type="pill-color" size="sm">Update</Badge>;
    }
};

export default function ChangelogPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Header />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex justify-center">
                            <Badge color="brand" type="pill-color" size="md">
                                Changelog
                            </Badge>
                        </div>
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg">
                            What's New in TokenTra
                        </h1>
                        <p className="mt-6 text-xl text-tertiary">
                            Stay up to date with the latest improvements, new features, and integrations. We ship fast and often.
                        </p>
                    </div>
                </div>
            </section>

            {/* Changelog Entries */}
            <section className="pb-16 md:pb-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-secondary ml-4 md:ml-6" />
                            
                            <div className="space-y-12">
                                {changelogEntries.map((entry, index) => (
                                    <div key={index} className="relative pl-12 md:pl-16">
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 w-9 h-9 md:w-12 md:h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center border-4 border-primary">
                                            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-600" />
                                        </div>
                                        
                                        <div className="bg-secondary rounded-xl p-6 border border-secondary">
                                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                                <span className="text-sm text-tertiary">{entry.date}</span>
                                                {getTypeBadge(entry.type)}
                                            </div>
                                            
                                            <h3 className="text-xl font-semibold text-primary">{entry.title}</h3>
                                            <p className="mt-2 text-tertiary">{entry.description}</p>
                                            
                                            <ul className="mt-4 space-y-2">
                                                {entry.features.map((feature, i) => (
                                                    <li key={i} className="text-sm text-tertiary flex items-start gap-2">
                                                        <span className="text-purple-600 mt-1">•</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            
                                            {entry.highlight && (
                                                <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                                    <p className="text-sm text-purple-700 dark:text-purple-300">
                                                        <strong>Results:</strong> {entry.highlight}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscribe CTA */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="mx-auto max-w-container px-4 md:px-8 text-center">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Subscribe to Updates
                    </h2>
                    <p className="mt-4 text-lg text-tertiary max-w-xl mx-auto">
                        Get notified when we ship new features. No spam, just product updates.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border border-secondary bg-primary text-primary focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <Button size="lg">Subscribe</Button>
                    </div>
                    <p className="mt-4 text-sm text-tertiary">
                        Or follow us on <a href="https://x.com/zehcyriac" className="text-purple-600 hover:text-purple-700">Twitter/X</a> for the latest updates.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-8">
                <div className="mx-auto max-w-container px-4 md:px-8 text-center">
                    <p className="text-gray-400">© 2026 TokenTra. All rights reserved.</p>
                    <p className="mt-2 text-gray-500">
                        TokenTra a <a href="https://nidrosoft.com" className="underline hover:text-gray-300">Nidrosoft</a> Company. Built with ❤️ in San Diego, CA.
                    </p>
                </div>
            </footer>
        </div>
    );
}
