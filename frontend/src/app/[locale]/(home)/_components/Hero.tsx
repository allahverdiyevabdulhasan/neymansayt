"use client";

import React from "react";
import { IoArrowForward, IoCheckmarkCircle } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/lib/motion";
import { useTranslations } from "next-intl";

interface HeroProps {
    data: any;
    locale: string;
    partners?: any[];
}

const HeroSection: React.FC<HeroProps> = ({ data, locale, partners = [] }) => {
    const t = useTranslations('Hero');
    const badge = data?.badge_text || t('badge');
    const description = data?.description || t('desc');

    const hardcodedLogos = [
        "/assets/logos/logo1.png",
        "/assets/logos/logo2.png",
        "/assets/logos/logo3.png",
        "/assets/logos/logo4.png",
        "/assets/logos/logo5.png",
    ];

    const displayLogos = partners.length > 0 
        ? partners.map(p => p.logo) 
        : hardcodedLogos;

    return (
        <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-white">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
            
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    
                    {/* Left Content */}
                    <div className="space-y-8 max-w-2xl relative z-20">
                        <MotionDiv 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold tracking-wide uppercase shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                {badge}
                            </div>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-blue-950 leading-[1.1] tracking-tight">
                                {t('title1')} <br/>
                                <span className="text-blue-600 relative inline-block">
                                    {t('title2')}
                                    <svg className="absolute -bottom-1 left-0 w-full text-blue-200/50 -z-10" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C65.5 -1.5 136.5 -1.5 198 6" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/></svg>
                                </span> <br/>
                                {t('title3')}
                            </h1>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg font-medium">
                                {description}
                            </p>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
                        >
                            <Link
                                href={`/${locale}/services`}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-bold rounded-2xl transition-all shadow-[0_8px_30px_rgb(37,99,235,0.25)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(37,99,235,0.35)]"
                            >
                                {t('servicesBtn')}
                                <IoArrowForward size={18} />
                            </Link>

                            <Link
                                href={`/${locale}/contact`}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-blue-50 text-blue-900 text-[15px] font-bold rounded-2xl border border-blue-100 transition-all hover:border-blue-200 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {t('startupBtn')}
                            </Link>
                        </MotionDiv>
                        
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-6 pt-8 border-t border-slate-100/50 text-sm font-bold text-slate-500"
                        >
                            <div className="flex items-center gap-2">
                                <IoCheckmarkCircle className="text-blue-500" size={20} />
                                {t('stat1')}
                            </div>
                            <div className="flex items-center gap-2">
                                <IoCheckmarkCircle className="text-blue-500" size={20} />
                                {t('stat2')}
                            </div>
                        </MotionDiv>
                    </div>

                    {/* Right Visual - Partners / Logos Slider */}
                    <MotionDiv 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center w-full"
                    >
                        {/* The White Box */}
                        <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[600px] bg-white rounded-[2.5rem] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] border border-slate-100/60 overflow-hidden flex flex-col justify-center py-10">
                            <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
                            
                            <div className="text-center mb-8 relative z-20">
                                <h3 className="text-blue-950 font-black text-xl mb-1.5">{t('partnersTitle')}</h3>
                                <p className="text-slate-500 text-sm font-medium">{t('partnersDesc')}</p>
                            </div>

                            <style jsx global>{`
                                @keyframes slideUp {
                                    0% { transform: translateY(0); }
                                    100% { transform: translateY(calc(-50% - 8px)); }
                                }
                                @keyframes slideDown {
                                    0% { transform: translateY(calc(-50% - 8px)); }
                                    100% { transform: translateY(0); }
                                }
                                .animate-slide-up {
                                    animation: slideUp 20s linear infinite;
                                }
                                .animate-slide-down {
                                    animation: slideDown 25s linear infinite;
                                }
                            `}</style>

                            <div className="flex gap-4 px-6 h-full overflow-hidden relative opacity-90">
                                {/* Column 1 - Slides Up */}
                                <div className="flex-1 flex flex-col gap-4 animate-slide-up">
                                    {[0, 1, 2, 3, 4, 0, 1, 2, 3, 4].map((i, index) => (
                                        <div key={`c1-${index}`} className="relative w-full aspect-[4/3] shrink-0 bg-white rounded-3xl border border-slate-100 flex items-center justify-center hover:border-blue-200 hover:shadow-md transition-all shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden p-4">
                                            <Image 
                                                src={displayLogos[i % displayLogos.length]} 
                                                alt="Partner Logo" 
                                                fill 
                                                className="object-contain scale-110 p-2" 
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* Column 2 - Slides Down */}
                                <div className="flex-1 flex flex-col gap-4 animate-slide-down">
                                    {[2, 3, 4, 0, 1, 2, 3, 4, 0, 1].map((i, index) => (
                                        <div key={`c2-${index}`} className="relative w-full aspect-[4/3] shrink-0 bg-white rounded-3xl border border-slate-100 flex items-center justify-center hover:border-blue-200 hover:shadow-md transition-all shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden p-4">
                                            <Image 
                                                src={displayLogos[i % displayLogos.length]} 
                                                alt="Partner Logo" 
                                                fill 
                                                className="object-contain scale-110 p-2" 
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* Column 3 - Slides Up */}
                                <div className="flex-1 flex flex-col gap-4 animate-slide-up" style={{ animationDuration: '22s' }}>
                                    {[4, 0, 1, 2, 3, 4, 0, 1, 2, 3].map((i, index) => (
                                        <div key={`c3-${index}`} className="relative w-full aspect-[4/3] shrink-0 bg-white rounded-3xl border border-slate-100 flex items-center justify-center hover:border-blue-200 hover:shadow-md transition-all shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden p-4">
                                            <Image 
                                                src={displayLogos[i % displayLogos.length]} 
                                                alt="Partner Logo" 
                                                fill 
                                                className="object-contain scale-110 p-2" 
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </MotionDiv>

                </div>
            </div>
            
        </section>
    );
};

export default HeroSection;