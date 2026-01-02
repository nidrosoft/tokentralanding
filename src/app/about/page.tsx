"use client";

import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { Header } from "@/components/marketing/header-navigation/header";
import { CheckCircle, Users01, Target01, Lightbulb01, TrendUp01 } from "@untitledui/icons";

const values = [
    {
        icon: Target01,
        title: "Visibility First",
        description: "You can't optimize what you can't see. We start with complete, real-time visibility across every provider, model, team, and feature."
    },
    {
        icon: TrendUp01,
        title: "AI Should Pay for Itself",
        description: "Every AI feature should have clear unit economics. If you don't know the cost per user or cost per transaction, you're flying blind."
    },
    {
        icon: Users01,
        title: "Developers Need Feedback",
        description: "The person writing the code should know the cost implications. That's why we built our SDK to make cost attribution effortless."
    },
    {
        icon: Lightbulb01,
        title: "Optimization Should Be Automatic",
        description: "Finding savings shouldn't require a PhD in prompt engineering. Our AI analyzes your usage and surfaces actionable recommendations."
    },
];

const pillars = [
    {
        title: "Unified Dashboard",
        description: "One place to see all AI spending—across OpenAI, Anthropic, Google Vertex, Azure OpenAI, and AWS Bedrock."
    },
    {
        title: "Cost Attribution",
        description: "Know exactly who's spending what. Track costs by team, project, feature, and user with our lightweight SDK."
    },
    {
        title: "Budget Controls",
        description: "Set spending limits and get alerted before you exceed them—not after. Anomaly detection catches unusual patterns automatically."
    },
    {
        title: "Optimization Engine",
        description: "AI-powered recommendations to reduce spend 10-30%. Smart routing sends queries to cost-efficient models. Semantic caching eliminates redundant calls."
    },
];

export default function AboutPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Header />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex justify-center">
                            <Badge color="brand" type="pill-color" size="md">
                                About TokenTra
                            </Badge>
                        </div>
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg">
                            Making AI Costs Visible, Predictable, and Optimizable
                        </h1>
                        <p className="mt-6 text-xl text-tertiary">
                            TokenTra is the AI cost intelligence platform that helps companies take control of their AI spending. We believe every company deserves complete visibility into where their AI dollars go.
                        </p>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md text-center">
                            The Problem We Solve
                        </h2>
                        <p className="mt-6 text-lg text-tertiary text-center">
                            AI costs are the new cloud costs—growing faster than any other line item, spread across multiple providers, and completely opaque.
                        </p>
                        
                        <div className="mt-12 space-y-4">
                            {[
                                "Companies use 3-5 AI providers simultaneously (OpenAI, Anthropic, Google, Azure, AWS)",
                                "Finance teams can't attribute costs to teams, projects, or features",
                                "Developers write code with zero feedback on cost implications",
                                "Nobody knows which prompts are wasteful or which models are overkill",
                                "Bill shock hits at the end of every month"
                            ].map((problem, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                        <span className="text-red-600 text-sm font-bold">!</span>
                                    </div>
                                    <p className="text-md text-primary">{problem}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-purple-600 to-purple-900 text-white">
                            <h3 className="text-xl font-semibold">What We Do About It</h3>
                            <p className="mt-3 text-purple-100">
                                TokenTra connects to all your AI providers and gives you a single dashboard with complete visibility. We show you where every dollar goes, alert you before budgets are exceeded, and use AI to find optimization opportunities you didn't know existed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                            What We Believe
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {values.map((value, index) => (
                            <div key={index} className="p-6 rounded-xl bg-secondary">
                                <value.icon className="size-10 text-purple-600" />
                                <h3 className="mt-4 text-lg font-semibold text-primary">{value.title}</h3>
                                <p className="mt-2 text-md text-tertiary">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Pillars */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                            Our Platform
                        </h2>
                        <p className="mt-4 text-lg text-tertiary">
                            TokenTra is built on four pillars
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="p-6 rounded-xl bg-primary border border-secondary">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                                    {index + 1}
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-primary">{pillar.title}</h3>
                                <p className="mt-2 text-sm text-tertiary">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Facts */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                            Company Facts
                        </h2>
                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <p className="text-display-sm font-bold text-purple-600">2024</p>
                                <p className="mt-2 text-sm text-tertiary">Founded</p>
                            </div>
                            <div>
                                <p className="text-display-sm font-bold text-purple-600">San Diego</p>
                                <p className="mt-2 text-sm text-tertiary">Headquarters</p>
                            </div>
                            <div>
                                <p className="text-display-sm font-bold text-purple-600">100+</p>
                                <p className="mt-2 text-sm text-tertiary">AI Teams</p>
                            </div>
                            <div>
                                <p className="text-display-sm font-bold text-purple-600">$2.4M+</p>
                                <p className="mt-2 text-sm text-tertiary">Customer Savings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-purple-900">
                <div className="mx-auto max-w-container px-4 md:px-8 text-center">
                    <h2 className="text-display-sm font-semibold text-white md:text-display-md">
                        Ready to Take Control of Your AI Costs?
                    </h2>
                    <p className="mt-4 text-lg text-purple-100 max-w-2xl mx-auto">
                        Join 100+ teams who've transformed their AI cost management with TokenTra.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://app.tokentra.io">
                            <Button size="xl" className="bg-white text-purple-600 hover:bg-purple-50">
                                Start for Free
                            </Button>
                        </a>
                        <a href="https://app.tokentra.io">
                            <Button size="xl" color="secondary" className="border-white text-white hover:bg-purple-700">
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
