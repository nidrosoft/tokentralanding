"use client";

import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { Header } from "@/components/marketing/header-navigation/header";
import { Code01, Terminal, BookOpen01, Zap, Clock, Shield01 } from "@untitledui/icons";

const quickStartSteps = [
    {
        step: 1,
        title: "Install the SDK",
        code: `npm install @tokentra/sdk
# or
pip install tokentra`,
    },
    {
        step: 2,
        title: "Initialize TokenTra",
        code: `import { TokenTra } from '@tokentra/sdk';

const tokentra = new TokenTra({
  apiKey: 'tt_live_xxx'
});`,
    },
    {
        step: 3,
        title: "Wrap Your AI Client",
        code: `import OpenAI from 'openai';

const openai = tokentra.wrap(new OpenAI());

// Use as normal - costs are tracked automatically
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello!' }]
}, {
  tokentra: { 
    feature: 'chat', 
    team: 'product',
    userId: 'user_123'
  }
});`,
    },
];

const features = [
    {
        icon: Zap,
        title: "Zero Latency Impact",
        description: "All telemetry is sent asynchronously after the AI response is returned. Your API calls complete at exactly the same speed."
    },
    {
        icon: Clock,
        title: "Non-Blocking",
        description: "Batch telemetry collection ensures your application performance is never impacted by TokenTra."
    },
    {
        icon: Shield01,
        title: "Privacy First",
        description: "We never see your prompts or responses. Only usage metrics and costs are collected."
    },
];

const providers = [
    { name: "OpenAI", models: "GPT-5, GPT-5.1, GPT-5 Pro, o3, o3-mini, DALL-E 4, Whisper v3, Embeddings" },
    { name: "Anthropic", models: "Claude Opus 4.5, Claude Sonnet 4, Claude Haiku 4" },
    { name: "Google Vertex AI", models: "Gemini 3 Pro, Gemini 3 Flash, Gemini 3 Ultra, Imagen 3" },
    { name: "Azure OpenAI", models: "All OpenAI models via Azure deployments (GPT-5, o3)" },
    { name: "AWS Bedrock", models: "Claude Opus 4.5, Titan v2, Llama 3, Mistral Large 2, Stable Diffusion 3" },
];

const CodeBlock = ({ code, language = "typescript" }: { code: string; language?: string }) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>{code}</code>
    </pre>
);

export default function DocsPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Header />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex justify-center">
                            <Badge color="brand" type="pill-color" size="md">
                                Documentation
                            </Badge>
                        </div>
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg">
                            Get Started with TokenTra
                        </h1>
                        <p className="mt-6 text-xl text-tertiary">
                            Add AI cost tracking to your application in under 5 minutes. Our SDK wraps your existing AI clients with zero latency impact.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://app.tokentra.io">
                                <Button size="xl">Get Your API Key</Button>
                            </a>
                            <a href="https://app.tokentra.io">
                                <Button size="xl" color="secondary">Log In</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Start */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                                Quick Start Guide
                            </h2>
                            <p className="mt-4 text-lg text-tertiary">
                                Three steps to complete AI cost visibility
                            </p>
                        </div>

                        <div className="space-y-8">
                            {quickStartSteps.map((step) => (
                                <div key={step.step} className="bg-primary rounded-xl p-6 border border-secondary">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                                            {step.step}
                                        </div>
                                        <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                                    </div>
                                    <CodeBlock code={step.code} />
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">That's it!</h3>
                            <p className="mt-2 text-green-700 dark:text-green-300">
                                Your AI costs are now being tracked. Head to your TokenTra dashboard to see real-time spending data, set up alerts, and discover optimization opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SDK Features */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                            SDK Features
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto">
                                    <feature.icon className="size-6 text-purple-600" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-primary">{feature.title}</h3>
                                <p className="mt-2 text-sm text-tertiary">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Attribution */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                                Cost Attribution
                            </h2>
                            <p className="mt-4 text-lg text-tertiary">
                                Tag every AI request with custom attributes for granular cost tracking
                            </p>
                        </div>

                        <div className="bg-primary rounded-xl p-6 border border-secondary">
                            <CodeBlock code={`// Add attribution to any request
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [...]
}, {
  tokentra: {
    // Required: Feature being used
    feature: 'customer-support-chat',
    
    // Optional: Team responsible
    team: 'support-engineering',
    
    // Optional: Project or product
    project: 'helpdesk-v2',
    
    // Optional: End user (for per-user economics)
    userId: 'user_abc123',
    
    // Optional: Custom tags for your use case
    metadata: {
      environment: 'production',
      region: 'us-west',
      experimentId: 'exp_456'
    }
  }
});`} />
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 rounded-lg bg-primary border border-secondary">
                                <h4 className="font-semibold text-primary">Track by Team</h4>
                                <p className="mt-2 text-sm text-tertiary">See which teams are spending the most and enable internal chargebacks.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-primary border border-secondary">
                                <h4 className="font-semibold text-primary">Track by Feature</h4>
                                <p className="mt-2 text-sm text-tertiary">Understand the unit economics of every AI-powered feature in your product.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-primary border border-secondary">
                                <h4 className="font-semibold text-primary">Track by User</h4>
                                <p className="mt-2 text-sm text-tertiary">Calculate cost per user and identify heavy users driving your AI spend.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-primary border border-secondary">
                                <h4 className="font-semibold text-primary">Custom Metadata</h4>
                                <p className="mt-2 text-sm text-tertiary">Add any custom tags for A/B tests, environments, or business-specific tracking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supported Providers */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                                Supported Providers
                            </h2>
                            <p className="mt-4 text-lg text-tertiary">
                                Works with all major AI providers out of the box
                            </p>
                        </div>

                        <div className="space-y-4">
                            {providers.map((provider, index) => (
                                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                                    <div>
                                        <h4 className="font-semibold text-primary">{provider.name}</h4>
                                        <p className="text-sm text-tertiary">{provider.models}</p>
                                    </div>
                                    <Badge color="success" type="pill-color" size="sm">Supported</Badge>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Python SDK */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                                Python SDK
                            </h2>
                            <p className="mt-4 text-lg text-tertiary">
                                Full feature parity with the Node.js SDK
                            </p>
                        </div>

                        <div className="bg-primary rounded-xl p-6 border border-secondary">
                            <CodeBlock code={`from tokentra import TokenTra
from openai import OpenAI

# Initialize TokenTra
tokentra = TokenTra(api_key='tt_live_xxx')

# Wrap your OpenAI client
openai = tokentra.wrap(OpenAI())

# Use as normal
response = openai.chat.completions.create(
    model='gpt-4',
    messages=[{'role': 'user', 'content': 'Hello!'}],
    tokentra={
        'feature': 'chat',
        'team': 'product',
        'user_id': 'user_123'
    }
)

# Async support
import asyncio
from openai import AsyncOpenAI

async_openai = tokentra.wrap(AsyncOpenAI())

async def main():
    response = await async_openai.chat.completions.create(
        model='gpt-4',
        messages=[{'role': 'user', 'content': 'Hello!'}]
    )

asyncio.run(main())`} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-purple-900">
                <div className="mx-auto max-w-container px-4 md:px-8 text-center">
                    <h2 className="text-display-sm font-semibold text-white md:text-display-md">
                        Ready to Start Tracking?
                    </h2>
                    <p className="mt-4 text-lg text-purple-100 max-w-2xl mx-auto">
                        Get your API key and start tracking AI costs in under 5 minutes.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://app.tokentra.io">
                            <Button size="xl" className="bg-white text-purple-600 hover:bg-purple-50">
                                Get Started for Free
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
