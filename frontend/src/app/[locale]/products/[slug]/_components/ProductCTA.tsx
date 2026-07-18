"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { getTranslated } from "@/lib/api";
import { DemoModal } from "./DemoModal";

export const ProductCTA = ({ product, locale }: { product: any, locale: string }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const themeColor = product.theme_color || 'blue';
    const mainColor = themeColor === 'blue' ? '#2563eb' : themeColor === 'emerald' ? '#10b981' : themeColor === 'indigo' ? '#4f46e5' : themeColor;
    const ctaText = getTranslated(product, 'cta_text', locale) || 'Demo Sifariş Et';
    const ctaLink = product.cta_link || '#demo';
    
    const t: Record<string, any> = {
        az: { title1: "Sistemimizi dərhal ", title2: "sınaqdan keçirin", desc: "Məhsulumuzun sizə necə fayda verə biləcəyini görmək üçün dərhal demo tələb edin və ya bizimlə əlaqə saxlayın.", call: "Bizə Zəng Edin" },
        en: { title1: "Try our system ", title2: "right away", desc: "Request a demo or contact us immediately to see how our product can benefit you.", call: "Call Us" },
        ru: { title1: "Попробуйте нашу систему ", title2: "прямо сейчас", desc: "Запросите демо или свяжитесь с нами прямо сейчас, чтобы узнать, как наш продукт может быть вам полезен.", call: "Позвоните нам" },
        tr: { title1: "Sistemimizi hemen ", title2: "deneyin", desc: "Ürünümüzün size nasıl fayda sağlayabileceğini görmek için hemen bir demo talep edin veya bizimle iletişime geçin.", call: "Bizi Arayın" }
    }[locale] || { title1: "Sistemimizi dərhal ", title2: "sınaqdan keçirin", desc: "Məhsulumuzun sizə necə fayda verə biləcəyini görmək üçün dərhal demo tələb edin və ya bizimlə əlaqə saxlayın.", call: "Bizə Zəng Edin" };

    return (
        <section id="demo" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-4 relative z-10">
                <div 
                    className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
                    style={{ backgroundColor: `${mainColor}08`, border: `1px solid ${mainColor}20` }}
                >
                    <div 
                        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50" 
                        style={{ backgroundColor: mainColor }}
                    />
                    <div 
                        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-50" 
                        style={{ backgroundColor: mainColor }}
                    />
                    
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative z-10">
                        {t.title1}<span style={{ color: mainColor }}>{t.title2}</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto relative z-10 font-medium leading-relaxed">
                        {t.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="group inline-flex justify-center items-center gap-3 px-8 py-4 text-white font-bold rounded-2xl transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl"
                            style={{ backgroundColor: mainColor }}
                        >
                            {ctaText}
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a 
                            href="tel:+994773312653"
                            className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all shadow-sm"
                        >
                            {t.call}
                        </a>
                    </div>
                </div>
            </div>
            
            <DemoModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                product={product} 
                locale={locale} 
            />
        </section>
    );
};
