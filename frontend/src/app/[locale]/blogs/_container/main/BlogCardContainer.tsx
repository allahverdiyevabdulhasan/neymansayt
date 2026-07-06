"use client";

import LargeNewsCard from "@/globalComponent/cards/blog/LargeNewsCard";
import React, { useState } from "react";
import { MotionDiv } from "@/lib/motion";
import { getTranslated } from "@/lib/api";

const filters = [
    { id: "all", label: "Hamısı" },
    { id: "Texnoloji Trendlər", label: "Texnoloji Trendlər" },
    { id: "Şirkət Xəbərləri", label: "Şirkət Xəbərləri" },
    { id: "Layihə İdarəetməsi", label: "Layihə İdarəetməsi" },
];

export default function BlogCardContainer({ blogs, locale }: { blogs: any[], locale: string }) {
    const [activeFilter, setActiveFilter] = useState("all");

    if (!blogs || blogs.length === 0) {
        return (
            <section className="py-10 lg:py-20">
                <div className="container text-center text-gray-500">
                    {locale === 'az' ? 'Heç bir bloq tapılmadı' : locale === 'ru' ? 'Блоги не найдены' : 'No blogs found'}
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
        <section className="py-10 lg:py-20">
            <div className="container">
                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-8 py-3 rounded-2xl text-[15px] font-bold transition-all duration-300 ${
                                activeFilter === filter.id 
                                ? "bg-blue-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] -translate-y-1" 
                                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5 hover:shadow-md"
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <MotionDiv layout className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
                        <div className="col-span-full text-center py-20 text-gray-500">
                            Bu kateqoriyaya uyğun bloq tapılmadı.
                        </div>
                    )}
                </MotionDiv>
            </div>
        </section>
    );
}
