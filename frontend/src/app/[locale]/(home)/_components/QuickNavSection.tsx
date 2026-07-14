"use client";

import React from "react";
import { MotionDiv } from "@/lib/motion";
import Link from "next/link";
import { getTranslated } from "@/lib/api";
import { 
    FaLaptopCode, 
    FaCloud, 
    FaMobileAlt, 
    FaChartLine, 
    FaPaintBrush, 
    FaRocket, 
    FaHeadset, 
    FaServer,
    FaBoxOpen
} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

// Dynamic Icon Mapper
const IconMapper: Record<string, React.ReactNode> = {
    "FaLaptopCode": <FaLaptopCode size={28} />,
    "FaCloud": <FaCloud size={28} />,
    "FaMobileAlt": <FaMobileAlt size={28} />,
    "FaChartLine": <FaChartLine size={28} />,
    "FaPaintBrush": <FaPaintBrush size={28} />,
    "FaRocket": <FaRocket size={28} />,
    "FaHeadset": <FaHeadset size={28} />,
    "FaServer": <FaServer size={28} />
};

const WatermarkMapper: Record<string, React.ReactNode> = {
    "FaLaptopCode": <FaLaptopCode size={120} />,
    "FaCloud": <FaCloud size={120} />,
    "FaMobileAlt": <FaMobileAlt size={120} />,
    "FaChartLine": <FaChartLine size={120} />,
    "FaPaintBrush": <FaPaintBrush size={120} />,
    "FaRocket": <FaRocket size={120} />,
    "FaHeadset": <FaHeadset size={120} />,
    "FaServer": <FaServer size={120} />
};

const colors = ["blue", "indigo", "emerald", "orange", "pink", "purple", "teal", "cyan"];

const colorMap: Record<string, { bg: string, text: string, hoverBg: string, border: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", hoverBg: "group-hover:bg-blue-600", border: "border-blue-100" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", hoverBg: "group-hover:bg-indigo-600", border: "border-indigo-100" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", hoverBg: "group-hover:bg-emerald-600", border: "border-emerald-100" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", hoverBg: "group-hover:bg-orange-600", border: "border-orange-100" },
    pink: { bg: "bg-pink-50", text: "text-pink-600", hoverBg: "group-hover:bg-pink-600", border: "border-pink-100" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", hoverBg: "group-hover:bg-purple-600", border: "border-purple-100" },
    teal: { bg: "bg-teal-50", text: "text-teal-600", hoverBg: "group-hover:bg-teal-600", border: "border-teal-100" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600", hoverBg: "group-hover:bg-cyan-600", border: "border-cyan-100" },
};

interface QuickNavProps {
    servicesData: any[];
    locale: string;
}

export const QuickNavSection: React.FC<QuickNavProps> = ({ servicesData = [], locale }) => {
    const t = {
        az: {
            badge: "Xidmətlərimiz",
            title1: "Sizin Üçün",
            title2: "Nə Edirik?",
            desc: "Biznesinizi rəqəmsal dünyada inkişaf etdirmək üçün ehtiyacınız olan bütün texnoloji həllər bir ünvanda cəmləşib.",
            btn: "Bütün Xidmətlər",
            details: "Ətraflı",
            empty: "Xidmətlər əlavə edilməyib."
        },
        en: {
            badge: "Our Services",
            title1: "What Do",
            title2: "We Do?",
            desc: "All the technological solutions you need to grow your business in the digital world are gathered in one place.",
            btn: "All Services",
            details: "Details",
            empty: "No services added."
        },
        ru: {
            badge: "Наши Услуги",
            title1: "Что Мы",
            title2: "Делаем?",
            desc: "Все технологические решения, необходимые для развития вашего бизнеса в цифровом мире, собраны в одном месте.",
            btn: "Все Услуги",
            details: "Подробнее",
            empty: "Услуги не добавлены."
        },
        tr: {
            badge: "Hizmetlerimiz",
            title1: "Sizin İçin",
            title2: "Ne Yapıyoruz?",
            desc: "İşinizi dijital dünyada büyütmek için ihtiyacınız olan tüm teknolojik çözümler tek bir adreste toplandı.",
            btn: "Tüm Hizmetler",
            details: "Detaylar",
            empty: "Hizmet eklenmedi."
        }
    }[locale as 'az' | 'en' | 'ru' | 'tr'] || {
            badge: "Xidmətlərimiz",
            title1: "Sizin Üçün",
            title2: "Nə Edirik?",
            desc: "Biznesinizi rəqəmsal dünyada inkişaf etdirmək üçün ehtiyacınız olan bütün texnoloji həllər bir ünvanda cəmləşib.",
            btn: "Bütün Xidmətlər",
            details: "Ətraflı",
            empty: "Xidmətlər əlavə edilməyib."
    };

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Very Subtle Background Ornaments */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">{t.badge}</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            {t.title1} <span className="text-blue-600">{t.title2}</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed">
                            {t.desc}
                        </p>
                    </div>
                    <Link href={`/${locale}/services`} className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:text-blue-600 transition-all shadow-sm">
                        {t.btn} <IoArrowForward />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesData && servicesData.length > 0 ? servicesData.map((item, index) => {
                        const colorKey = colors[index % colors.length];
                        const style = colorMap[colorKey];
                        const title = getTranslated(item, 'title', locale);
                        const deliverablesStr = getTranslated(item, 'deliverables', locale);
                        const features = deliverablesStr ? deliverablesStr.split('\n').filter((f: string) => f.trim() !== '').slice(0, 4) : [];
                        const icon = item.icon_name && IconMapper[item.icon_name] ? IconMapper[item.icon_name] : <FaBoxOpen size={28} />;
                        const watermark = item.icon_name && WatermarkMapper[item.icon_name] ? WatermarkMapper[item.icon_name] : <FaBoxOpen size={120} />;

                        return (
                            <MotionDiv
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className={`group bg-white p-8 rounded-2xl flex flex-col h-full relative overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 hover:-translate-y-1`}
                            >
                                {/* Watermark Icon */}
                                <div className={`absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 ${style.text} pointer-events-none transform -rotate-12 group-hover:-rotate-0 group-hover:scale-110`}>
                                    {watermark}
                                </div>
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-8 bg-white border shadow-sm transition-all duration-500 ${style.border} ${style.text} group-hover:text-white ${style.hoverBg}`}>
                                        {icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-blue-600 transition-colors">{title}</h3>
                                    
                                    <ul className="space-y-4 mb-8 flex-1">
                                        {features.map((feature: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-500 text-sm font-medium group-hover:text-slate-700 transition-colors">
                                                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors ${style.bg.replace('bg-', 'bg-').replace('-50', '-400')} group-hover:bg-blue-500`} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <Link href={`/${locale}/services/${item.slug || item.id}`} className={`inline-flex items-center gap-2 text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-auto ${style.text}`}>
                                        {t.details} <IoArrowForward />
                                    </Link>
                                </div>
                            </MotionDiv>
                        );
                    }) : (
                        <p className="text-slate-500 col-span-full text-center">{t.empty}</p>
                    )}
                </div>
                
                <div className="mt-10 md:hidden text-center">
                    <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:text-blue-600 transition-all shadow-sm w-full justify-center">
                        {t.btn} <IoArrowForward />
                    </Link>
                </div>
            </div>
        </section>
    );
};
