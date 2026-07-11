"use client";

import React from "react";
import { IoArrowForward, IoCheckmarkCircle } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import Link from "next/link";
import { MotionDiv } from "@/lib/motion";

interface HeroProps {
    data: any;
    locale: string;
}

const HeroSection: React.FC<HeroProps> = ({ data, locale }) => {
    const badge = data?.badge_text || "Premium IT Xidmətləri";
    const description = data?.description || "Startup və korporasiyalar üçün xüsusi proqram təminatı, mobil tətbiq və UI/UX dizayn həlləri. Növbəti səviyyəyə bizimlə keçin.";

    return (
        <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-white">
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
                                Biznesinizi <br/>
                                <span className="text-blue-600 relative inline-block">
                                    gələcəyə
                                    <svg className="absolute -bottom-1 left-0 w-full text-blue-200/50 -z-10" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C65.5 -1.5 136.5 -1.5 198 6" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/></svg>
                                </span> <br/>
                                kodlayırıq.
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
                                Xidmətlərlə Tanış Ol
                                <IoArrowForward size={18} />
                            </Link>

                            <Link
                                href={`/${locale}/contact`}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-blue-50 text-blue-900 text-[15px] font-bold rounded-2xl border border-blue-100 transition-all hover:border-blue-200 hover:-translate-y-1 hover:shadow-lg"
                            >
                                Startaplar Üçün Özəl
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
                                100+ Uğurlu Layihə
                            </div>
                            <div className="flex items-center gap-2">
                                <IoCheckmarkCircle className="text-blue-500" size={20} />
                                7/24 Dəstək
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
                        <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[480px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(37,99,235,0.1)] border border-blue-50 overflow-hidden flex flex-col justify-center py-10 relative">
                            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />
                            
                            <div className="text-center mb-8 relative z-20">
                                <h3 className="text-blue-950 font-black text-xl mb-2">Əməkdaşlıqlar & Layihələr</h3>
                                <p className="text-slate-500 text-sm font-medium">Güvəndiyimiz və işlədiyimiz tərəfdaşlar</p>
                            </div>

                            <style jsx global>{`
                                @keyframes slideUp {
                                    0% { transform: translateY(0); }
                                    100% { transform: translateY(-50%); }
                                }
                                @keyframes slideDown {
                                    0% { transform: translateY(-50%); }
                                    100% { transform: translateY(0); }
                                }
                                .animate-slide-up {
                                    animation: slideUp 20s linear infinite;
                                }
                                .animate-slide-down {
                                    animation: slideDown 25s linear infinite;
                                }
                            `}</style>

                            <div className="flex gap-4 px-6 h-full overflow-hidden relative opacity-80">
                                {/* Column 1 - Slides Up */}
                                <div className="flex-1 flex flex-col gap-4 animate-slide-up">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                        <div key={`c1-${i}`} className="w-full aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 font-bold text-lg hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                                            LOGO {i}
                                        </div>
                                    ))}
                                </div>
                                {/* Column 2 - Slides Down */}
                                <div className="flex-1 flex flex-col gap-4 animate-slide-down">
                                    {[8, 7, 6, 5, 4, 3, 2, 1].map((i) => (
                                        <div key={`c2-${i}`} className="w-full aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 font-bold text-lg hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                                            LOGO {i + 8}
                                        </div>
                                    ))}
                                </div>
                                {/* Column 3 - Slides Up */}
                                <div className="flex-1 flex flex-col gap-4 animate-slide-up" style={{ animationDuration: '22s' }}>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                        <div key={`c3-${i}`} className="w-full aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 font-bold text-lg hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                                            LOGO {i + 16}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating Element 1 */}
                        <MotionDiv 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-5 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100 flex items-center gap-4 hidden sm:flex z-30"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 ring-4 ring-white">
                                <span className="font-bold">100+</span>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Qlobal Partnyor</div>
                                <div className="text-lg font-black text-blue-950">Güvənli Şəbəkə</div>
                            </div>
                        </MotionDiv>

                        {/* Floating Element 2 */}
                        <MotionDiv 
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute top-12 -right-4 md:-right-8 bg-blue-600 p-4 rounded-xl shadow-xl shadow-blue-600/20 border border-blue-500 z-30"
                        >
                            <div className="text-white text-sm font-bold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                Sistemlər Aktivdir
                            </div>
                        </MotionDiv>
                    </MotionDiv>

                </div>
            </div>
            
        </section>
    );
};

export default HeroSection;