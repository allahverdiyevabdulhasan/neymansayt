import React from "react";
import * as Icons from "react-icons/fa";
import * as Icons6 from "react-icons/fa6";
import { getTranslated } from "@/lib/api";

export const ProductFeatures = ({ features, themeColor, locale }: { features: any[], themeColor: string, locale: string }) => {
    if (!features || features.length === 0) return null;

    const getIcon = (iconName: string) => {
        const IconComponent = (Icons as any)[iconName] || (Icons6 as any)[iconName] || Icons.FaCheckCircle;
        return <IconComponent />;
    };

    const t: Record<string, any> = {
        az: { title: "Əsas Xüsusiyyətlər", desc: "Sistemin sizə təqdim etdiyi funksionallıqlar" },
        en: { title: "Key Features", desc: "Functionalities the system offers you" },
        ru: { title: "Основные характеристики", desc: "Функциональные возможности системы" },
        tr: { title: "Temel Özellikler", desc: "Sistemin size sunduğu işlevler" }
    }[locale] || { title: "Əsas Xüsusiyyətlər", desc: "Sistemin sizə təqdim etdiyi funksionallıqlar" };

    return (
        <section id="features" className="py-20 relative bg-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-4">{t.title}</h2>
                    <p className="text-gray-600">{t.desc}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {features.map((feature: any) => (
                        <div key={feature.id} className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div 
                                className="w-14 h-14 flex items-center justify-center rounded-2xl mb-6 text-2xl"
                                style={{ 
                                    backgroundColor: themeColor === 'blue' ? '#eff6ff' : themeColor === 'emerald' ? '#ecfdf5' : themeColor === 'indigo' ? '#eef2ff' : '#f8fafc',
                                    color: themeColor === 'blue' ? '#2563eb' : themeColor === 'emerald' ? '#10b981' : themeColor === 'indigo' ? '#4f46e5' : themeColor
                                }}
                            >
                                {getIcon(feature.icon)}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{getTranslated(feature, 'title', locale)}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium text-sm whitespace-pre-line">{getTranslated(feature, 'description', locale)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
