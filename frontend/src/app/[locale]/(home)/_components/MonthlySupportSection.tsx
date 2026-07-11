"use client";

import React from "react";
import { MotionDiv } from "@/lib/motion";
import { FaShieldHalved, FaChartLine, FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";

export const MonthlySupportSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 blur-[120px] rounded-full pointer-events-none" />

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
                            <h2 className="text-3xl md:text-5xl font-black text-blue-950 mb-6 leading-tight">
                                Layihə bitdikdən sonra da <br />
                                <span className="text-blue-600">yanınızdayıq.</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl">
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
                            <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-[0_4px_14px_0_rgba(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 flex items-center justify-center text-center">
                                Dəstək Paketi Seçin
                            </Link>
                            <Link href="/services" className="px-8 py-4 bg-blue-50/80 hover:bg-blue-100/80 text-blue-700 font-bold rounded-xl border border-blue-100 transition-colors text-center">
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
                            className="bg-white border border-blue-50 p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(37,99,235,0.1)] transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                                <FaShieldHalved size={28} />
                            </div>
                            <h3 className="text-xl font-black text-blue-950 mb-4">Texniki Dəstək</h3>
                            <ul className="space-y-3">
                                {[
                                    "Serverlərin 7/24 izlənməsi",
                                    "Təhlükəsizlik yeniləmələri",
                                    "Baqların dərhal aradan qaldırılması",
                                    "Müntəzəm Back-up (Nüsxələmə)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                                        <FaCircleCheck className="text-indigo-500 mt-0.5 shrink-0" size={16} />
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
                            className="bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(37,99,235,0.1)] transition-all duration-300 mt-0 sm:mt-12"
                        >
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <FaChartLine size={28} />
                            </div>
                            <h3 className="text-xl font-black text-blue-950 mb-4">Böyümə & SEO</h3>
                            <ul className="space-y-3">
                                {[
                                    "Google-da üst sıralara çıxma",
                                    "Məzmun optimizasiyası",
                                    "Sürət (PageSpeed) artırılması",
                                    "Konversiya analitikası (ROI)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                                        <FaCircleCheck className="text-blue-500 mt-0.5 shrink-0" size={16} />
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
