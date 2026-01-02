"use client";

import { Badge } from "@/components/base/badges/badges";
import { Header } from "@/components/marketing/header-navigation/header";

export default function PrivacyPage() {
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
                            Privacy Policy
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
                            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                                <p className="text-green-800 dark:text-green-200 font-medium">
                                    YOUR PRIVACY MATTERS: TokenTra is committed to protecting your privacy and being transparent about our data practices. We never collect, store, or have access to your AI prompts, responses, or any content processed by your AI providers. We only collect the metadata necessary to provide our cost tracking and optimization services.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">1. Introduction</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    TokenTra, Inc. ("TokenTra," "we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at tokentra.io, use our AI cost intelligence platform, integrate our SDK, or interact with our services in any way.
                                </p>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    This Privacy Policy applies to all users of our Service, including visitors to our website, registered users, and organizations that integrate our platform. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                                </p>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We encourage you to read this Privacy Policy carefully and contact us if you have any questions. If you do not agree with our policies and practices, please do not use our Service.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">2. Information We Collect</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We collect information in several ways: directly from you when you provide it, automatically when you use our Service, and from third-party sources when you connect external accounts.
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">2.1 Account Information</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    When you create an account or register for our Service, we collect:
                                </p>
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-primary rounded-lg p-4 border border-secondary">
                                        <h4 className="font-semibold text-primary">Personal Information</h4>
                                        <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                            <li>• Full name</li>
                                            <li>• Email address</li>
                                            <li>• Phone number (optional)</li>
                                            <li>• Job title and role</li>
                                            <li>• Profile picture (optional)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-primary rounded-lg p-4 border border-secondary">
                                        <h4 className="font-semibold text-primary">Organization Information</h4>
                                        <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                            <li>• Company name</li>
                                            <li>• Company size</li>
                                            <li>• Industry</li>
                                            <li>• Billing address</li>
                                            <li>• Tax identification (if applicable)</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-primary mt-6">2.2 AI Provider Usage Data</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    To provide our AI cost tracking and optimization services, we collect usage metadata from your connected AI providers:
                                </p>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> <strong>Token counts:</strong> Input tokens, output tokens, cached tokens</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> <strong>Model information:</strong> Model names, versions, and configurations used</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> <strong>Timestamps:</strong> When API calls were made</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> <strong>Cost data:</strong> Calculated costs based on provider pricing</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> <strong>Attribution tags:</strong> Team, project, feature, and user IDs you assign</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> <strong>Request metadata:</strong> Request IDs, latency, success/failure status</li>
                                </ul>

                                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                    <h4 className="font-semibold text-green-800 dark:text-green-200">What We Do NOT Collect</h4>
                                    <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                                        <li>✗ We do NOT collect your AI prompts or queries</li>
                                        <li>✗ We do NOT collect AI model responses or outputs</li>
                                        <li>✗ We do NOT collect any content processed by your AI providers</li>
                                        <li>✗ We do NOT have access to the semantic meaning of your AI interactions</li>
                                    </ul>
                                </div>

                                <h3 className="text-lg font-semibold text-primary mt-6">2.3 Technical and Usage Data</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    We automatically collect certain technical information when you access our Service:
                                </p>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> IP address and approximate geographic location</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Browser type, version, and language preferences</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Operating system and device information</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Pages visited, features used, and time spent on pages</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Referring URLs and exit pages</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Error logs and performance metrics</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Clickstream data and interaction patterns</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">2.4 Payment Information</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    When you subscribe to a paid plan, payment information is collected and processed by our payment processor, Stripe, Inc. We do not store your full credit card number, CVV, or other sensitive payment details on our servers. We only receive and store:
                                </p>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Last four digits of your card number</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Card brand (Visa, Mastercard, etc.)</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Card expiration date</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Billing address</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Transaction history and invoices</li>
                                </ul>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">3. How We Use Your Information</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We use the information we collect for various purposes, all aimed at providing, maintaining, and improving our Service:
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">3.1 Service Delivery</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Provide, operate, and maintain our AI cost intelligence platform</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Process and display your AI usage data and cost analytics</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Generate reports, forecasts, and optimization recommendations</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Send alerts and notifications based on your configured preferences</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Process payments and manage your subscription</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">3.2 Communication</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Send transactional emails (account verification, password resets, invoices)</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Send service-related announcements and updates</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Respond to your inquiries and provide customer support</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Send marketing communications (with your consent)</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">3.3 Improvement and Development</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Analyze usage patterns to improve our platform</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Develop new features and services</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Conduct research and analytics</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Test and troubleshoot new products and features</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">3.4 Security and Compliance</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Detect, prevent, and address fraud and abuse</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Monitor and enforce our Terms of Service</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Comply with legal obligations and respond to lawful requests</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Protect the rights, property, and safety of TokenTra and our users</li>
                                </ul>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">4. Legal Basis for Processing (GDPR)</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we process your personal data based on the following legal grounds:
                                </p>
                                
                                <div className="mt-6 overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-primary">
                                                <th className="text-left py-3 pr-4 font-semibold text-primary">Legal Basis</th>
                                                <th className="text-left py-3 font-semibold text-primary">Processing Activities</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-tertiary">
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4 font-medium">Contract Performance</td>
                                                <td className="py-3">Providing our Service, processing payments, customer support</td>
                                            </tr>
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4 font-medium">Legitimate Interests</td>
                                                <td className="py-3">Analytics, fraud prevention, service improvement, security</td>
                                            </tr>
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4 font-medium">Consent</td>
                                                <td className="py-3">Marketing communications, optional cookies, testimonials</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-4 font-medium">Legal Obligation</td>
                                                <td className="py-3">Tax compliance, responding to legal requests, record keeping</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">5. Data Sharing and Disclosure</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We do not sell your personal information to third parties. We may share your information only in the following circumstances:
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">5.1 Service Providers</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    We share information with trusted third-party service providers who assist us in operating our Service:
                                </p>
                                <div className="mt-4 overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-primary">
                                                <th className="text-left py-3 pr-4 font-semibold text-primary">Provider</th>
                                                <th className="text-left py-3 pr-4 font-semibold text-primary">Purpose</th>
                                                <th className="text-left py-3 font-semibold text-primary">Data Shared</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-tertiary">
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4">Supabase</td>
                                                <td className="py-3 pr-4">Database & Authentication</td>
                                                <td className="py-3">Account data, usage data</td>
                                            </tr>
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4">Stripe</td>
                                                <td className="py-3 pr-4">Payment Processing</td>
                                                <td className="py-3">Billing information</td>
                                            </tr>
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4">Resend</td>
                                                <td className="py-3 pr-4">Email Delivery</td>
                                                <td className="py-3">Email address, name</td>
                                            </tr>
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4">Vercel</td>
                                                <td className="py-3 pr-4">Application Hosting</td>
                                                <td className="py-3">Technical data, logs</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-4">PostHog</td>
                                                <td className="py-3 pr-4">Product Analytics</td>
                                                <td className="py-3">Usage analytics (anonymized)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    All service providers are bound by data processing agreements that require them to protect your information and use it only for the purposes we specify.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">5.2 Legal Requirements</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency). We will notify you of such requests unless prohibited by law.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">5.3 Business Transfers</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    If TokenTra is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your information becomes subject to a different privacy policy.
                                </p>

                                <h3 className="text-lg font-semibold text-primary mt-6">5.4 With Your Consent</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    We may share your information with third parties when you have given us explicit consent to do so.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">6. Data Security</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">6.1 Technical Safeguards</h3>
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-primary rounded-lg p-4 border border-secondary">
                                        <h4 className="font-semibold text-primary">Encryption</h4>
                                        <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                            <li>• TLS 1.3 for all data in transit</li>
                                            <li>• AES-256 encryption for data at rest</li>
                                            <li>• Envelope encryption for API keys</li>
                                            <li>• Secure key management (AWS KMS)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-primary rounded-lg p-4 border border-secondary">
                                        <h4 className="font-semibold text-primary">Access Controls</h4>
                                        <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                            <li>• Role-based access control (RBAC)</li>
                                            <li>• Multi-factor authentication</li>
                                            <li>• Principle of least privilege</li>
                                            <li>• Regular access reviews</li>
                                        </ul>
                                    </div>
                                    <div className="bg-primary rounded-lg p-4 border border-secondary">
                                        <h4 className="font-semibold text-primary">Infrastructure</h4>
                                        <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                            <li>• SOC 2 Type II compliant providers</li>
                                            <li>• Isolated network environments</li>
                                            <li>• DDoS protection</li>
                                            <li>• Regular security patches</li>
                                        </ul>
                                    </div>
                                    <div className="bg-primary rounded-lg p-4 border border-secondary">
                                        <h4 className="font-semibold text-primary">Monitoring</h4>
                                        <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                            <li>• 24/7 security monitoring</li>
                                            <li>• Intrusion detection systems</li>
                                            <li>• Automated threat detection</li>
                                            <li>• Security incident response</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-primary mt-6">6.2 Organizational Safeguards</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Regular security training for all employees</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Background checks for employees with data access</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Confidentiality agreements with all staff</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Annual penetration testing by third parties</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Regular security audits and assessments</li>
                                </ul>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">7. Data Retention</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.
                                </p>
                                
                                <div className="mt-6 overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-primary">
                                                <th className="text-left py-3 pr-4 font-semibold text-primary">Data Type</th>
                                                <th className="text-left py-3 pr-4 font-semibold text-primary">Retention Period</th>
                                                <th className="text-left py-3 font-semibold text-primary">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-tertiary">
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4">Account Information</td>
                                                <td className="py-3 pr-4">Duration of account + 30 days</td>
                                                <td className="py-3">Deleted upon account termination</td>
                                            </tr>
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4">AI Usage Data</td>
                                                <td className="py-3 pr-4">24 months (configurable)</td>
                                                <td className="py-3">Can be reduced in settings</td>
                                            </tr>
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4">Billing Records</td>
                                                <td className="py-3 pr-4">7 years</td>
                                                <td className="py-3">Required for tax compliance</td>
                                            </tr>
                                            <tr className="border-b border-primary">
                                                <td className="py-3 pr-4">Support Tickets</td>
                                                <td className="py-3 pr-4">3 years</td>
                                                <td className="py-3">For quality and training</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-4">Security Logs</td>
                                                <td className="py-3 pr-4">1 year</td>
                                                <td className="py-3">For security investigations</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">8. Your Privacy Rights</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    Depending on your location, you may have certain rights regarding your personal information. We are committed to honoring these rights regardless of where you are located.
                                </p>
                                
                                <h3 className="text-lg font-semibold text-primary mt-6">8.1 Rights for All Users</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> <strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> <strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> <strong>Deletion:</strong> Request deletion of your personal data</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> <strong>Export:</strong> Receive your data in a portable, machine-readable format</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">8.2 Additional Rights (EEA, UK, Switzerland)</h3>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> <strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> <strong>Objection:</strong> Object to processing based on legitimate interests</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> <strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> <strong>Complaint:</strong> Lodge a complaint with your local data protection authority</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">8.3 California Privacy Rights (CCPA/CPRA)</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    California residents have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
                                </p>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Right to know what personal information is collected, used, and shared</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Right to delete personal information</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Right to opt-out of the sale or sharing of personal information (we do not sell your data)</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Right to non-discrimination for exercising privacy rights</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Right to correct inaccurate personal information</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Right to limit use of sensitive personal information</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-primary mt-6">8.4 How to Exercise Your Rights</h3>
                                <p className="mt-3 text-tertiary leading-relaxed">
                                    To exercise any of these rights, please contact us at <a href="mailto:privacy@tokentra.io" className="text-purple-600 hover:text-purple-700">privacy@tokentra.io</a>. We will respond to your request within 30 days (or sooner if required by law). We may need to verify your identity before processing your request.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">9. International Data Transfers</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    TokenTra is based in the United States. If you are accessing our Service from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States and other countries where our service providers operate.
                                </p>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    When we transfer personal data from the EEA, UK, or Switzerland to countries that have not been deemed to provide an adequate level of data protection, we use appropriate safeguards including:
                                </p>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Standard Contractual Clauses approved by the European Commission</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Data Processing Agreements with all service providers</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Additional technical and organizational measures as needed</li>
                                </ul>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">10. Cookies and Tracking Technologies</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We use cookies and similar tracking technologies to collect and store information about your interactions with our Service. For detailed information about the cookies we use and how to manage your preferences, please see our <a href="/cookies" className="text-purple-600 hover:text-purple-700">Cookie Policy</a>.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">11. Children's Privacy</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at <a href="mailto:privacy@tokentra.io" className="text-purple-600 hover:text-purple-700">privacy@tokentra.io</a>. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
                                </p>
                            </div>

                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">12. Changes to This Privacy Policy</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes, we will:
                                </p>
                                <ul className="mt-3 space-y-2 text-tertiary">
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Update the "Last updated" date at the top of this policy</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Notify you by email at least 30 days before changes take effect</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600">•</span> Post a prominent notice on our website</li>
                                </ul>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    Your continued use of our Service after the effective date of the revised Privacy Policy constitutes your acceptance of the changes.
                                </p>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
                                <h2 className="text-2xl font-semibold text-primary">13. Contact Us</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-primary">Privacy Inquiries</h4>
                                        <p className="mt-2 text-tertiary">
                                            <a href="mailto:privacy@tokentra.io" className="text-purple-600 hover:text-purple-700">privacy@tokentra.io</a>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Data Protection Officer</h4>
                                        <p className="mt-2 text-tertiary">
                                            <a href="mailto:dpo@tokentra.io" className="text-purple-600 hover:text-purple-700">dpo@tokentra.io</a>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Mailing Address</h4>
                                        <p className="mt-2 text-tertiary">
                                            TokenTra, Inc.<br />
                                            Attn: Privacy Team<br />
                                            San Diego, CA<br />
                                            United States
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">EU Representative</h4>
                                        <p className="mt-2 text-tertiary">
                                            For EU data subjects, contact our EU representative at <a href="mailto:eu-privacy@tokentra.io" className="text-purple-600 hover:text-purple-700">eu-privacy@tokentra.io</a>
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
