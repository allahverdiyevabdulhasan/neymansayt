"use client";

import React, { useRef } from "react";
import { IoGlobe } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv, MotionSection } from "@/lib/motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Navigation, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import MySwiper from "@/lib/swiper";
import "swiper/css";
import "swiper/css/free-mode";

interface Partner {
    id: string;
    name: string;
    industry: string;
    description: string;
    logo: string;
    website: string;
    since: string;
}

interface PartnersSectionProps {
    partners: Partner[];
    locale: string;
}

const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => (
    <Link
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-5 bg-white rounded-2xl border border-gray-100 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 h-full"
    >
        <div className="flex items-start gap-4 mb-4">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-50">
                <Image src={partner.logo} alt={partner.name} fill className="object-cover" sizes="56px" />
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate text-base">
                    {partner.name}
                </h3>
                <span
                    className="inline-block mt-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[10px] font-bold uppercase">
                    {partner.industry}
                </span>
            </div>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
            {partner.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
            <span className="text-[11px] text-gray-400 font-medium">
                {partner.since}-dən bəri əməkdaş
            </span>
            <div
                className="flex items-center gap-1 text-blue-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                SAYTA KEÇİD <IoGlobe size={14} />
            </div>
        </div>
    </Link>
);

const PartnersSection: React.FC<PartnersSectionProps> = ({ partners, locale }) => {
    const swiperRef = useRef<SwiperType | null>(null);

    // If no dynamic partners are returned, show nothing
    if (!partners || partners.length === 0) return null;

    return (
        <MotionSection className="relative bg-gray-50/50 py-10 lg:py-20 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(#2563eb 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                    <MotionDiv
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span
                            className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-3">
                            {locale === 'az' ? 'Partnyorlarımız' : locale === 'ru' ? 'Наши Партнеры' : 'Our Partners'}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
                            {locale === 'az' ? 'Bizə Güvənən Brendlər' : locale === 'ru' ? 'Бренды, доверяющие нам' : 'Brands that trust us'}
                        </h2>
                        <p className="mt-3 text-gray-600 text-sm sm:text-base">
                            Müxtəlif sektorlardan olan lider şirkətlərlə rəqəmsal gələcəyi birlikdə qururuq.
                        </p>
                    </MotionDiv>

                    <div className="flex gap-2">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm cursor-pointer active:scale-95"
                        >
                            <BiChevronLeft size={22} />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm cursor-pointer active:scale-95"
                        >
                            <BiChevronRight size={22} />
                        </button>
                    </div>
                </div>

                <MySwiper<Partner>
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation, FreeMode]}
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
                    items={partners}
                    slideClassName="!h-auto"
                    renderItem={(partner) => <PartnerCard partner={partner} />}
                />
            </div>
        </MotionSection>
    );
};

export default PartnersSection;