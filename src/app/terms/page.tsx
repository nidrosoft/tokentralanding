"use client";

import { Badge } from "@/components/base/badges/badges";
import { Header } from "@/components/marketing/header-navigation/header";

export default function TermsPage() {
    return (
        <div className="bg-primary min-h-screen">
            <Header />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex justify-center">
                            <Badge color="gray" type="pill-color" size="md">
                                Legal
                            </Badge>
                        </div>
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg">
                            Terms of Service
                        </h1>
                        <p className="mt-6 text-lg text-tertiary">
                            Last updated: January 1, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="pb-16 md:pb-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        
                        <div className="space-y-10">
                            {/* Important Notice */}
                            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                                <p className="text-purple-800 dark:text-purple-200 font-medium">
                                    IMPORTANT: Please read these Terms of Service carefully before using TokenTra. These Terms constitute a legally binding agreement between you and TokenTra, Inc. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">1. Agreement to Terms</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    By accessing or using TokenTra's AI cost intelligence platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you do not have permission to access the Service.
                                </p>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    These Terms apply to all visitors, users, and others who access or use the Service. By using the Service on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms, and your agreement to these Terms will be treated as the agreement of such organization.
                                </p>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We may update these Terms from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective. Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">2. Description of Service</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    TokenTra provides an enterprise-grade AI cost intelligence platform designed to help organizations monitor, analyze, and optimize their artificial intelligence spending across multiple providers. Our comprehensive platform enables organizations to:
                                </p>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-primary rounded-lg p-4 border border-secondary">
                                        <h4 className="font-semibold text-primary">Provider Integration</h4>
                                        <p className="mt-2 text-sm text-tertiary">Connect and monitor AI provider accounts including OpenAI, Anthropic, Google Vertex AI, Azure OpenAI, and AWS Bedrock with secure API key management.</p>
                                    </div>
                                    <div className="bg-primary rounded-lg p-4 border border-secondary">
                                        <h4 className="font-semibold text-primary">Cost Attribution</h4>
                                        <p className="mt-2 text-sm text-tertiary">Track and attribute AI usage costs across teams, projects, features, and individual users with our lightweight SDK integration.</p>
                                    </div>
                                    <div className="bg-primary rounded-lg p-4 border border-secondary">
                                        <h4 className="font-semibold text-primary">Budget Management</h4>
                                        <p className="mt-2 text-sm text-tertiary">Set hierarchical budgets with configurable thresholds and receive real-time alerts for cost anomalies and budget overruns.</p>
                                    </div>
                                    <div className="bg-primary rounded-lg p-4 border border-secondary">
                                        <h4 className="font-semibold text-primary">Optimization Engine</h4>
                                        <p className="mt-2 text-sm text-tertiary">Access AI-powered optimization recommendations including smart model routing, semantic caching, and cost reduction strategies.</p>
                                    </div>
                                    <div className="bg-primary rounded-lg p-4 border border-secondary">
                                        <h4 className="font-semibold text-primary">Reporting & Analytics</h4>
                                        <p className="mt-2 text-sm text-tertiary">Generate comprehensive reports for financial analysis, chargebacks, and executive dashboards with customizable date ranges.</p>
                                    </div>
                                    <div className="bg-primary rounded-lg p-4 border border-secondary">
                                        <h4 className="font-semibold text-primary">Alerting System</h4>
                                        <p className="mt-2 text-sm text-tertiary">Configure multi-channel notifications via email, Slack, PagerDuty, and webhooks for budget alerts and anomaly detection.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">3. Account Registration and Security</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    To access certain features of the Service, you must register for an account. When you register, you agree to provide accurate, current, and complete information about yourself and your organization. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">3.1 Account Requirements</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> You must be at least 18 years old to create an account</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> You must provide a valid business email address</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> You must provide accurate company and billing information</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> You must have authority to bind your organization to these Terms</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">3.2 Account Security</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Use a strong, unique password for your TokenTra account</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Enable two-factor authentication (2FA) when available</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Do not share your account credentials with unauthorized parties</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Notify us immediately at security@tokentra.io if you suspect unauthorized access</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Regularly review your account activity and connected providers</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">3.3 Account Suspension and Termination</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    We reserve the right to suspend or terminate your account if we reasonably believe that you have violated these Terms, engaged in fraudulent activity, or if your account poses a security risk. We will provide notice before suspension except in cases of emergency or legal requirement.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">4. Subscription Plans and Billing</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    TokenTra offers multiple subscription tiers designed to meet the needs of organizations of all sizes, from startups to enterprises. Our pricing is based on your AI spend under management and the features you require.
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">4.1 Available Plans</h3>
                                <div className="mt-4 overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-primary">
                                                <th className="text-left py-3 pr-4 font-semibold text-primary">Plan</th>
                                                <th className="text-left py-3 pr-4 font-semibold text-primary">AI Spend Limit</th>
                                                <th className="text-left py-3 font-semibold text-primary">Key Features</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-tertiary">
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4 font-medium">Free</td>
                                                <td className="py-3 pr-4">Up to $1,000/mo</td>
                                                <td className="py-3">1 provider, basic dashboard, email alerts</td>
                                            </tr>
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4 font-medium">Starter</td>
                                                <td className="py-3 pr-4">Up to $5,000/mo</td>
                                                <td className="py-3">3 providers, SDK access, Slack integration</td>
                                            </tr>
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4 font-medium">Pro</td>
                                                <td className="py-3 pr-4">Up to $25,000/mo</td>
                                                <td className="py-3">Unlimited providers, teams, optimization engine</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-4 font-medium">Business</td>
                                                <td className="py-3 pr-4">Up to $100,000/mo</td>
                                                <td className="py-3">SSO, advanced analytics, priority support</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-lg font-semibold text-primary mt-6">4.2 Payment Terms</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    Paid subscriptions are billed in advance on a monthly or annual basis. Annual subscriptions receive a discount as displayed on our pricing page. All payments are processed securely through Stripe, Inc. By subscribing, you authorize us to charge your designated payment method for all applicable fees.
                                </p>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Prices are displayed in USD unless otherwise specified</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Applicable taxes will be added based on your billing address</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Failed payments will result in service suspension after 7 days</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> We accept major credit cards and ACH transfers for annual plans</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">4.3 Refund Policy</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    Annual subscriptions are eligible for a prorated refund within the first 30 days of purchase. Monthly subscriptions are non-refundable but you may cancel at any time to prevent future charges. Enterprise customers should refer to their Master Service Agreement for specific refund terms.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">4.4 Plan Changes and Cancellation</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    You may upgrade or downgrade your plan at any time through your account settings. Upgrades take effect immediately with prorated billing. Downgrades take effect at the start of your next billing cycle. Upon cancellation, you retain access until the end of your current billing period, after which your data is retained for 30 days before deletion.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">4.5 Price Changes</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    We reserve the right to modify our pricing with 30 days' advance notice. Price changes will not affect your current billing cycle. If you do not agree to the new pricing, you may cancel your subscription before the new prices take effect.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">5. Acceptable Use Policy</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    You agree to use the Service only for lawful purposes and in accordance with these Terms. The following activities are strictly prohibited:
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">5.1 Prohibited Activities</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Using the Service for any unlawful purpose or to violate any laws</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Attempting to gain unauthorized access to our systems or other users' accounts</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Interfering with or disrupting the Service, servers, or networks</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Reverse engineering, decompiling, or disassembling any part of the Service</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Sharing your account credentials with unauthorized third parties</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Using the Service to build a competing product or service</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Transmitting viruses, malware, or other harmful code</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Scraping or harvesting data from the Service without authorization</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Circumventing any access controls or usage limits</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Impersonating any person or entity or misrepresenting your affiliation</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">5.2 API and SDK Usage</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    When using our API or SDK, you must comply with our rate limits and usage guidelines. Excessive API calls that impact service performance may result in temporary throttling or suspension. You may not use automated systems to access the Service in a manner that exceeds reasonable human usage.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">5.3 Enforcement</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    We reserve the right to investigate and take appropriate action against anyone who violates this Acceptable Use Policy, including removing content, suspending or terminating accounts, and reporting violations to law enforcement authorities.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">6. API Keys and Third-Party Credentials</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    To provide our cost tracking and optimization services, you may connect your AI provider accounts by providing API keys or other credentials. By connecting these accounts, you acknowledge and agree to the following:
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">6.1 Your Responsibilities</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> You have the authority to connect these accounts and share credentials with TokenTra</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> You are responsible for ensuring your API keys have appropriate permissions</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> You remain responsible for all usage and charges on your AI provider accounts</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> You will promptly update or revoke credentials if they are compromised</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">6.2 Our Commitments</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> We use read-only API access wherever possible</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> All credentials are encrypted at rest using AES-256 encryption</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Credentials are transmitted only over TLS 1.3 encrypted connections</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> We never store or access your AI prompts or responses</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> You can disconnect providers and revoke access at any time</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">6.3 SDK Data Collection</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    When you use our SDK, we collect usage metadata including token counts, model names, timestamps, and attribution tags you provide. We do NOT collect, store, or have access to the content of your prompts or AI responses. All telemetry is sent asynchronously and does not impact your API call latency.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">7. Data Ownership and Privacy</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    Your data belongs to you. By using the Service, you grant TokenTra a limited, non-exclusive license to process your data solely for the purpose of providing and improving the Service.
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">7.1 Your Data Rights</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> You retain all ownership rights to your data</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> You can export your data at any time in standard formats (CSV, JSON)</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> You can request deletion of your data by contacting support</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Your data is automatically deleted 30 days after account termination</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">7.2 What We Do NOT Do</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> We do NOT sell your data to third parties</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> We do NOT use your data for advertising purposes</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> We do NOT access your AI prompts or responses</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> We do NOT share your data without your consent (except as required by law)</li>
                                    <li className="flex items-start gap-2"><span className="text-red-500">✗</span> We do NOT use your data to train AI models</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">7.3 Aggregated Data</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    We may use aggregated, anonymized data that does not identify you or your organization to improve our Service, conduct research, and publish industry benchmarks. This aggregated data cannot be used to identify any individual customer.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">8. Intellectual Property Rights</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    The Service, including all content, features, functionality, software, and documentation, is owned by TokenTra, Inc. and is protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">8.1 TokenTra's Intellectual Property</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    The TokenTra name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of TokenTra, Inc. You may not use these marks without our prior written permission. All other names, logos, product and service names, designs, and slogans on the Service are the trademarks of their respective owners.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">8.2 License to Use the Service</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your internal business purposes. This license does not include the right to sublicense, modify, adapt, translate, reverse engineer, decompile, or disassemble the Service.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">8.3 Feedback</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    If you provide us with feedback, suggestions, or ideas about the Service, you grant us a perpetual, irrevocable, worldwide, royalty-free license to use, modify, and incorporate such feedback into the Service without any obligation to you.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">9. Service Level Agreement</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    TokenTra is committed to providing a reliable and performant service. For paid plans, we offer the following service level commitments:
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">9.1 Uptime Commitment</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    We target 99.9% uptime for the TokenTra platform, measured on a monthly basis. This excludes scheduled maintenance windows, which we will announce at least 48 hours in advance via email and our status page.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">9.2 Data Sync Frequency</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    We sync data from your connected AI providers at regular intervals: every 5 minutes for Pro and Business plans, and every 15 minutes for Starter plans. Sync frequency may vary based on provider API rate limits and availability.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">9.3 Support Response Times</h3>
                                <div className="mt-4 overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-primary">
                                                <th className="text-left py-3 pr-4 font-semibold text-primary">Plan</th>
                                                <th className="text-left py-3 pr-4 font-semibold text-primary">Critical Issues</th>
                                                <th className="text-left py-3 font-semibold text-primary">General Inquiries</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-tertiary">
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4">Free/Starter</td>
                                                <td className="py-3 pr-4">48 hours</td>
                                                <td className="py-3">5 business days</td>
                                            </tr>
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4">Pro</td>
                                                <td className="py-3 pr-4">24 hours</td>
                                                <td className="py-3">2 business days</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-4">Business/Enterprise</td>
                                                <td className="py-3 pr-4">4 hours</td>
                                                <td className="py-3">1 business day</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">10. Disclaimer of Warranties</h2>
                                <p className="mt-4 text-tertiary leading-relaxed uppercase font-medium">
                                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                                </p>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    Without limiting the foregoing, TokenTra does not warrant that:
                                </p>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> The Service will be uninterrupted, timely, secure, or error-free</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> The results obtained from using the Service will be accurate or reliable</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Any errors in the Service will be corrected</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> The Service will meet your specific requirements</li>
                                </ul>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    Cost estimates, forecasts, and optimization recommendations provided by the Service are for informational purposes only. Actual costs may vary based on your AI provider's billing practices, pricing changes, and usage patterns. TokenTra is not responsible for any discrepancies between our estimates and your actual invoices from AI providers.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">11. Limitation of Liability</h2>
                                <p className="mt-4 text-tertiary leading-relaxed uppercase font-medium">
                                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL TOKENTRA, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR WHETHER TOKENTRA WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                                </p>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    In no event shall TokenTra's total cumulative liability to you for all claims arising out of or related to these Terms or the Service exceed the greater of: (a) the amounts you paid to TokenTra in the twelve (12) months preceding the claim; or (b) one hundred U.S. dollars ($100).
                                </p>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you. In such cases, our liability will be limited to the maximum extent permitted by applicable law.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">12. Indemnification</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    You agree to defend, indemnify, and hold harmless TokenTra, its affiliates, and their respective officers, directors, employees, agents, licensors, and suppliers from and against any claims, actions, demands, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:
                                </p>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Your use of the Service or any activities conducted through your account</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Your violation of these Terms or any applicable law or regulation</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Your violation of any third-party rights, including intellectual property rights</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Any content or data you submit, post, or transmit through the Service</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Your use of API keys or credentials for third-party services</li>
                                </ul>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">13. Modifications to Service and Terms</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
                                </p>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We may update these Terms from time to time. If we make material changes, we will notify you by email at least 30 days before the changes take effect. Your continued use of the Service after the effective date of the revised Terms constitutes your acceptance of the changes.
                                </p>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    If you do not agree to the revised Terms, you must stop using the Service before the changes take effect. You may cancel your subscription at any time through your account settings.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">14. Governing Law and Dispute Resolution</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">14.1 Informal Resolution</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    Before filing a claim, you agree to try to resolve the dispute informally by contacting us at legal@tokentra.io. We will try to resolve the dispute informally within 60 days.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">14.2 Arbitration</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    If we cannot resolve the dispute informally, you and TokenTra agree to resolve any claims through final and binding arbitration administered by JAMS under its Streamlined Arbitration Rules. The arbitration will be conducted in San Diego, California, unless you and TokenTra agree otherwise.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">14.3 Class Action Waiver</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    You and TokenTra agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. If this class action waiver is found to be unenforceable, then the entirety of this arbitration provision shall be null and void.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">14.4 Exceptions</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    Notwithstanding the above, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement of intellectual property rights.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">15. General Provisions</h2>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">15.1 Entire Agreement</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and TokenTra regarding the Service and supersede all prior agreements and understandings.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">15.2 Severability</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">15.3 Waiver</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of TokenTra.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">15.4 Assignment</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction. Any attempted assignment in violation of this section shall be null and void.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">15.5 Force Majeure</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">15.6 Export Compliance</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    You agree to comply with all applicable export and re-export control laws and regulations, including the Export Administration Regulations maintained by the U.S. Department of Commerce and sanctions programs maintained by the U.S. Treasury Department's Office of Foreign Assets Control.
                                </p>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
                                <h2 className="text-2xl font-semibold text-primary">16. Contact Information</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    If you have any questions about these Terms of Service, please contact us:
                                </p>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-primary">Legal Inquiries</h4>
                                        <p className="mt-2 text-tertiary">
                                            <a href="mailto:legal@tokentra.io" className="text-purple-600 hover:text-purple-700">legal@tokentra.io</a>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">General Support</h4>
                                        <p className="mt-2 text-tertiary">
                                            <a href="mailto:support@tokentra.io" className="text-purple-600 hover:text-purple-700">support@tokentra.io</a>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Mailing Address</h4>
                                        <p className="mt-2 text-tertiary">
                                            TokenTra, Inc.<br />
                                            San Diego, CA<br />
                                            United States
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Data Protection Officer</h4>
                                        <p className="mt-2 text-tertiary">
                                            <a href="mailto:dpo@tokentra.io" className="text-purple-600 hover:text-purple-700">dpo@tokentra.io</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
