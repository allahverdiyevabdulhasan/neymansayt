"use client";

import React from "react";
import { MotionDiv } from "@/lib/motion";
import { FaShieldHalved, FaChartLine, FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";

export const MonthlySupportSection = () => {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="flex-1 space-y-8">
                        <MotionDiv
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                                Layihə bitdikdən sonra da <br />
                                <span className="text-blue-500">yanınızdayıq.</span>
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                                Texnologiya inkişaf edir, rəqiblər böyüyür. Sizin rəqəmsal məhsulunuzun həmişə aktual, sürətli və təhlükəsiz qalması üçün fərdi aylıq dəstək xidmətləri təqdim edirik.
                            </p>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/20 text-center">
                                Dəstək Paketi Seçin
                            </Link>
                            <Link href="/services" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-colors text-center">
                                Daha Ətraflı
                            </Link>
                        </MotionDiv>
                    </div>

                    {/* Right Cards */}
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl"
                        >
                            <div className="w-14 h-14 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                                <FaShieldHalved size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Texniki Dəstək</h3>
                            <ul className="space-y-3">
                                {[
                                    "Serverlərin 7/24 izlənməsi",
                                    "Təhlükəsizlik yeniləmələri",
                                    "Baqların dərhal aradan qaldırılması",
                                    "Müntəzəm Back-up (Nüsxələmə)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                        <FaCircleCheck className="text-indigo-400 mt-0.5 shrink-0" size={16} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-gradient-to-b from-blue-600/20 to-transparent border border-blue-500/20 backdrop-blur-md p-8 rounded-3xl mt-0 sm:mt-12"
                        >
                            <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                                <FaChartLine size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Böyümə & SEO</h3>
                            <ul className="space-y-3">
                                {[
                                    "Google-da üst sıralara çıxma",
                                    "Məzmun optimizasiyası",
                                    "Sürət (PageSpeed) artırılması",
                                    "Konversiya analitikası (ROI)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                        <FaCircleCheck className="text-blue-400 mt-0.5 shrink-0" size={16} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </MotionDiv>
                    </div>
                </div>
            </div>
        </section>
    );
};
