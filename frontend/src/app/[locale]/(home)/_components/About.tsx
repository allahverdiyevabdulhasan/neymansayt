"use client";

import React from "react";
import Link from "next/link";

interface AboutProps {
    stats: { value: string; label: string }[];
    data: { title: string; description: string; quote: string; };
    services: { id: number; title: string }[];
    locale: string;
}

const AboutSection: React.FC<AboutProps> = ({ stats, data, services, locale }) => {
    const displayStats = stats || [];
    const displayServices = services || [];

    return (
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
            <div className="relative z-10 container">

                {/* Top Stats Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden mb-16">
                    {displayStats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white p-6 lg:p-8 text-center hover:bg-gray-50 transition-colors"
                        >
                            <div className="text-3xl lg:text-4xl font-bold text-[#2563eb] mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left */}
                    <div className="lg:col-span-5 space-y-6">
                        <span className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase">
                            Haqqımızda
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" dangerouslySetInnerHTML={{ __html: data?.title || "Biznesinizi növbəti səviyyəyə <span class=\"text-[#2563eb]\">qaldırırıq</span>" }} />

                        <p className="text-gray-600 text-lg leading-relaxed">
                            {data?.description}
                        </p>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-3 text-[#2563eb] font-semibold border-b-2 border-[#2563eb] pb-1 hover:gap-4 transition-all"
                        >
                            Daha çox oxu
                            <span className="text-xl">→</span>
                        </Link>
                    </div>

                    {/* Right */}
                    <div className="lg:col-span-7">
                        <div className="space-y-0 divide-y divide-gray-100 border-t border-b border-gray-100">
                            {displayServices.slice(0, 4).map((service, index) => (
                                <div
                                    key={service.id}
                                    className="group py-6 flex items-center justify-between cursor-pointer hover:pl-4 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className="text-gray-300 text-sm font-medium w-6">
                                            0{index + 1}
                                        </span>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <span className="text-gray-300 text-2xl group-hover:text-[#2563eb] group-hover:translate-x-2 transition-all">
                                        →
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Quote */}
                <div className="mt-20 pt-12 border-t border-gray-100">
                    <blockquote className="text-center max-w-3xl mx-auto">
                        <p className="text-2xl lg:text-3xl text-gray-400 font-light italic leading-relaxed" dangerouslySetInnerHTML={{ __html: data?.quote || "\"Mürəkkəb texnologiyaları sadə, effektiv və biznes dəyəri yaradan həllərə çeviririk.\"" }} />
                    </blockquote>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;