// next.config.ts
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

const allowImage = [
    "i.ytimg.com",
    "i.pinimg.com",
    "images.pexels.com",
    "images.unsplash.com",
    "cdn.sanity.io",
    "lh3.googleusercontent.com",
];

const nextConfig: NextConfig = {
    output: "standalone",
    reactStrictMode: false,
    images: {
        remotePatterns: [
            ...allowImage.map((domain) => ({
                protocol: "https" as const,
                hostname: domain,
            })),
            {
                protocol: "https",
                hostname: "**.togruleminov.site",
            },
            {
                protocol: "http",
                hostname: "127.0.0.1",
            },
            {
                protocol: "http",
                hostname: "localhost",
            },
        ],
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 1024, 1920],
        minimumCacheTTL: isDev ? 0 : 60,
        dangerouslyAllowSVG: true,
        contentDispositionType: "attachment",
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        unoptimized: false,
    },

    compress: true,
    poweredByHeader: false,

    compiler: {
        removeConsole: isDev ? false : { exclude: ["error", "warn"] },
    },

    experimental: {
        workerThreads: false,
        cpus: 1,
        turbopackMemoryLimit: isDev ? 2048 : undefined,
        optimizePackageImports: [
            "react-icons",
            "recharts",
            "react-hook-form",
            "zod",
            "@tanstack/react-query",
        ],
    },

    staticPageGenerationTimeout: 180,

    transpilePackages: [
        "d3",
        "d3-geo",
        "d3-selection",
        "d3-path",
        "d3-shape",
        "d3-scale",
        "d3-array",
        "d3-geo-projection",
        "three", // ✅ three.js əlavə edildi
        "@google/model-viewer", // ✅ model-viewer əlavə edildi
    ],

    typescript: {
        ignoreBuildErrors: false,
    },
    // @ts-ignore
    eslint: {
        ignoreDuringBuilds: true,
    },

    webpack: (config, { isServer }) => {
        // ✅ Server-side: Leaflet-i ignore et
        if (isServer) {
            config.resolve.alias = {
                ...config.resolve.alias,
                leaflet: false,
                "react-leaflet": false,
            };
        }

        // ✅ Client-side: three.js və model-viewer üçün alias
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                net: false,
                tls: false,
                canvas: false,
            };

            // ✅ three.js resolve
            config.resolve.alias = {
                ...config.resolve.alias,
                three: path.resolve("./node_modules/three"),
            };
        }
        return config;
    },

    async rewrites() {
        return [
            {
                source: '/media/:path*',
                destination: 'http://127.0.0.1:8000/media/:path*',
            },
        ];
    },

    async headers() {
        const cspHeader = `
            default-src 'self';
            script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
            style-src 'self' 'unsafe-inline';
            img-src 'self' blob: data: https: http:;
            font-src 'self' data: https: http:;
            connect-src 'self' http://127.0.0.1:* http://localhost:* ws://127.0.0.1:* ws://localhost:* wss: https: http://neymantech.com https://neymantech.com http://api.neymantech.com https://api.neymantech.com https://www.google-analytics.com;
            object-src 'none';
            base-uri 'self';
            form-action 'self';
            frame-ancestors 'none';
        `.replace(/\s{2,}/g, ' ').trim()

        return [
            {
                source: "/:path*",
                headers: [
                    { key: "X-DNS-Prefetch-Control", value: "on" },
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
                    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
                    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
                    { key: "Content-Security-Policy", value: cspHeader },
                ],
            },
            {
                source: "/api/:path*",
                headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
            },
            {
                source: "/_next/image/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: isDev
                            ? "no-store, max-age=0"
                            : "public, max-age=3600, immutable",
                    },
                ],
            },
            {
                source: "/:path*.xml",
                headers: [
                    { key: "Content-Type", value: "application/xml" },
                    {
                        key: "Cache-Control",
                        value:
                            "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
                    },
                ],
            },
            {
                source: "/manifest.json",
                headers: [
                    { key: "Content-Type", value: "application/json" },
                    {
                        key: "Cache-Control",
                        // manifest üçün daha qısa vaxt: 1 saat
                        value: "public, max-age=3600, s-maxage=3600",
                    },
                ],
            },
            {
                source: "/_next/static/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: isDev
                            ? "no-cache, no-store, must-revalidate"
                            : "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                // İkonlar və tez-tez dəyişə bilən şəkillər üçün
                source: "/:path*\\.(png|jpg|jpeg|gif|webp|avif|ico|svg)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: isDev
                            ? "no-store, max-age=0"
                            : "public, max-age=86400, must-revalidate", // 1 il (31536000) yerinə 1 gün (86400)
                    },
                ],
            },
            {
                source: "/:path*\\.(woff|woff2|ttf|eot)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: isDev
                            ? "no-store, max-age=0"
                            : "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
};

const withNextIntl = createNextIntlPlugin({
    requestConfig: "./src/i18n/request.ts",
});

export default withNextIntl(nextConfig);