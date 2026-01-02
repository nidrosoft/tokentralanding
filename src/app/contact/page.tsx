"use client";

import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { Header } from "@/components/marketing/header-navigation/header";
import { Mail01, MessageChatCircle, Users01, Shield01, Briefcase01 } from "@untitledui/icons";

const contactOptions = [
    {
        icon: Mail01,
        title: "General Inquiries",
        description: "For general questions about TokenTra",
        email: "hello@tokentra.io",
        response: "We typically respond within 24 hours",
    },
    {
        icon: Briefcase01,
        title: "Sales & Pricing",
        description: "Interested in TokenTra for your team? Questions about Enterprise plans?",
        email: "sales@tokentra.io",
        response: "Schedule a demo to see TokenTra in action",
    },
    {
        icon: MessageChatCircle,
        title: "Technical Support",
        description: "Need help with your TokenTra account, integrations, or the SDK?",
        email: "support@tokentra.io",
        response: "Check our documentation for quick answers",
    },
    {
        icon: Users01,
        title: "Partnerships",
        description: "Interested in partnering with TokenTra? We work with AI providers, cloud consultancies, and FinOps practitioners.",
        email: "partnerships@tokentra.io",
        response: "Let's explore how we can work together",
    },
    {
        icon: Shield01,
        title: "Security",
        description: "To report a security vulnerability",
        email: "security@tokentra.io",
        response: "We take security seriously and respond promptly",
    },
];

export default function ContactPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Header />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex justify-center">
                            <Badge color="brand" type="pill-color" size="md">
                                Contact Us
                            </Badge>
                        </div>
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg">
                            We'd Love to Hear From You
                        </h1>
                        <p className="mt-6 text-xl text-tertiary">
                            Choose the best way to reach us based on your needs. Our team is here to help you take control of your AI costs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {contactOptions.map((option, index) => (
                            <div key={index} className="bg-primary rounded-xl p-6 border border-secondary flex flex-col">
                                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                    <option.icon className="size-6 text-purple-600" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-primary">{option.title}</h3>
                                <p className="mt-2 text-sm text-tertiary flex-1">{option.description}</p>
                                <div className="mt-4">
                                    <a 
                                        href={`mailto:${option.email}`}
                                        className="text-purple-600 font-medium hover:text-purple-700"
                                    >
                                        {option.email}
                                    </a>
                                    <p className="mt-1 text-xs text-tertiary">{option.response}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Contact Form */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                                Send Us a Message
                            </h2>
                            <p className="mt-4 text-lg text-tertiary">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-4 py-3 rounded-lg border border-secondary bg-primary text-primary focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full px-4 py-3 rounded-lg border border-secondary bg-primary text-primary focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-lg border border-secondary bg-primary text-primary focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="w-full px-4 py-3 rounded-lg border border-secondary bg-primary text-primary focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="Acme Inc."
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-secondary bg-primary text-primary focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                >
                                    <option value="">Select a topic</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="sales">Sales & Pricing</option>
                                    <option value="support">Technical Support</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-secondary bg-primary text-primary focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="Tell us how we can help..."
                                />
                            </div>
                            <div>
                                <Button size="xl" className="w-full">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Social Links */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="mx-auto max-w-container px-4 md:px-8 text-center">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Connect With Us
                    </h2>
                    <div className="mt-8 flex justify-center gap-6">
                        <a 
                            href="https://x.com/zehcyriac" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-tertiary hover:text-primary transition-colors"
                        >
                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/cyriac-zeh/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-tertiary hover:text-primary transition-colors"
                        >
                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
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
