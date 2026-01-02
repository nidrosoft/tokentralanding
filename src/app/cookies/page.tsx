"use client";

import { Badge } from "@/components/base/badges/badges";
import { Header } from "@/components/marketing/header-navigation/header";

export default function CookiesPage() {
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
                            Cookie Policy
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
                        
                        <div className="space-y-12">
                            {/* Introduction */}
                            <div className="bg-secondary rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-primary">Introduction</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    This Cookie Policy explains how TokenTra, Inc. ("TokenTra," "we," "us," or "our") uses cookies and similar tracking technologies when you visit our website at tokentra.io, use our AI cost intelligence platform, or interact with our services. This policy provides detailed information about what cookies are, what types of cookies we use, why we use them, and how you can control your cookie preferences.
                                </p>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    By continuing to use our website and services, you consent to the use of cookies as described in this policy. We encourage you to read this policy carefully to understand our practices regarding cookies and how they affect your experience on our platform.
                                </p>
                            </div>

                            {/* What Are Cookies */}
                            <div>
                                <h2 className="text-2xl font-semibold text-primary">What Are Cookies?</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used.
                                </p>
                                
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-secondary rounded-lg p-6">
                                        <h3 className="font-semibold text-primary">First-Party Cookies</h3>
                                        <p className="mt-2 text-sm text-tertiary">
                                            These are cookies set directly by TokenTra when you visit our website. They are essential for the basic functionality of our platform and help us remember your preferences.
                                        </p>
                                    </div>
                                    <div className="bg-secondary rounded-lg p-6">
                                        <h3 className="font-semibold text-primary">Third-Party Cookies</h3>
                                        <p className="mt-2 text-sm text-tertiary">
                                            These are cookies set by external services we use, such as analytics providers and authentication services. They help us understand how you use our platform and improve our services.
                                        </p>
                                    </div>
                                    <div className="bg-secondary rounded-lg p-6">
                                        <h3 className="font-semibold text-primary">Session Cookies</h3>
                                        <p className="mt-2 text-sm text-tertiary">
                                            Temporary cookies that are deleted when you close your browser. They help maintain your session while you navigate through our platform.
                                        </p>
                                    </div>
                                    <div className="bg-secondary rounded-lg p-6">
                                        <h3 className="font-semibold text-primary">Persistent Cookies</h3>
                                        <p className="mt-2 text-sm text-tertiary">
                                            Cookies that remain on your device for a set period or until you delete them. They help us remember your preferences for future visits.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Types of Cookies We Use */}
                            <div>
                                <h2 className="text-2xl font-semibold text-primary">Types of Cookies We Use</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We categorize the cookies we use into the following types based on their purpose and functionality:
                                </p>

                                {/* Essential Cookies */}
                                <div className="mt-8 border-l-4 border-purple-600 pl-6">
                                    <h3 className="text-xl font-semibold text-primary">1. Essential Cookies (Strictly Necessary)</h3>
                                    <p className="mt-3 text-tertiary leading-relaxed">
                                        These cookies are essential for the operation of our website and platform. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies as they are necessary for the platform to function properly.
                                    </p>
                                    <div className="mt-4 overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-secondary">
                                                    <th className="text-left py-3 pr-4 font-semibold text-primary">Cookie Name</th>
                                                    <th className="text-left py-3 pr-4 font-semibold text-primary">Purpose</th>
                                                    <th className="text-left py-3 font-semibold text-primary">Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-tertiary">
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 pr-4 font-mono text-xs">tt_session</td>
                                                    <td className="py-3 pr-4">Maintains your authenticated session</td>
                                                    <td className="py-3">Session</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 pr-4 font-mono text-xs">tt_csrf</td>
                                                    <td className="py-3 pr-4">Prevents cross-site request forgery attacks</td>
                                                    <td className="py-3">Session</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 pr-4 font-mono text-xs">tt_auth</td>
                                                    <td className="py-3 pr-4">Stores authentication token for API requests</td>
                                                    <td className="py-3">7 days</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 pr-4 font-mono text-xs">tt_org</td>
                                                    <td className="py-3 pr-4">Remembers your selected organization</td>
                                                    <td className="py-3">30 days</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 pr-4 font-mono text-xs">tt_preferences</td>
                                                    <td className="py-3 pr-4">Stores your dashboard preferences</td>
                                                    <td className="py-3">1 year</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Functional Cookies */}
                                <div className="mt-8 border-l-4 border-blue-600 pl-6">
                                    <h3 className="text-xl font-semibold text-primary">2. Functional Cookies</h3>
                                    <p className="mt-3 text-tertiary leading-relaxed">
                                        These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you disable these cookies, some or all of these features may not function properly.
                                    </p>
                                    <div className="mt-4 overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-secondary">
                                                    <th className="text-left py-3 pr-4 font-semibold text-primary">Cookie Name</th>
                                                    <th className="text-left py-3 pr-4 font-semibold text-primary">Purpose</th>
                                                    <th className="text-left py-3 font-semibold text-primary">Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-tertiary">
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 pr-4 font-mono text-xs">tt_theme</td>
                                                    <td className="py-3 pr-4">Remembers your light/dark mode preference</td>
                                                    <td className="py-3">1 year</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 pr-4 font-mono text-xs">tt_timezone</td>
                                                    <td className="py-3 pr-4">Stores your timezone for accurate reporting</td>
                                                    <td className="py-3">1 year</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 pr-4 font-mono text-xs">tt_currency</td>
                                                    <td className="py-3 pr-4">Remembers your preferred currency display</td>
                                                    <td className="py-3">1 year</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 pr-4 font-mono text-xs">tt_dashboard_layout</td>
                                                    <td className="py-3 pr-4">Saves your custom dashboard widget arrangement</td>
                                                    <td className="py-3">1 year</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Analytics Cookies */}
                                <div className="mt-8 border-l-4 border-green-600 pl-6">
                                    <h3 className="text-xl font-semibold text-primary">3. Analytics Cookies</h3>
                                    <p className="mt-3 text-tertiary leading-relaxed">
                                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our platform and user experience. We use privacy-focused analytics tools that do not track you across other websites.
                                    </p>
                                    <div className="mt-4 overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-secondary">
                                                    <th className="text-left py-3 pr-4 font-semibold text-primary">Cookie Name</th>
                                                    <th className="text-left py-3 pr-4 font-semibold text-primary">Provider</th>
                                                    <th className="text-left py-3 pr-4 font-semibold text-primary">Purpose</th>
                                                    <th className="text-left py-3 font-semibold text-primary">Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-tertiary">
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 pr-4 font-mono text-xs">ph_*</td>
                                                    <td className="py-3 pr-4">PostHog</td>
                                                    <td className="py-3 pr-4">Product analytics and feature usage tracking</td>
                                                    <td className="py-3">1 year</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 pr-4 font-mono text-xs">_tt_analytics</td>
                                                    <td className="py-3 pr-4">TokenTra</td>
                                                    <td className="py-3 pr-4">Anonymous page view and feature usage</td>
                                                    <td className="py-3">30 days</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 pr-4 font-mono text-xs">_tt_session_id</td>
                                                    <td className="py-3 pr-4">TokenTra</td>
                                                    <td className="py-3 pr-4">Groups page views into sessions</td>
                                                    <td className="py-3">30 minutes</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Marketing Cookies */}
                                <div className="mt-8 border-l-4 border-orange-600 pl-6">
                                    <h3 className="text-xl font-semibold text-primary">4. Marketing Cookies</h3>
                                    <p className="mt-3 text-tertiary leading-relaxed">
                                        These cookies are used to track visitors across websites to display relevant advertisements. We use minimal marketing cookies and do not sell your data to third parties. You can opt out of these cookies without affecting your use of the platform.
                                    </p>
                                    <div className="mt-4 overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-secondary">
                                                    <th className="text-left py-3 pr-4 font-semibold text-primary">Cookie Name</th>
                                                    <th className="text-left py-3 pr-4 font-semibold text-primary">Provider</th>
                                                    <th className="text-left py-3 pr-4 font-semibold text-primary">Purpose</th>
                                                    <th className="text-left py-3 font-semibold text-primary">Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-tertiary">
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 pr-4 font-mono text-xs">_tt_ref</td>
                                                    <td className="py-3 pr-4">TokenTra</td>
                                                    <td className="py-3 pr-4">Tracks referral source for attribution</td>
                                                    <td className="py-3">30 days</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 pr-4 font-mono text-xs">_tt_campaign</td>
                                                    <td className="py-3 pr-4">TokenTra</td>
                                                    <td className="py-3 pr-4">Tracks marketing campaign effectiveness</td>
                                                    <td className="py-3">30 days</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* How to Control Cookies */}
                            <div>
                                <h2 className="text-2xl font-semibold text-primary">How to Control Cookies</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    You have several options for controlling and managing cookies. Please note that removing or blocking cookies may impact your user experience and some features may no longer be available.
                                </p>

                                <div className="mt-6 space-y-6">
                                    <div className="bg-secondary rounded-lg p-6">
                                        <h3 className="font-semibold text-primary">Browser Settings</h3>
                                        <p className="mt-2 text-tertiary leading-relaxed">
                                            Most web browsers allow you to control cookies through their settings. You can typically find these settings in the "Options" or "Preferences" menu of your browser. The following links provide information on how to manage cookies in popular browsers:
                                        </p>
                                        <ul className="mt-4 space-y-2 text-tertiary">
                                            <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Google Chrome</a></li>
                                            <li>• <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Mozilla Firefox</a></li>
                                            <li>• <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Apple Safari</a></li>
                                            <li>• <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Microsoft Edge</a></li>
                                        </ul>
                                    </div>

                                    <div className="bg-secondary rounded-lg p-6">
                                        <h3 className="font-semibold text-primary">Cookie Preference Center</h3>
                                        <p className="mt-2 text-tertiary leading-relaxed">
                                            When you first visit our website, you will see a cookie consent banner that allows you to accept or customize your cookie preferences. You can change your preferences at any time by clicking the "Cookie Settings" link in the footer of our website or by contacting us at privacy@tokentra.io.
                                        </p>
                                    </div>

                                    <div className="bg-secondary rounded-lg p-6">
                                        <h3 className="font-semibold text-primary">Do Not Track</h3>
                                        <p className="mt-2 text-tertiary leading-relaxed">
                                            Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. TokenTra respects DNT signals and will disable non-essential cookies when we detect this setting in your browser.
                                        </p>
                                    </div>

                                    <div className="bg-secondary rounded-lg p-6">
                                        <h3 className="font-semibold text-primary">Opt-Out Tools</h3>
                                        <p className="mt-2 text-tertiary leading-relaxed">
                                            You can opt out of interest-based advertising by visiting the following industry opt-out pages:
                                        </p>
                                        <ul className="mt-4 space-y-2 text-tertiary">
                                            <li>• <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Network Advertising Initiative (NAI)</a></li>
                                            <li>• <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Digital Advertising Alliance (DAA)</a></li>
                                            <li>• <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">European Interactive Digital Advertising Alliance (EDAA)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Similar Technologies */}
                            <div>
                                <h2 className="text-2xl font-semibold text-primary">Similar Technologies</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    In addition to cookies, we may use other similar technologies to track and store information:
                                </p>

                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-secondary rounded-lg p-6">
                                        <h3 className="font-semibold text-primary">Local Storage</h3>
                                        <p className="mt-2 text-sm text-tertiary">
                                            We use browser local storage to store preferences and cached data that improves your experience. Unlike cookies, local storage data is not sent to our servers with every request.
                                        </p>
                                    </div>
                                    <div className="bg-secondary rounded-lg p-6">
                                        <h3 className="font-semibold text-primary">Session Storage</h3>
                                        <p className="mt-2 text-sm text-tertiary">
                                            Similar to local storage, but data is cleared when you close your browser tab. We use this for temporary data during your session.
                                        </p>
                                    </div>
                                    <div className="bg-secondary rounded-lg p-6">
                                        <h3 className="font-semibold text-primary">Pixel Tags</h3>
                                        <p className="mt-2 text-sm text-tertiary">
                                            Small transparent images used in emails to track whether messages have been opened. You can disable these by blocking images in your email client.
                                        </p>
                                    </div>
                                    <div className="bg-secondary rounded-lg p-6">
                                        <h3 className="font-semibold text-primary">Fingerprinting</h3>
                                        <p className="mt-2 text-sm text-tertiary">
                                            We do NOT use browser fingerprinting techniques. We believe in transparent tracking methods that you can control.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* International Transfers */}
                            <div>
                                <h2 className="text-2xl font-semibold text-primary">International Data Transfers</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    Some of our third-party cookie providers may transfer data outside of your country of residence. When this occurs, we ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission, to protect your data in accordance with applicable data protection laws including GDPR.
                                </p>
                            </div>

                            {/* Updates to Policy */}
                            <div>
                                <h2 className="text-2xl font-semibold text-primary">Updates to This Policy</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes, we will notify you by updating the "Last updated" date at the top of this policy and, where appropriate, provide additional notice such as a banner on our website or an email notification.
                                </p>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    We encourage you to review this policy periodically to stay informed about our use of cookies and related technologies.
                                </p>
                            </div>

                            {/* Contact */}
                            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
                                <h2 className="text-2xl font-semibold text-primary">Contact Us</h2>
                                <p className="mt-4 text-tertiary leading-relaxed">
                                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                                </p>
                                <ul className="mt-4 space-y-2 text-tertiary">
                                    <li><strong>Email:</strong> <a href="mailto:privacy@tokentra.io" className="text-purple-600 hover:text-purple-700">privacy@tokentra.io</a></li>
                                    <li><strong>Address:</strong> TokenTra, Inc., San Diego, CA, USA</li>
                                    <li><strong>Data Protection Officer:</strong> <a href="mailto:dpo@tokentra.io" className="text-purple-600 hover:text-purple-700">dpo@tokentra.io</a></li>
                                </ul>
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
