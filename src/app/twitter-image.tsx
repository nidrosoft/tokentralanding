import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Tokentra - AI Cost Management Platform";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
                    fontFamily: "Inter, sans-serif",
                }}
            >
                {/* Logo Icon */}
                <svg
                    width="120"
                    height="120"
                    viewBox="0 0 80 85"
                    fill="none"
                    style={{ marginBottom: 32 }}
                >
                    <path
                        d="M24.4211 56.4923L0.35123 56.5933C0.264276 56.5933 0.180883 56.5569 0.119397 56.4923C0.0579114 56.4277 0.0233688 56.3401 0.0233688 56.2487C-0.012463 43.1692 -0.00708886 33.7963 0.0394925 28.13C0.163112 14.1187 11.5146 2.0331 24.6022 0.2315C25.6306 0.0885 28.4559 0.0245 33.0782 0.0395C37.3386 0.0584 43.8744 0.0452 52.6854 0C52.7823 0 52.8753 0.0405 52.9438 0.1125C53.0124 0.1845 53.0509 0.2822 53.0509 0.384V28.1752C53.0509 28.2396 53.0752 28.3014 53.1186 28.3469C53.1619 28.3925 53.2207 28.418 53.282 28.418H79.6829C79.721 28.418 79.7587 28.4258 79.794 28.4408C79.8292 28.4559 79.8612 28.4779 79.8881 28.5057C79.9151 28.5335 79.9364 28.5665 79.951 28.6028C79.9656 28.6391 79.9731 28.6781 79.9731 28.7174C79.9839 31.2361 79.9928 39.4231 80 53.2782C80 57.7133 79.7187 60.9813 79.1562 63.0822C75.8238 75.501 64.6926 84.983 52.2178 84.96C45.2198 84.949 36.9069 84.962 27.2788 85C27.189 85 27.1029 84.963 27.0394 84.897C26.9759 84.832 26.9402 84.743 26.9402 84.65V58.8802C26.9402 58.8402 41.6988 58.9172 41.6842 58.8802C41.6696 58.8432 41.7112 34.1169 41.6842 34.0885C41.6573 34.0602 24.4563 34.1039 24.4211 34.0885C24.3858 34.0732 24.4592 56.4923 24.4211 56.4923Z"
                        fill="url(#gradient)"
                    />
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="40"
                            y1="0"
                            x2="40"
                            y2="85"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#7D26EB" />
                            <stop offset="1" stopColor="#471685" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Title */}
                <div
                    style={{
                        display: "flex",
                        fontSize: 64,
                        fontWeight: 700,
                        color: "white",
                        marginBottom: 16,
                        letterSpacing: "-0.02em",
                    }}
                >
                    Tokentra
                </div>

                {/* Tagline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: 28,
                        color: "#a1a1aa",
                        textAlign: "center",
                        maxWidth: 800,
                        lineHeight: 1.4,
                    }}
                >
                    AI Cost Management & Optimization Platform
                </div>

                {/* Features */}
                <div
                    style={{
                        display: "flex",
                        gap: 48,
                        marginTop: 48,
                    }}
                >
                    {["Track Spending", "Optimize Costs", "Set Budgets"].map((feature) => (
                        <div
                            key={feature}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                color: "#d4d4d8",
                                fontSize: 20,
                            }}
                        >
                            <div
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    background: "linear-gradient(135deg, #7D26EB 0%, #471685 100%)",
                                }}
                            />
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
