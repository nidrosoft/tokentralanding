import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import { WaitlistProvider } from "@/components/ui/waitlist-modal";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Tokentra — AI Cost Management & Optimization Platform",
    description:
        "Track, analyze, and optimize your AI spending across all providers. Get real-time insights, set budgets, and reduce costs with Tokentra's unified dashboard.",
    keywords: [
        "AI cost management",
        "LLM spending",
        "AI optimization",
        "token tracking",
        "OpenAI costs",
        "Claude costs",
        "AI budget",
        "AI analytics",
    ],
    authors: [{ name: "Tokentra" }],
    creator: "Tokentra",
    publisher: "Tokentra",
    metadataBase: new URL("https://tokentra.io"),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://tokentra.io",
        siteName: "Tokentra",
        title: "Tokentra — AI Cost Management & Optimization Platform",
        description:
            "Track, analyze, and optimize your AI spending across all providers. Get real-time insights, set budgets, and reduce costs with Tokentra's unified dashboard.",
        images: [
            {
                url: "/images/tokentra-og.png",
                width: 1200,
                height: 630,
                alt: "Tokentra - AI Cost Management Platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tokentra — AI Cost Management & Optimization Platform",
        description:
            "Track, analyze, and optimize your AI spending across all providers. Get real-time insights, set budgets, and reduce costs.",
        images: ["/images/tokentra-og.png"],
        creator: "@tokentra",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export const viewport: Viewport = {
    themeColor: "#7f56d9",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>
                        <WaitlistProvider>{children}</WaitlistProvider>
                    </Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
