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
            href: `/${locale}/educrm`,
            icon: <FaGraduationCap className="text-blue-600" />
        },
        {
            name: "Avaz QR Menu & KDS",
            tag: "Restoran Avtomatlaşdırılması",
            description: "Müştərilər üçün rəqəmsal menyu və anlıq sifariş, mətbəx üçün anlıq KDS ekranı və ofisiant ağıllı çağırış sistemi.",
            image: "/assets/dashboard_finance.png",
            href: `/${locale}/qrmenu`,
            icon: <FaUtensils className="text-emerald-600" />
        },
        {
            name: "Neyman Edu Soft ERP",
            tag: "Böyük Müəssisələr Üçün",
            description: "Şirkətdaxili əlaqələr, kadrların idarə edilməsi, əməkdaşlar üzrə performans hesabatlığı və tam əməliyyat nəzarəti.",
            image: "/assets/dashboard_charts.png",
            href: `/${locale}/educrm`,
            icon: <FaChartLine className="text-purple-600" />
        }
    ];

    const marqueeItems = [...systems, ...systems, ...systems];

    return (
        <section className="py-20 bg-slate-50 overflow-hidden relative border-t border-b border-gray-100">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100/30 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100/30 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mb-12 text-center relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-extrabold uppercase tracking-widest rounded-full border border-blue-100 mb-4">
                    <span>NEYMAN MƏHSULLARI</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4">
                    Şəxsi CRM & Rəqəmsal <span className="text-blue-600">Sistemlərimiz</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
                    Biznesinizin hər bir sahəsini kağız və Excel xaosundan uzaqlaşdıraraq anlıq, şəffaf idarəetməyə keçirin.
                </p>
            </div>

            {/* Marquee Row Container */}
            <div className="relative w-full flex items-center overflow-hidden py-4 z-10">
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

                <div className="marquee-container gap-6">
                    {marqueeItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="w-[450px] flex-shrink-0 bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(37,99,235,0.08)] transition-all duration-300 group"
                        >
                            {/* Graphic mockup wrapper */}
                            <div className="w-full h-56 bg-slate-100 rounded-2xl overflow-hidden mb-6 relative border border-slate-200/50">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x300/f1f5f9/1e293b?text=' + encodeURIComponent(item.name);
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 text-[9px] font-black uppercase tracking-wider text-slate-800 rounded-full shadow-sm border border-slate-200/50 flex items-center gap-1.5">
                                    {item.icon}
                                    <span>{item.tag}</span>
                                </span>
                            </div>

                            {/* Details */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-xs text-gray-500 leading-relaxed min-h-[50px]">
                                    {item.description}
                                </p>

                                <Link
                                    href={item.href}
                                    className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-600 group-hover:text-blue-700 transition-colors pt-2 cursor-pointer"
                                >
                                    <span>Təqdimat Slaydını Aç</span>
                                    <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
