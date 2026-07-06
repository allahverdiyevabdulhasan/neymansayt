"use client";

import React, { useState } from "react";
import { ProjectsCard } from "@/globalComponent/cards/projects/ProjectsCard";
import { getTranslated } from "@/lib/api";
import { MotionDiv } from "@/lib/motion";

interface ProjectsCardWrappersProps {
    projects?: any[];
    locale: string;
}

const filters = [
    { id: "all", label: "Hamısı" },
    { id: "SaaS & CRM", label: "SaaS & CRM" },
    { id: "Vebsaytlar", label: "Vebsaytlar" },
    { id: "Mobil Tətbiqlər", label: "Mobil Tətbiqlər" },
    { id: "Dizayn", label: "Dizayn" },
];

export default function ProjectsCardWrappers({ projects, locale }: ProjectsCardWrappersProps) {
    const [activeFilter, setActiveFilter] = useState("all");

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
        <section className="pb-10 lg:pb-20">
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

                {/* Grid */}
                <MotionDiv layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <div className="col-span-full text-center py-20 text-gray-500">
                            Bu kateqoriyaya uyğun layihə tapılmadı.
                        </div>
                    )}
                </MotionDiv>
            </div>
        </section>
    );
}
