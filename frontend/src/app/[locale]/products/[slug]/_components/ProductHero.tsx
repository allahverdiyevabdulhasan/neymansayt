"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { getTranslated } from "@/lib/api";

export const ProductHero = ({ product, locale }: { product: any, locale: string }) => {
    const themeColor = product.theme_color || 'blue';
    const ctaText = getTranslated(product, 'cta_text', locale) || 'Demo Sifariş Et';
    const ctaLink = product.cta_link || '#demo';
    const secondaryCtaText = getTranslated(product, 'secondary_cta_text', locale) || 'Qiymətlərə Bax';
    const secondaryCtaLink = product.secondary_cta_link || '#pricing';

    return (
        <section className="pt-32 pb-20 bg-white relative overflow-hidden" id="hero">
            {/* Background elements */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] blur-[100px] rounded-full pointer-events-none opacity-40`} style={{ backgroundColor: themeColor === 'blue' ? '#dbeafe' : themeColor === 'emerald' ? '#d1fae5' : themeColor === 'indigo' ? '#e0e7ff' : '#f1f5f9' }} />
            
            <div className="container relative z-10 mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mt-12">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                        {getTranslated(product, 'title', locale)}
                        {product.subtitle && (
                            <span className="block text-2xl md:text-3xl font-bold mt-4" style={{ color: themeColor === 'blue' ? '#2563eb' : themeColor === 'emerald' ? '#10b981' : themeColor === 'indigo' ? '#4f46e5' : themeColor }}>
                                {getTranslated(product, 'subtitle', locale)}
                            </span>
                        )}
                    </h1>
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium max-w-3xl mx-auto">
                        {getTranslated(product, 'description', locale)}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href={ctaLink} 
                            className={`group inline-flex items-center gap-3 px-8 py-4 text-white font-bold rounded-2xl transition-all shadow-lg hover:-translate-y-0.5`}
                            style={{ backgroundColor: themeColor === 'blue' ? '#2563eb' : themeColor === 'emerald' ? '#10b981' : themeColor === 'indigo' ? '#4f46e5' : themeColor }}
                        >
                            {ctaText} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        
                        <a 
                            href={secondaryCtaLink} 
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                        >
                            {secondaryCtaText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
