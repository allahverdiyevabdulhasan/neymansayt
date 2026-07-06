"use client";

import React, { useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
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

    return (
        <MotionSection className="relative bg-white py-20 overflow-hidden">
            <div className="container">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                    <MotionDiv
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span
                            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-4">
                            Lahiyələrimiz
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                            Son <span className="text-blue-600">Layihələrimiz</span>
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
                        modules={[Navigation, Pagination, FreeMode]}
                        spaceBetween={24}
                        slidesPerView="auto"
                        freeMode={true}
                        grabCursor={true}
                        loop={true}
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
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-gray-900/10 hover:shadow-blue-600/25 group cursor-pointer active:scale-95 text-[15px]"
                    >
                        Bütün Layihələri Gör
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