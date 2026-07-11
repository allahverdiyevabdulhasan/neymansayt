"use client";

import React from "react";
import { MotionDiv } from "@/lib/motion";
import Link from "next/link";
import { 
    FaLaptopCode, 
    FaCloud, 
    FaMobileAlt, 
    FaChartLine, 
    FaPaintBrush, 
    FaRocket, 
    FaHeadset, 
    FaServer 
} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

const services = [
    {
        id: "web",
        title: "Vebsayt Hazırlanması",
        features: ["Korporativ Saytlar", "E-ticarət Platformaları", "Landing Səhifələr", "SEO Optimizasiyalı"],
        icon: <FaLaptopCode size={28} />,
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-400"
    },
    {
        id: "saas",
        title: "SaaS & CRM Sistemləri",
        features: ["Fərdi CRM həlləri", "ERP Sistemləri", "Avtomatlaşdırma", "B2B/B2C Portallar"],
        icon: <FaCloud size={28} />,
        iconBg: "bg-indigo-500/20",
        iconColor: "text-indigo-400"
    },
    {
        id: "mobile",
        title: "Mobil Tətbiq",
        features: ["iOS Tətbiqlər", "Android Tətbiqlər", "Cross-Platform (Flutter)", "Tətbiq İdarəetməsi"],
        icon: <FaMobileAlt size={28} />,
        iconBg: "bg-emerald-500/20",
        iconColor: "text-emerald-400"
    },
    {
        id: "seo",
        title: "SEO & Marketinq",
        features: ["Texniki SEO", "Kontent Marketinq", "SMM Xidmətləri", "Konversiya Optimizasiyası"],
        icon: <FaChartLine size={28} />,
        iconBg: "bg-orange-500/20",
        iconColor: "text-orange-400"
    },
    {
        id: "uiux",
        title: "UI/UX Dizayn",
        features: ["İstifadəçi Təcrübəsi (UX)", "İstifadəçi İnterfeysi (UI)", "Prototip Hazırlanması", "Dizayn Sistemləri"],
        icon: <FaPaintBrush size={28} />,
        iconBg: "bg-pink-500/20",
        iconColor: "text-pink-400"
    },
    {
        id: "startup",
        title: "Startap Tech Partner",
        features: ["İdeya Doğrulanması", "MVP Yığılması", "Məhsulun İnkişafı", "Texniki Konsultasiya"],
        icon: <FaRocket size={28} />,
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-400"
    },
    {
        id: "support",
        title: "Texniki Dəstək",
        features: ["24/7 Monitorinq", "Baqların Düzəldilməsi", "Təhlükəsizlik Yeniləməsi", "Müntəzəm Back-up"],
        icon: <FaHeadset size={28} />,
        iconBg: "bg-teal-500/20",
        iconColor: "text-teal-400"
    },
    {
        id: "server",
        title: "Server İdarəetməsi",
        features: ["Cloud Serverlər", "Dedike Serverlər", "Təhlükəsizlik Auditi", "Yük Balanslaşdırılması"],
        icon: <FaServer size={28} />,
        iconBg: "bg-cyan-500/20",
        iconColor: "text-cyan-400"
    }
];

export const QuickNavSection = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-b border-blue-50/50">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold tracking-wide uppercase shadow-sm mb-6">Xidmətlərimiz</span>
                    <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-6 tracking-tight">
                        Sizin Üçün <span className="text-blue-600">Nə Edirik?</span>
                    </h2>
                    <p className="text-slate-600 text-lg font-medium leading-relaxed">
                        Biznesinizi rəqəmsal dünyada inkişaf etdirmək üçün ehtiyacınız olan bütün texnoloji həllər bir ünvanda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, index) => (
                        <MotionDiv
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="bg-white border border-blue-50/50 p-8 rounded-3xl hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)] group flex flex-col h-full relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black text-blue-950 mb-4 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {item.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                                            <FaCircleCheck className={`text-blue-500 mt-0.5 shrink-0`} size={16} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href={`/services`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mt-auto">
                                    Ətraflı <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};
