"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface AboutProps {
    stats: { value: string; label: string }[];
    data: { title: string; description: string; quote: string; };
    services: { id: number; title: string }[];
    locale: string;
}

const AboutSection: React.FC<AboutProps> = ({ stats, data, services, locale }) => {
    const displayStats = stats || [];
    const displayServices = services || [];

    const t = {
        az: { badge: "Haqqımızda", readMore: "Daha çox oxu", servicesTitle: "Xidmətlərimiz" },
        en: { badge: "About Us", readMore: "Read More", servicesTitle: "Our Services" },
        ru: { badge: "О Нас", readMore: "Читать далее", servicesTitle: "Наши Услуги" },
        tr: { badge: "Hakkımızda", readMore: "Daha Fazla Oku", servicesTitle: "Hizmetlerimiz" }
    }[locale] || { badge: "Haqqımızda", readMore: "Daha çox oxu", servicesTitle: "Xidmətlərimiz" };

    return (
        <section className="relative bg-[#FAFAFC] py-24 lg:py-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 container">
                {/* Top Stats Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {displayStats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white p-8 lg:p-10 rounded-[2rem] border border-blue-50 text-center hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.06)] transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm lg:text-base text-slate-500 font-semibold tracking-wide uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Left */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold tracking-wider uppercase shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            {t.badge}
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-black text-blue-950 leading-tight" dangerouslySetInnerHTML={{ __html: data?.title || "Biznesinizi növbəti səviyyəyə <span class=\"text-blue-600\">qaldırırıq</span>" }} />

                        <p className="text-slate-600 text-xl font-medium leading-relaxed">
                            {data?.description}
                        </p>

                        <Link
                            href={`/${locale}/about`}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 text-blue-950 font-bold rounded-2xl hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)]"
                        >
                            {t.readMore}
                            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                    </div>

                    {/* Right - Services Bento */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-[2.5rem] border border-blue-50 p-8 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">{t.servicesTitle}</h3>
                            <div className="space-y-4">
                                {displayServices.slice(0, 4).map((service, index) => (
                                    <div
                                        key={service.id}
                                        className="group p-6 rounded-2xl bg-slate-50/50 hover:bg-blue-50/50 flex items-center justify-between cursor-pointer border border-transparent hover:border-blue-100 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 font-bold group-hover:text-blue-600 transition-colors">
                                                0{index + 1}
                                            </div>
                                            <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                                {service.title}
                                            </h4>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:-rotate-45 transition-all shadow-sm group-hover:shadow-md">
                                            <FaArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Quote */}
                <div className="mt-24 pt-16 border-t border-slate-200/60 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-[#FAFAFC] flex justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-300" />
                    </div>
                    <blockquote className="text-center max-w-4xl mx-auto">
                        <p className="text-2xl lg:text-4xl text-slate-400 font-medium italic leading-relaxed" dangerouslySetInnerHTML={{ __html: data?.quote || "\"Mürəkkəb texnologiyaları sadə, effektiv və biznes dəyəri yaradan həllərə çeviririk.\"" }} />
                    </blockquote>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;