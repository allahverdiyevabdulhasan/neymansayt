// app/[locale]/(home)/_components/SystemsSlider.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaChartLine, FaUtensils, FaGraduationCap } from "react-icons/fa6";

interface SystemItem {
    name: string;
    tag: string;
    description: string;
    image: string;
    href: string;
    icon: React.ReactNode;
}

export default function SystemsSlider({ locale }: { locale: string }) {
    const systems: SystemItem[] = [
        {
            name: "Neyman Edu CRM",
            tag: "Təhsil İdarəetməsi",
            description: "Kafedralar, kurslar və akademiyalar üçün rəqəmsal Kanban, dərslərin planlanması, avtomatik maaş modulu və satış komissiyası.",
            image: "/assets/dashboard_charts.png",
            href: `/${locale}/contact`,
            icon: <FaGraduationCap className="text-blue-600" />
        },
        {
            name: "Avaz QR Menu & KDS",
            tag: "Restoran Avtomatlaşdırılması",
            description: "Müştərilər üçün rəqəmsal menyu və anlıq sifariş, mətbəx üçün anlıq KDS ekranı və ofisiant ağıllı çağırış sistemi.",
            image: "/assets/dashboard_finance.png",
            href: `/${locale}/contact`,
            icon: <FaUtensils className="text-emerald-600" />
        },
        {
            name: "Neyman Edu Soft ERP",
            tag: "Böyük Müəssisələr Üçün",
            description: "Şirkətdaxili əlaqələr, kadrların idarə edilməsi, əməkdaşlar üzrə performans hesabatlığı və tam əməliyyat nəzarəti.",
            image: "/assets/dashboard_charts.png",
            href: `/${locale}/contact`,
            icon: <FaChartLine className="text-purple-600" />
        }
    ];

    const marqueeItems = [...systems, ...systems, ...systems];

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mb-16 text-center relative z-10">
                <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-100 mb-6 shadow-sm">
                    <span>Neyman Məhsulları</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-blue-950 leading-tight tracking-tight mb-4">
                    Şəxsi CRM & Rəqəmsal <span className="text-blue-600">Sistemlərimiz</span>
                </h2>
                <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                    Biznesinizin hər bir sahəsini kağız və Excel xaosundan uzaqlaşdıraraq anlıq, şəffaf idarəetməyə keçirin.
                </p>
            </div>

            {/* Marquee Row Container */}
            <div className="relative w-full flex items-center overflow-hidden py-8 z-10">
                {/* Infinite horizontal scroll styles */}
                <style jsx global>{`
                    @keyframes infiniteScroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-33.333%);
                        }
                    }
                    .marquee-container {
                        display: flex;
                        width: 300%;
                        animation: infiniteScroll 45s linear infinite;
                    }
                    .marquee-container:hover {
                        animation-play-state: paused;
                    }
                `}</style>

                <div className="marquee-container gap-8 px-4">
                    {marqueeItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="w-[450px] flex-shrink-0 bg-white border border-blue-50/50 rounded-[2rem] p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] hover:border-blue-100 transition-all duration-500 group"
                        >
                            {/* Graphic mockup wrapper */}
                            <div className="w-full h-56 bg-slate-50 rounded-2xl overflow-hidden mb-8 relative border border-slate-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x300/eff6ff/1e3a8a?text=' + encodeURIComponent(item.name);
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none" />
                                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-950 rounded-full shadow-sm border border-white/50 flex items-center gap-2">
                                    {item.icon}
                                    <span>{item.tag}</span>
                                </span>
                            </div>

                            {/* Details */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium min-h-[60px]">
                                    {item.description}
                                </p>

                                <Link
                                    href={item.href}
                                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors pt-4 border-t border-blue-50/50 w-full"
                                >
                                    Məlumat Al <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
