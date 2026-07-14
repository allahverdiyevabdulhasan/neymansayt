"use client";

import React, { useState } from "react";
import { ProjectsCard } from "@/globalComponent/cards/projects/ProjectsCard";
import { getTranslated } from "@/lib/api";
import { MotionDiv } from "@/lib/motion";

interface ProjectsCardWrappersProps {
    projects?: any[];
    locale: string;
}


export default function ProjectsCardWrappers({ projects, locale }: ProjectsCardWrappersProps) {
    const [activeFilter, setActiveFilter] = useState("all");

    const t = {
        az: { all: "Hamısı", noProject: "Layihə tapılmadı", noProjectDesc: "Bu kateqoriyaya uyğun layihə hələ ki mövcud deyil." },
        en: { all: "All", noProject: "No projects found", noProjectDesc: "There are currently no projects available in this category." },
        ru: { all: "Все", noProject: "Проекты не найдены", noProjectDesc: "В этой категории пока нет проектов." },
        tr: { all: "Hepsi", noProject: "Proje bulunamadı", noProjectDesc: "Bu kategoriye uygun proje henüz mevcut değil." }
    }[locale as 'az'|'en'|'ru'|'tr'] || { all: "Hamısı", noProject: "Layihə tapılmadı", noProjectDesc: "Bu kateqoriyaya uyğun layihə hələ ki mövcud deyil." };

    const filters = [
        { id: "all", label: t.all },
        { id: "SaaS & CRM", label: "SaaS & CRM" },
        { id: "Vebsaytlar", label: locale === 'en' ? "Websites" : locale === 'ru' ? "Вебсайты" : locale === 'tr' ? "Web Siteleri" : "Vebsaytlar" },
        { id: "Mobil Tətbiqlər", label: locale === 'en' ? "Mobile Apps" : locale === 'ru' ? "Мобильные приложения" : locale === 'tr' ? "Mobil Uygulamalar" : "Mobil Tətbiqlər" },
        { id: "Dizayn", label: locale === 'en' ? "Design" : locale === 'ru' ? "Дизайн" : locale === 'tr' ? "Tasarım" : "Dizayn" },
    ];

    const displayProjects = projects && projects.length > 0 ? projects.map(item => ({
        ...item,
        title: getTranslated(item, 'title', locale),
        category: getTranslated(item?.category, 'name', locale) || getTranslated(item, 'category_name', locale) || "Layihə"
    })) : [];

    const filteredProjects = activeFilter === "all" 
        ? displayProjects 
        : displayProjects.filter(p => {
            const cat = p.category.toLowerCase();
            const filterLabel = activeFilter.toLowerCase();
            return cat.includes(filterLabel) || filterLabel.includes(cat);
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

                {/* Grid */}
                <MotionDiv layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((item, i) => (
                        <MotionDiv
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={item.id || i}
                        >
                            <ProjectsCard
                                project={item}
                                locale={locale}
                            />
                        </MotionDiv>
                    ))}
                    {filteredProjects.length === 0 && (
                        <div className="col-span-full text-center py-20">
                            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-blue-50 inline-block">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{t.noProject}</h3>
                                <p className="text-slate-500">{t.noProjectDesc}</p>
                            </div>
                        </div>
                    )}
                </MotionDiv>
            </div>
        </section>
    );
}
