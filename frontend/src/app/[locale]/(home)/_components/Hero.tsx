"use client";

import React from "react";
import { IoArrowForward, IoCheckmarkCircle } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
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
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    
                    {/* Left Content */}
                    <div className="space-y-8 max-w-2xl">
                        <MotionDiv 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold tracking-wide uppercase">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                {badge}
                            </div>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-slate-900 leading-[1.1] tracking-tight">
                                Biznesinizi <br/>
                                <span className="text-blue-600 relative inline-block">
                                    gələcəyə
                                    <svg className="absolute -bottom-1 left-0 w-full text-blue-200 -z-10" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C65.5 -1.5 136.5 -1.5 198 6" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/></svg>
                                </span> <br/>
                                kodlayırıq.
                            </h1>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
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
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1"
                            >
                                Xidmətlərlə Tanış Ol
                                <IoArrowForward size={18} />
                            </Link>

                            <Link
                                href={`/${locale}/contact`}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 text-[15px] font-bold rounded-2xl border border-slate-200 transition-all hover:border-slate-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                Startaplar Üçün Özəl
                            </Link>
                        </MotionDiv>
                        
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-6 pt-8 border-t border-slate-100 text-sm font-bold text-slate-500"
                        >
                            <div className="flex items-center gap-2">
                                <IoCheckmarkCircle className="text-green-500" size={20} />
                                100+ Uğurlu Layihə
                            </div>
                            <div className="flex items-center gap-2">
                                <IoCheckmarkCircle className="text-green-500" size={20} />
                                7/24 Dəstək
                            </div>
                        </MotionDiv>
                    </div>

                    {/* Right Visual */}
                    <MotionDiv 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center"
                    >
                        {/* Main Image Container */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full max-h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-white">
                            <Image 
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                                alt="Neyman Tech Team" 
                                fill 
                                className="object-cover"
                                priority
                            />
                            {/* Overlay gradient for image depth */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent mix-blend-multiply" />
                        </div>

                        {/* Floating Element 1 */}
                        <MotionDiv 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 md:left-[-10%] bg-white p-6 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 flex items-center gap-4 hidden sm:flex"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                <FaPlay size={18} className="ml-1" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Nəticə Odaklı</div>
                                <div className="text-xl font-black text-slate-900">+150% Böyümə</div>
                            </div>
                        </MotionDiv>

                        {/* Floating Element 2 */}
                        <MotionDiv 
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute top-8 -right-4 md:-right-8 bg-slate-900 p-5 rounded-2xl shadow-2xl shadow-blue-900/20 border border-slate-800"
                        >
                            <div className="text-white text-sm font-bold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
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