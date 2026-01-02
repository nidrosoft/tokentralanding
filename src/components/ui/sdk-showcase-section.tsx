"use client";

import { useState } from "react";
import { CodeSnippet } from "@/components/application/code-snippet/code-snippet";
import { Badge } from "@/components/base/badges/badges";
import { CheckCircle } from "@untitledui/icons";
import { FadeInUp, PopIn, ScaleIn, StaggerContainer, StaggerItem, fadeInUp } from "@/components/ui/motion";

const nodeJsCode = `// Before: No visibility
const openai = new OpenAI();
const response = await openai.chat.completions.create({...});

// After: Complete cost tracking
const tokentra = new TokenTra({ apiKey: 'tt_live_xxx' });
const openai = tokentra.wrap(new OpenAI());
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [...],
}, {
  tokentra: { feature: 'chat', team: 'product', userId: 'user_123' }
});`;

const pythonCode = `# Before: No visibility
openai = OpenAI()
response = openai.chat.completions.create(...)

# After: Complete cost tracking
tokentra = TokenTra(api_key='tt_live_xxx')
openai = tokentra.wrap(OpenAI())
response = openai.chat.completions.create(
    model='gpt-4',
    messages=[...],
    extra_body={
        'tokentra': {'feature': 'chat', 'team': 'product', 'user_id': 'user_123'}
    }
)`;

const restApiCode = `// REST API - Add headers to any request
fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk-xxx',
    'X-TokenTra-Key': 'tt_live_xxx',
    'X-TokenTra-Feature': 'chat',
    'X-TokenTra-Team': 'product',
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [...]
  })
});`;

const languages = [
    { id: "nodejs", label: "Node.js", code: nodeJsCode, lang: "ts" as const },
    { id: "python", label: "Python", code: pythonCode, lang: "ts" as const },
    { id: "rest", label: "REST API", code: restApiCode, lang: "ts" as const },
];

const features = [
    "Zero latency impact",
    "Async telemetry (non-blocking)",
    "Works with existing code",
    "Automatic token counting",
    "All providers supported",
    "Custom attribution tags",
];

export const SDKShowcaseSection = () => {
    const [activeTab, setActiveTab] = useState("nodejs");

    const activeLanguage = languages.find((l) => l.id === activeTab) || languages[0];

    return (
        <section id="sdk" className="bg-gray-900 py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <FadeInUp className="flex flex-col items-center text-center mb-12">
                    <PopIn>
                        <Badge color="gray" type="pill-color" size="md" className="bg-gray-800 text-gray-300">
                            SDK Integration
                        </Badge>
                    </PopIn>
                    <FadeInUp delay={0.1}>
                        <h2 className="mt-4 text-display-sm font-semibold text-white md:text-display-md">
                            3 Lines of Code. Infinite Visibility.
                        </h2>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <p className="mt-4 text-lg text-gray-400 md:mt-5 md:text-xl max-w-3xl">
                            Add TokenTra to your codebase in under 60 seconds. Works with your existing AI provider setup no proxy, no latency, no changes to your credentials.
                        </p>
                    </FadeInUp>
                </FadeInUp>

                <div className="max-w-4xl mx-auto">
                    {/* Language Tabs */}
                    <FadeInUp delay={0.3}>
                        <div className="flex gap-2 mb-4">
                            {languages.map((lang) => (
                                <button
                                    key={lang.id}
                                    onClick={() => setActiveTab(lang.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                        activeTab === lang.id
                                            ? "bg-purple-600 text-white"
                                            : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                                    }`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    </FadeInUp>

                    {/* Code Snippet */}
                    <ScaleIn delay={0.4}>
                        <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-950">
                            <CodeSnippet 
                                code={activeLanguage.code} 
                                language={activeLanguage.lang}
                                className="!bg-gray-950 !border-0 !rounded-none"
                            />
                        </div>
                    </ScaleIn>

                    {/* Features Grid */}
                    <StaggerContainer staggerDelay={0.08} delay={0.5} className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {features.map((feature) => (
                            <StaggerItem key={feature} variants={fadeInUp}>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                    <span className="text-sm text-gray-300">{feature}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
};
