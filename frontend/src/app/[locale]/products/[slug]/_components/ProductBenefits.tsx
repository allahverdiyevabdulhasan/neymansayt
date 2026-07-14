import React from "react";
import * as Icons from "react-icons/fa";
import * as Icons6 from "react-icons/fa6";
import { getTranslated } from "@/lib/api";

export const ProductBenefits = ({ benefits, stats, themeColor, locale }: { benefits: any[], stats?: any[], themeColor: string, locale: string }) => {
    if ((!benefits || benefits.length === 0) && (!stats || stats.length === 0)) return null;

    const getIcon = (iconName: string) => {
        const IconComponent = (Icons as any)[iconName] || (Icons6 as any)[iconName] || Icons.FaCheckCircle;
        return <IconComponent />;
    };

    const t: Record<string, any> = {
        az: { title: "Niyə Bizi Seçməlisiniz?", desc: "Bu sistemin biznesinizə qazandıracağı əsas üstünlüklər" },
        en: { title: "Why Choose Us?", desc: "Key benefits this system will bring to your business" },
        ru: { title: "Почему выбирают нас?", desc: "Основные преимущества, которые система принесет вашему бизнесу" },
        tr: { title: "Neden Bizi Seçmelisiniz?", desc: "Bu sistemin işletmenize kazandıracağı temel avantajlar" }
    }[locale] || { title: "Niyə Bizi Seçməlisiniz?", desc: "Bu sistemin biznesinizə qazandıracağı əsas üstünlüklər" };

    return (
        <section id="benefits" className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">{t.title}</h2>
                    <p className="text-lg text-gray-600 font-medium">{t.desc}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
                    {benefits?.map((benefit: any) => (
                        <div key={benefit.id} className="flex gap-6">
                            <div 
                                className="w-16 h-16 flex items-center justify-center rounded-[1.25rem] text-2xl flex-shrink-0 mt-1"
                                style={{ 
                                    backgroundColor: themeColor === 'blue' ? '#2563eb' : themeColor === 'emerald' ? '#10b981' : themeColor === 'indigo' ? '#4f46e5' : themeColor,
                                    color: '#ffffff'
                                }}
                            >
                                {getIcon(benefit.icon)}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{getTranslated(benefit, 'title', locale)}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{getTranslated(benefit, 'description', locale)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {stats && stats.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto pt-16 border-t border-gray-100">
                        {stats.map((stat: any) => (
                            <div key={stat.id} className="text-center">
                                <div 
                                    className="text-4xl md:text-5xl font-black mb-2"
                                    style={{ color: themeColor === 'blue' ? '#2563eb' : themeColor === 'emerald' ? '#10b981' : themeColor === 'indigo' ? '#4f46e5' : themeColor }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-semibold uppercase tracking-wider text-sm">{getTranslated(stat, 'label', locale)}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
