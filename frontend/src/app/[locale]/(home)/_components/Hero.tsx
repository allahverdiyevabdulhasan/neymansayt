"use client";

import React from "react";
import { IoArrowForward, IoPlay } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
    data: any;
    locale: string;
}

const HeroSection: React.FC<HeroProps> = ({ data, locale }) => {
    const badge = data?.badge_text || "Yeni: AI Analytics";
    const title = data?.title || "Biznesinizi <span class=\"text-[#2563eb]\">gücləndirən</span> texniki həllər";
    const description = data?.description || "Startup və korporasiyalar üçün custom software, mobil tətbiq və UX/UI dizayn. Növbəti səviyyəyə qalxmaq üçün bizimlə əlaqə saxlayın.";
    const heroImage = data?.hero_image || "https://i.pinimg.com/1200x/54/50/9e/54509e2a32823d2d8b4d773f3ea5c849.jpg";

    const statsArr = data?.stats || [
        { value: "94%", label: "Məmnuniyyət" },
        { value: "+150%", label: "Böyümə" },
        { value: "24/7", label: "Dəstək" },
    ];

    return (
        <section className="relative bg-white overflow-hidden py-10 lg:py-20">
            {/* Minimal dot pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(#2563eb 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                    }}
                />
            </div>
            <div className={"container"}>
                <div className="relative z-10 ">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div className="space-y-6">
                            {/* Badge */}
                            <span
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                                {badge}
                            </span>

                            {/* Heading */}
                            <h1
                                className="text-2xl lg:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight"
                                dangerouslySetInnerHTML={{ __html: title }}
                            />

                            {/* Description */}
                            <p className="text-base lg:text-lg text-gray-600 max-w-lg leading-relaxed">
                                {description}
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563eb] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
                                >
                                    Layihəyə Başla
                                    <IoArrowForward size={16} />
                                </Link>

                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 text-sm font-semibold hover:text-blue-700 transition-colors group"
                                >
                                    <span
                                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
                                        <IoPlay size={12} className="ml-0.5" />
                                    </span>
                                    Portfolio
                                </Link>
                            </div>

                            {/* Compact Stats */}
                            <div className="flex gap-8 pt-6 border-t border-gray-100">
                                {statsArr.map((stat: any, idx: number) => (
                                    <div key={idx}>
                                        <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                                        <div
                                            className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-0.5">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Clean Image */}
                        <div className="relative">
                            <div
                                className="relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xl">
                                {/* Replace with your actual CRM image */}
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        src={heroImage}
                                        alt="NEYMAN"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Subtle overlay */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating stat - minimal */}
                            <div
                                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 p-3">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="min-w-10 min-h-10 p-2 rounded-lg bg-blue-50 flex items-center justify-center">
                                        <span className="text-base font-bold text-blue-600">94%</span>
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-semibold text-gray-900">Məmnuniyyət</div>
                                        <div className="text-xs text-gray-500">Son 12 ay</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative blur */}
                            <div
                                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100/40 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;