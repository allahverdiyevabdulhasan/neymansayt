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
    const t = {
        az: {
            badge: "Neyman Məhsulları",
            title1: "Şəxsi CRM & Rəqəmsal ",
            title2: "Sistemlərimiz",
            desc: "Biznesinizin hər bir sahəsini kağız və Excel xaosundan uzaqlaşdıraraq anlıq, şəffaf idarəetməyə keçirin.",
            readMore: "Məlumat Al",
            sys1: "Kafedralar, kurslar və akademiyalar üçün rəqəmsal Kanban, dərslərin planlanması, avtomatik maaş modulu və satış komissiyası.",
            sys2: "Müştərilər üçün rəqəmsal menyu və anlıq sifariş, mətbəx üçün anlıq KDS ekranı və ofisiant ağıllı çağırış sistemi.",
            sys3: "Şirkətdaxili əlaqələr, kadrların idarə edilməsi, əməkdaşlar üzrə performans hesabatlığı və tam əməliyyat nəzarəti."
        },
        en: {
            badge: "Neyman Products",
            title1: "Custom CRM & Digital ",
            title2: "Systems",
            desc: "Move your business away from paper and Excel chaos to instant, transparent management.",
            readMore: "Learn More",
            sys1: "Digital Kanban for departments, courses and academies, lesson planning, automatic salary module and sales commission.",
            sys2: "Digital menu and instant ordering for customers, instant KDS screen for kitchen and smart waiter call system.",
            sys3: "Internal communications, HR management, employee performance reporting and full operational control."
        },
        ru: {
            badge: "Продукты Neyman",
            title1: "Собственные CRM и Цифровые ",
            title2: "Системы",
            desc: "Переведите свой бизнес от хаоса бумаги и Excel к мгновенному, прозрачному управлению.",
            readMore: "Узнать больше",
            sys1: "Цифровой канбан для кафедр, курсов и академий, планирование уроков, автоматический модуль зарплаты и комиссия с продаж.",
            sys2: "Цифровое меню и мгновенный заказ для клиентов, мгновенный экран KDS для кухни и умная система вызова официанта.",
            sys3: "Внутренние коммуникации, управление персоналом, отчетность о производительности сотрудников и полный операционный контроль."
        },
        tr: {
            badge: "Neyman Ürünleri",
            title1: "Özel CRM ve Dijital ",
            title2: "Sistemlerimiz",
            desc: "İşletmenizin her alanını kağıt ve Excel kaosundan uzaklaştırarak anlık, şeffaf yönetime geçin.",
            readMore: "Bilgi Al",
            sys1: "Bölümler, kurslar ve akademiler için dijital Kanban, ders planlaması, otomatik maaş modülü ve satış komisyonu.",
            sys2: "Müşteriler için dijital menü ve anlık sipariş, mutfak için anlık KDS ekranı ve akıllı garson çağrı sistemi.",
            sys3: "Şirket içi iletişim, İK yönetimi, çalışan performans raporlaması ve tam operasyonel kontrol."
        }
    }[locale] || {
        badge: "Neyman Məhsulları",
        title1: "Şəxsi CRM & Rəqəmsal ",
        title2: "Sistemlərimiz",
        desc: "Biznesinizin hər bir sahəsini kağız və Excel xaosundan uzaqlaşdıraraq anlıq, şəffaf idarəetməyə keçirin.",
        readMore: "Məlumat Al",
        sys1: "Kafedralar, kurslar və akademiyalar üçün rəqəmsal Kanban, dərslərin planlanması, avtomatik maaş modulu və satış komissiyası.",
        sys2: "Müştərilər üçün rəqəmsal menyu və anlıq sifariş, mətbəx üçün anlıq KDS ekranı və ofisiant ağıllı çağırış sistemi.",
        sys3: "Şirkətdaxili əlaqələr, kadrların idarə edilməsi, əməkdaşlar üzrə performans hesabatlığı və tam əməliyyat nəzarəti."
    };

    const systems: SystemItem[] = [
        {
            name: "Neyman Edu CRM",
            tag: locale === 'az' ? "Təhsil İdarəetməsi" : locale === 'en' ? "Education Management" : locale === 'ru' ? "Управление образованием" : "Eğitim Yönetimi",
            description: t.sys1,
            image: "/assets/dashboard_charts.png",
            href: `/${locale}/contact`,
            icon: <FaGraduationCap className="text-blue-600" />
        },
        {
            name: "Avaz QR Menu & KDS",
            tag: locale === 'az' ? "Restoran Avtomatlaşdırılması" : locale === 'en' ? "Restaurant Automation" : locale === 'ru' ? "Автоматизация ресторанов" : "Restoran Otomasyonu",
            description: t.sys2,
            image: "/assets/dashboard_finance.png",
            href: `/${locale}/contact`,
            icon: <FaUtensils className="text-emerald-600" />
        },
        {
            name: "Neyman Soft ERP",
            tag: locale === 'az' ? "Böyük Müəssisələr Üçün" : locale === 'en' ? "For Large Enterprises" : locale === 'ru' ? "Для крупных предприятий" : "Büyük İşletmeler İçin",
            description: t.sys3,
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
                    <span>{t.badge}</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-blue-950 leading-tight tracking-tight mb-4">
                    {t.title1}<span className="text-blue-600">{t.title2}</span>
                </h2>
                <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                    {t.desc}
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
                                    {t.readMore} <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
