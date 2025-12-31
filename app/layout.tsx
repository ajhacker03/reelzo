import type React from "react";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Reelzo - Affordable, Fast & Professional Video Creation",
    description:
        "Hyperlocal content creation service connecting businesses with skilled creators for reels, videos, and digital content.",
    generator: "v0.app",
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${leagueSpartan.className} antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
