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
        <section className="py-24 bg-[#0A0F1C] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-500 font-bold uppercase tracking-wider text-sm mb-4 block">Xidmətlərimiz</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        Sizin Üçün <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Nə Edirik?</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
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
                            className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white/10 transition-colors group flex flex-col h-full"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.iconBg} ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <ul className="space-y-3 mb-8 flex-1">
                                {item.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                        <FaCircleCheck className={`${item.iconColor} mt-0.5 shrink-0`} size={16} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href={`/services`} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors mt-auto">
                                Ətraflı <IoArrowForward />
                            </Link>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};
