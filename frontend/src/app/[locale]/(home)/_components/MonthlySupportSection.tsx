"use client";

import React from "react";
import { MotionDiv } from "@/lib/motion";
import { FaShieldHalved, FaChartLine, FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export const MonthlySupportSection: React.FC<{ locale: string }> = ({ locale }) => {
    const t = {
        az: {
            badge: "Aylıq Dəstək",
            title1: "Layihə bitdikdən sonra da",
            title2: "yanınızdayıq.",
            desc: "Rəqəmsal məhsulunuzun həmişə aktual, sürətli və təhlükəsiz qalması üçün xüsusi hazırlanmış aylıq dəstək paketləri ilə işinizi böyüdün.",
            btn1: "Dəstək Paketi Seçin",
            btn2: "Daha Ətraflı",
            techSupport: "Texniki Dəstək",
            techFeatures: [
                "Serverlərin 7/24 izlənməsi",
                "Təhlükəsizlik yeniləmələri",
                "Baqların dərhal həlli",
                "Müntəzəm Back-up"
            ],
            seo: "Böyümə & SEO",
            seoFeatures: [
                "Google-da üst sıralara çıxma",
                "Məzmun optimizasiyası",
                "Sürət (PageSpeed) artımı",
                "Konversiya analitikası"
            ]
        },
        en: {
            badge: "Monthly Support",
            title1: "We are with you even after",
            title2: "the project is done.",
            desc: "Grow your business with specially designed monthly support packages to keep your digital product always up-to-date, fast, and secure.",
            btn1: "Choose a Support Package",
            btn2: "Learn More",
            techSupport: "Technical Support",
            techFeatures: [
                "24/7 server monitoring",
                "Security updates",
                "Immediate bug resolution",
                "Regular Back-ups"
            ],
            seo: "Growth & SEO",
            seoFeatures: [
                "Top rankings on Google",
                "Content optimization",
                "Speed (PageSpeed) boost",
                "Conversion analytics"
            ]
        },
        ru: {
            badge: "Ежемесячная Поддержка",
            title1: "Мы с вами даже после",
            title2: "завершения проекта.",
            desc: "Развивайте свой бизнес с помощью специально разработанных пакетов ежемесячной поддержки, чтобы ваш цифровой продукт всегда оставался актуальным, быстрым и безопасным.",
            btn1: "Выбрать Пакет",
            btn2: "Подробнее",
            techSupport: "Техническая Поддержка",
            techFeatures: [
                "Круглосуточный мониторинг серверов",
                "Обновления безопасности",
                "Мгновенное решение ошибок",
                "Регулярное резервное копирование"
            ],
            seo: "Рост и SEO",
            seoFeatures: [
                "Выход в ТОП Google",
                "Оптимизация контента",
                "Увеличение скорости (PageSpeed)",
                "Аналитика конверсий"
            ]
        },
        tr: {
            badge: "Aylık Destek",
            title1: "Proje bittikten sonra da",
            title2: "yanınızdayız.",
            desc: "Dijital ürününüzün her zaman güncel, hızlı ve güvenli kalması için özel olarak hazırlanmış aylık destek paketleri ile işinizi büyütün.",
            btn1: "Destek Paketi Seçin",
            btn2: "Daha Fazla",
            techSupport: "Teknik Destek",
            techFeatures: [
                "7/24 Sunucu izleme",
                "Güvenlik güncellemeleri",
                "Hataların anında çözümü",
                "Düzenli Yedekleme (Back-up)"
            ],
            seo: "Büyüme & SEO",
            seoFeatures: [
                "Google'da üst sıralara çıkma",
                "İçerik optimizasyonu",
                "Hız (PageSpeed) artışı",
                "Dönüşüm analitiği"
            ]
        }
    }[locale as 'az' | 'en' | 'ru' | 'tr'] || {
        badge: "Aylıq Dəstək",
        title1: "Layihə bitdikdən sonra da",
        title2: "yanınızdayıq.",
        desc: "Rəqəmsal məhsulunuzun həmişə aktual, sürətli və təhlükəsiz qalması üçün xüsusi hazırlanmış aylıq dəstək paketləri ilə işinizi böyüdün.",
        btn1: "Dəstək Paketi Seçin",
        btn2: "Daha Ətraflı",
        techSupport: "Texniki Dəstək",
        techFeatures: [
            "Serverlərin 7/24 izlənməsi",
            "Təhlükəsizlik yeniləmələri",
            "Baqların dərhal həlli",
            "Müntəzəm Back-up"
        ],
        seo: "Böyümə & SEO",
        seoFeatures: [
            "Google-da üst sıralara çıxma",
            "Məzmun optimizasiyası",
            "Sürət (PageSpeed) artımı",
            "Konversiya analitikası"
        ]
    };

    return (
        <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            {/* Elegant Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-100/40 blur-[120px] rounded-full pointer-events-none" />
            
            {/* Subtle Grid Pattern for Premium Tech Feel */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.02] pointer-events-none" />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
                    
                    {/* Left Content */}
                    <div className="flex-1 space-y-10">
                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold uppercase tracking-widest mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                                {t.badge}
                            </span>
                            <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-blue-950 mb-6 leading-[1.1] tracking-tight">
                                {t.title1} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.title2}</span>
                            </h2>
                            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                {t.desc}
                            </p>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 pt-2"
                        >
                            <Link href={`/${locale}/contact`} className="group flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.3)] hover:-translate-y-1">
                                {t.btn1}
                                <IoArrowForward size={20} className="group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                            <Link href={`/${locale}/services`} className="flex items-center justify-center px-8 py-4 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold rounded-2xl border border-slate-200 hover:border-blue-200 transition-colors shadow-sm">
                                {t.btn2}
                            </Link>
                        </MotionDiv>
                    </div>

                    {/* Right Cards */}
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                        {/* Decorative connecting line behind cards */}
                        <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent -translate-y-1/2 -z-10" />

                        {/* Card 1: Tech Support */}
                        <MotionDiv
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.15)] hover:-translate-y-2 transition-all duration-500 border border-slate-100"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                <FaShieldHalved size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-blue-950 mb-6">{t.techSupport}</h3>
                            <ul className="space-y-4">
                                {t.techFeatures.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                                            <FaCircleCheck className="text-indigo-500" size={12} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </MotionDiv>

                        {/* Card 2: Growth & SEO */}
                        <MotionDiv
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="group bg-gradient-to-b from-blue-50/80 to-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.15)] hover:-translate-y-2 transition-all duration-500 border border-blue-100/50 mt-0 sm:mt-16 relative overflow-hidden"
                        >
                            {/* Card 2 Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/50 blur-[50px] rounded-full pointer-events-none" />
                            
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-[0_4px_20px_rgba(37,99,235,0.1)] group-hover:scale-110 transition-transform duration-500">
                                    <FaChartLine size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-blue-950 mb-6">{t.seo}</h3>
                                <ul className="space-y-4">
                                    {t.seoFeatures.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                <FaCircleCheck className="text-blue-600" size={12} />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </MotionDiv>
                    </div>
                </div>
            </div>
        </section>
    );
};
