"use client";

import LargeNewsCard from "@/globalComponent/cards/blog/LargeNewsCard";
import React, { useState } from "react";
import { MotionDiv } from "@/lib/motion";
import { getTranslated } from "@/lib/api";


export default function BlogCardContainer({ blogs, locale }: { blogs: any[], locale: string }) {
    const [activeFilter, setActiveFilter] = useState("all");

    const t = {
        az: { all: "Hamısı", tech: "Texnoloji Trendlər", corp: "Şirkət Xəbərləri", proj: "Layihə İdarəetməsi", noInfo: "Məlumat tapılmadı", noBlog: "Heç bir bloq tapılmadı", noResult: "Nəticə tapılmadı", noCat: "Bu kateqoriyaya uyğun bloq yazısı hələ ki mövcud deyil." },
        en: { all: "All", tech: "Tech Trends", corp: "Company News", proj: "Project Management", noInfo: "No info found", noBlog: "No blogs found", noResult: "No results", noCat: "There are currently no blog posts for this category." },
        ru: { all: "Все", tech: "Техно Тренды", corp: "Новости Компании", proj: "Управление Проектами", noInfo: "Информация не найдена", noBlog: "Блоги не найдены", noResult: "Нет результатов", noCat: "В этой категории пока нет записей блога." },
        tr: { all: "Hepsi", tech: "Teknoloji Trendleri", corp: "Şirket Haberleri", proj: "Proje Yönetimi", noInfo: "Bilgi bulunamadı", noBlog: "Blog bulunamadı", noResult: "Sonuç bulunamadı", noCat: "Bu kategoriye uygun blog yazısı henüz mevcut değil." }
    }[locale as 'az'|'en'|'ru'|'tr'] || { all: "Hamısı", tech: "Texnoloji Trendlər", corp: "Şirkət Xəbərləri", proj: "Layihə İdarəetməsi", noInfo: "Məlumat tapılmadı", noBlog: "Heç bir bloq tapılmadı", noResult: "Nəticə tapılmadı", noCat: "Bu kateqoriyaya uyğun bloq yazısı hələ ki mövcud deyil." };

    const filters = [
        { id: "all", label: t.all },
        { id: "Texnoloji Trendlər", label: t.tech },
        { id: "Şirkət Xəbərləri", label: t.corp },
        { id: "Layihə İdarəetməsi", label: t.proj },
    ];

    if (!blogs || blogs.length === 0) {
        return (
            <section className="py-12 lg:py-24 bg-[#FAFAFC]">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-blue-50 inline-block max-w-lg">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{t.noInfo}</h3>
                        <p className="text-slate-500">
                            {t.noBlog}
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    const filteredBlogs = activeFilter === "all" 
        ? blogs 
        : blogs.filter(b => {
            const cat = getTranslated(b?.category, 'name', locale) || getTranslated(b, 'category_name', locale) || "";
            return cat.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(cat.toLowerCase());
        });

    return (
        <section className="py-12 lg:py-24 bg-[#FAFAFC] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-8 py-3.5 rounded-2xl text-[15px] font-bold transition-all duration-300 ${
                                activeFilter === filter.id 
                                ? "bg-blue-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] -translate-y-1" 
                                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-200 hover:text-blue-600 hover:-translate-y-1 hover:shadow-md hover:bg-blue-50"
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <MotionDiv layout className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredBlogs.map((item, i) => (
                        <MotionDiv
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={item.id || i}
                        >
                            <LargeNewsCard item={item} locale={locale} />
                        </MotionDiv>
                    ))}
                    {filteredBlogs.length === 0 && (
                        <div className="col-span-full text-center py-20">
                            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-blue-50 inline-block max-w-lg">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{t.noResult}</h3>
                                <p className="text-slate-500">{t.noCat}</p>
                            </div>
                        </div>
                    )}
                </MotionDiv>
            </div>
        </section>
    );
}
