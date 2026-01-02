"use client";

import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { Header } from "@/components/marketing/header-navigation/header";
import { CheckCircle, Clock, Link01 } from "@untitledui/icons";

const aiProviders = [
    {
        name: "OpenAI",
        status: "available",
        description: "Connect your OpenAI organization to track costs across all models including GPT-5, o3, DALL-E 4, Whisper, and Embeddings.",
        models: ["GPT-5, GPT-5.1, GPT-5 Pro", "o3, o3-mini (advanced reasoning models)", "GPT-4o, GPT-4o-mini (legacy)", "DALL-E 4", "Whisper v3 (speech-to-text)", "TTS HD (text-to-speech)", "text-embedding-4-small, text-embedding-4-large"],
        auth: "Admin API Key (read-only access to usage data)",
        setupTime: "~1 minute",
        dataAvailable: ["Token usage by model and date", "Cost in USD", "Request counts", "1-minute granularity"],
    },
    {
        name: "Anthropic",
        status: "available",
        description: "Track your Claude usage and costs across all model variants including the latest Claude Opus 4.5.",
        models: ["Claude Opus 4.5 (flagship)", "Claude Sonnet 4", "Claude Haiku 4", "Claude 3.5 Sonnet (legacy)", "Claude 3.5 Haiku (legacy)"],
        auth: "Admin API Key (sk-ant-admin-...)",
        setupTime: "~1 minute",
        dataAvailable: ["Input/output tokens", "Cached tokens and cache creation tokens", "Cost breakdown by model and workspace", "1-minute, 1-hour, or 1-day granularity"],
    },
    {
        name: "Google Vertex AI",
        status: "available",
        description: "Connect your Google Cloud Vertex AI usage for Gemini 3 and other models.",
        models: ["Gemini 3 Pro, Gemini 3 Flash, Gemini 3 Ultra", "Gemini 2 Pro Vision (legacy)", "Imagen 3 (image generation)", "Embeddings v2"],
        auth: "Service account with BigQuery billing export access",
        setupTime: "~5 minutes",
        dataAvailable: ["Token usage via BigQuery export", "Cost via Cloud Billing API", "Per-model breakdown"],
    },
    {
        name: "Azure OpenAI",
        status: "available",
        description: "Connect your Azure OpenAI deployments to TokenTra with full support for GPT-5 and o3 models.",
        models: ["GPT-5, GPT-5.1, GPT-5 Pro via Azure", "o3, o3-mini via Azure", "GPT-4o (legacy)", "DALL-E 4", "Embeddings v4"],
        auth: "Service principal authentication",
        setupTime: "~5 minutes",
        dataAvailable: ["Cost data via Azure Cost Management API", "Usage metrics via Azure Monitor", "Per-deployment breakdown"],
    },
    {
        name: "AWS Bedrock",
        status: "available",
        description: "Full support for AWS Bedrock as a first-class provider with all major foundation models.",
        models: ["Claude Opus 4.5, Claude Sonnet 4 (via Bedrock)", "Amazon Titan v2", "Llama 3.2, Llama 3.1", "Mistral Large 2", "Stable Diffusion 3"],
        auth: "IAM role-based authentication (cross-account)",
        setupTime: "~5 minutes",
        dataAvailable: ["Full cost and usage sync via AWS Cost Explorer API", "Unified dashboard view alongside other providers"],
    },
];

const notificationChannels = [
    {
        name: "Slack",
        status: "available",
        description: "Get alerts where your team already works.",
        features: ["Real-time alert notifications", "Weekly digest summaries", "Slash commands for quick lookups", "Interactive budget approvals"],
    },
    {
        name: "Email",
        status: "available",
        description: "Receive alerts and reports directly in your inbox.",
        features: ["Instant alert notifications", "Daily/weekly digest options", "PDF report attachments", "Customizable templates"],
    },
    {
        name: "PagerDuty",
        status: "available",
        description: "Integrate with your incident management workflow.",
        features: ["Critical alert escalation", "On-call routing", "Incident creation", "Auto-resolve on budget recovery"],
    },
    {
        name: "Webhooks",
        status: "available",
        description: "Send alerts to any endpoint for custom integrations.",
        features: ["JSON payload delivery", "Retry logic with exponential backoff", "HMAC signature verification", "Custom headers support"],
    },
];

const comingSoon = [
    { name: "Microsoft Teams", description: "Native Teams integration for alerts and reports" },
    { name: "Datadog", description: "Send metrics to Datadog for unified observability" },
    { name: "Jira", description: "Create tickets automatically for budget overruns" },
    { name: "Linear", description: "Track cost optimization tasks in Linear" },
];

export default function IntegrationsPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Header />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex justify-center">
                            <Badge color="brand" type="pill-color" size="md">
                                Integrations
                            </Badge>
                        </div>
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg">
                            Connect Your Entire AI Stack
                        </h1>
                        <p className="mt-6 text-xl text-tertiary">
                            TokenTra integrates with all major AI providers and notification channels. Connect in minutes, get visibility instantly.
                        </p>
                    </div>
                </div>
            </section>

            {/* AI Providers */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                            AI Providers
                        </h2>
                        <p className="mt-4 text-lg text-tertiary">
                            Connect all your AI providers for unified cost visibility
                        </p>
                    </div>

                    <div className="space-y-8">
                        {aiProviders.map((provider, index) => (
                            <div key={index} className="bg-primary rounded-xl p-6 md:p-8 border border-secondary">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl font-semibold text-primary">{provider.name}</h3>
                                            <Badge color="success" type="pill-color" size="sm">Available</Badge>
                                        </div>
                                        <p className="mt-2 text-tertiary">{provider.description}</p>
                                        
                                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">Supported Models</h4>
                                                <ul className="mt-2 space-y-1">
                                                    {provider.models.map((model, i) => (
                                                        <li key={i} className="text-sm text-tertiary flex items-start gap-2">
                                                            <CheckCircle className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                            {model}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">Data Available</h4>
                                                <ul className="mt-2 space-y-1">
                                                    {provider.dataAvailable.map((data, i) => (
                                                        <li key={i} className="text-sm text-tertiary flex items-start gap-2">
                                                            <CheckCircle className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                            {data}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex flex-wrap gap-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Link01 className="size-4 text-tertiary" />
                                                <span className="text-tertiary"><strong>Auth:</strong> {provider.auth}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="size-4 text-tertiary" />
                                                <span className="text-tertiary"><strong>Setup:</strong> {provider.setupTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notification Channels */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                            Notification Channels
                        </h2>
                        <p className="mt-4 text-lg text-tertiary">
                            Get alerts where your team works
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {notificationChannels.map((channel, index) => (
                            <div key={index} className="bg-secondary rounded-xl p-6 border border-secondary">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-lg font-semibold text-primary">{channel.name}</h3>
                                    <Badge color="success" type="pill-color" size="sm">Available</Badge>
                                </div>
                                <p className="mt-2 text-sm text-tertiary">{channel.description}</p>
                                <ul className="mt-4 space-y-2">
                                    {channel.features.map((feature, i) => (
                                        <li key={i} className="text-sm text-tertiary flex items-center gap-2">
                                            <CheckCircle className="size-4 text-green-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                            Coming Soon
                        </h2>
                        <p className="mt-4 text-lg text-tertiary">
                            More integrations on the way
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {comingSoon.map((item, index) => (
                            <div key={index} className="bg-primary rounded-xl p-6 border border-secondary opacity-75">
                                <h3 className="font-semibold text-primary">{item.name}</h3>
                                <p className="mt-2 text-sm text-tertiary">{item.description}</p>
                                <Badge color="gray" type="pill-color" size="sm" className="mt-4">Coming Soon</Badge>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-purple-900">
                <div className="mx-auto max-w-container px-4 md:px-8 text-center">
                    <h2 className="text-display-sm font-semibold text-white md:text-display-md">
                        Ready to Connect Your Providers?
                    </h2>
                    <p className="mt-4 text-lg text-purple-100 max-w-2xl mx-auto">
                        Get started in minutes. Connect your first provider and see your AI costs instantly.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://app.tokentra.io">
                            <Button size="xl" className="bg-white text-purple-600 hover:bg-purple-50">
                                Start for Free
                            </Button>
                        </a>
                        <a href="https://app.tokentra.io">
                            <Button size="xl" className="border-white text-white hover:bg-purple-700">
                                Log In
                            </Button>
                        </a>
                    </div>
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
