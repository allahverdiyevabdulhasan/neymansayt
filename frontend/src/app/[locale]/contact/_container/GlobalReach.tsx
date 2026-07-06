"use client";
import React from "react";
import { MotionDiv } from "@/lib/motion";
import { FaArrowRight } from "react-icons/fa6";

interface GlobalReachProps {
    locale: string;
}

const regions = [
    {
        id: "az",
        name: "Azərbaycan",
        clients: "100+",
        color: "from-blue-500 to-blue-600",
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200"
    },
    {
        id: "tr",
        name: "Türkiyə",
        clients: "45+",
        color: "from-red-500 to-red-600",
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200"
    },
    {
        id: "kw",
        name: "Küveyt",
        clients: "15+",
        color: "from-emerald-500 to-emerald-600",
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200"
    },
    {
        id: "eu",
        name: "Avropa",
        clients: "30+",
        color: "from-indigo-500 to-indigo-600",
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200"
    }
];

export default function GlobalReach({ locale }: GlobalReachProps) {
    const title = locale === 'az' ? 'Qlobal Fəaliyyət Coğrafiyamız' : locale === 'ru' ? 'Наша Глобальная География' : 'Our Global Reach';
    const subtitle = locale === 'az' ? 'Biz yalnız yerli bazarla kifayətlənmir, dünyanın müxtəlif ölkələrindəki müştərilərimizə qabaqcıl texnoloji həllər təqdim edirik.' 
                   : locale === 'ru' ? 'Мы не ограничиваемся локальным рынком, предоставляя передовые технологические решения клиентам по всему миру.' 
                   : 'We are not limited to the local market, providing advanced technological solutions to clients across various countries.';

    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                style={{
                    backgroundImage: `radial-gradient(#2563eb 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="container relative z-10 mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4 block">
                        Sərhədsiz Xidmət
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                        {title}
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                {/* Arrow Flow Layout */}
                <div className="relative">
                    {/* Continuous Line for Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0 rounded-full" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                        {regions.map((region, index) => (
                            <div key={region.id} className="relative group">
                                <MotionDiv
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center relative z-10"
                                >
                                    <div className={`w-20 h-20 rounded-full ${region.bg} ${region.text} flex items-center justify-center text-2xl font-black mb-6 border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-500`}>
                                        {region.clients}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{region.name}</h3>
                                    <p className="text-slate-500 font-medium uppercase tracking-wider text-xs">Məmnun Müştəri</p>
                                </MotionDiv>

                                {/* Arrow connecting items (except last one) */}
                                {index < regions.length - 1 && (
                                    <div className="hidden lg:flex absolute top-1/2 -right-8 w-16 h-16 -translate-y-1/2 items-center justify-center z-20 pointer-events-none">
                                        <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-400 border border-slate-100">
                                            <FaArrowRight size={14} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
