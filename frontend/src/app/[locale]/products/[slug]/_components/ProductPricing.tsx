import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { getTranslated } from "@/lib/api";

export const ProductPricing = ({ plans, themeColor, locale }: { plans: any[], themeColor: string, locale: string }) => {
    if (!plans || plans.length === 0) return null;

    const mainColor = themeColor === 'blue' ? '#2563eb' : themeColor === 'emerald' ? '#10b981' : themeColor === 'indigo' ? '#4f46e5' : themeColor;
    
    // Attempt to split features string into an array if it's not already
    const getFeaturesList = (features: any) => {
        if (Array.isArray(features)) return features;
        if (typeof features === 'string') {
            return features.split('\n').map(f => f.trim()).filter(f => f.length > 0);
        }
        return [];
    };

    const t: Record<string, any> = {
        az: { title: "Paket Qiymətləri", desc: "Büdcənizə və ehtiyaclarınıza ən uyğun olan paketi seçin.", popular: "Ən Çox Seçilən", select: "Paketi Seç", contact: "Bizimlə Əlaqə" },
        en: { title: "Pricing Plans", desc: "Choose the package that best fits your budget and needs.", popular: "Most Popular", select: "Select Plan", contact: "Contact Us" },
        ru: { title: "Пакеты цен", desc: "Выберите пакет, который лучше всего подходит вам.", popular: "Самый популярный", select: "Выбрать", contact: "Связаться с нами" },
        tr: { title: "Paket Fiyatları", desc: "Bütçenize ve ihtiyaçlarınıza en uygun paketi seçin.", popular: "En Çok Tercih Edilen", select: "Paketi Seç", contact: "Bize Ulaşın" }
    }[locale] || { title: "Paket Qiymətləri", desc: "Büdcənizə və ehtiyaclarınıza ən uyğun olan paketi seçin.", popular: "Ən Çox Seçilən", select: "Paketi Seç", contact: "Bizimlə Əlaqə" };

    return (
        <section id="pricing" className="py-24 bg-gray-50/50 relative border-t border-gray-100">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black text-gray-900 mb-6">{t.title}</h2>
                    <p className="text-lg text-gray-600 font-medium">{t.desc}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan: any) => (
                        <div 
                            key={plan.id} 
                            className={`relative bg-white rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2 ${
                                plan.is_popular 
                                    ? 'border-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] scale-105 z-10' 
                                    : 'border border-gray-200 shadow-sm hover:shadow-xl'
                            }`}
                            style={plan.is_popular ? { borderColor: mainColor } : {}}
                        >
                            {plan.is_popular && (
                                <div 
                                    className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 text-white text-sm font-bold tracking-wider uppercase rounded-full shadow-lg"
                                    style={{ backgroundColor: mainColor }}
                                >
                                    {t.popular}
                                </div>
                            )}
                            
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{getTranslated(plan, 'name', locale)}</h3>
                                <p className="text-gray-500 font-medium h-12">{getTranslated(plan, 'description', locale)}</p>
                            </div>
                            
                            <div className="mb-8 pb-8 border-b border-gray-100">
                                <div className="flex items-end gap-1">
                                    <span className="text-5xl font-black text-gray-900">{getTranslated(plan, 'price', locale)}</span>
                                    {getTranslated(plan, 'period', locale) && <span className="text-gray-500 font-medium mb-1">{getTranslated(plan, 'period', locale)}</span>}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {getFeaturesList(getTranslated(plan, 'features', locale)).map((feat: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div 
                                            className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: `${mainColor}15`, color: mainColor }}
                                        >
                                            <FaCheckCircle className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-gray-700 font-medium leading-relaxed">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href="#demo"
                                className={`block text-center w-full py-4 rounded-2xl font-bold transition-all ${
                                    plan.is_popular 
                                        ? 'text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5' 
                                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                                }`}
                                style={plan.is_popular ? { backgroundColor: mainColor } : {}}
                            >
                                {(() => {
                                    const price = getTranslated(plan, 'price', locale).toLowerCase();
                                    return (price === 'xüsusi' || price.includes('xüsusi') || price === 'custom' || price === 'договорная' || price === 'anlaşmalı') ? t.contact : t.select;
                                })()}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
