"use client";

import React, { useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { MotionDiv, MotionSection } from "@/lib/motion";
import MySwiper from "@/lib/swiper";
import { ProjectsCard } from "@/globalComponent/cards/projects/ProjectsCard";

interface ProjectImage {
    src: string;
    alt: string;
}

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    slug?: string;
}

interface PortfolioProps {
    projects: Project[];
    locale: string;
}

const PortfolioSection: React.FC<PortfolioProps> = ({ projects, locale }) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const t = {
        az: { badge: "Layihələrimiz", title1: "Son", title2: "Layihələrimiz", btn: "Bütün Layihələri Gör" },
        en: { badge: "Our Projects", title1: "Latest", title2: "Projects", btn: "View All Projects" },
        ru: { badge: "Наши Проекты", title1: "Последние", title2: "Проекты", btn: "Смотреть Все Проекты" },
        tr: { badge: "Projelerimiz", title1: "Son", title2: "Projelerimiz", btn: "Tüm Projeleri Gör" }
    }[locale as 'az'|'en'|'ru'|'tr'] || { badge: "Layihələrimiz", title1: "Son", title2: "Layihələrimiz", btn: "Bütün Layihələri Gör" };

    return (
        <MotionSection className="relative bg-white py-24 lg:py-32 overflow-hidden">
            {/* Background Subtle Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/30 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="container relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                    <MotionDiv
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span
                            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-4">
                            {t.badge}
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black text-blue-950 leading-tight tracking-tight">
                            {t.title1} <span className="text-blue-600">{t.title2}</span>
                        </h2>
                    </MotionDiv>

                    <div className="flex gap-3">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm z-10 cursor-pointer active:scale-95"
                            aria-label="Previous slide"
                        >
                            <BiChevronLeft size={28} />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm z-10 cursor-pointer active:scale-95"
                            aria-label="Next slide"
                        >
                            <BiChevronRight size={28} />
                        </button>
                    </div>
                </div>

                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="portfolio-swiper-wrapper"
                >
                    <MySwiper<Project>
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Navigation, Pagination, FreeMode, Autoplay]}
                        spaceBetween={24}
                        slidesPerView="auto"
                        freeMode={true}
                        grabCursor={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={projects.length >= 4}
                        breakpoints={{
                            320: { slidesPerView: 1.2, spaceBetween: 16 },
                            640: { slidesPerView: 2.2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 24 },
                            1280: { slidesPerView: 3.5, spaceBetween: 24 },
                        }}
                        items={projects}
                        slideClassName="!h-auto"
                        renderItem={(project) => <ProjectsCard project={project} locale={locale} />}
                    />
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center mt-16"
                >
                    <Link
                        href={`/${locale}/projects`}
                        className="inline-flex items-center gap-3 px-10 py-4 bg-blue-950 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-blue-950/10 hover:shadow-blue-600/25 group cursor-pointer active:scale-95 text-[15px]"
                    >
                        {t.btn}
                        <IoArrowForward className="group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                </MotionDiv>
            </div>

            <style jsx global>{`
                .portfolio-swiper-wrapper .swiper-slide {
                    height: auto !important;
                    display: flex;
                }

                .portfolio-swiper-wrapper .swiper {
                    overflow: visible !important;
                }

                @media (min-width: 1024px) {
                    .portfolio-swiper-wrapper .swiper-slide {
                        width: 380px;
                    }
                }

                .swiper-grab {
                    cursor: grab;
                }

                .swiper-grabbing {
                    cursor: grabbing;
                }
            `}</style>
        </MotionSection>
    );
};

export default PortfolioSection;