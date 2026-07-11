"use client";

import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

interface Service {
    id: number;
    title: string;
    description: string;
    icon?: string;
    slug?: string;
}

interface ServicesProps {
    services: Service[];
    locale: string;
}

const ServiceCard: React.FC<{ service: Service, locale: string, index: number }> = ({ service, locale, index }) => {
    // Determine span based on index to create a Bento Grid effect
    const isLarge = index === 0 || index === 3;
    
    return (
        <Link
            href={`/${locale}/services/${service.slug || service.id}`}
            className={`group block p-8 bg-white rounded-[2rem] border border-blue-50 hover:border-blue-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)] relative overflow-hidden ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
        >
            {/* Subtle Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex flex-col h-full justify-between relative z-10">
                <div className="mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <IoArrowForward size={22} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                    <h3 className="text-2xl font-black text-blue-950 mb-3 group-hover:text-blue-700 transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed max-w-lg">
                        {service.description}
                    </p>
                </div>
                
                <div className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    Daha Ətraflı <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
};

const ServicesSection: React.FC<ServicesProps> = ({ services, locale }) => (
    <section className="relative bg-[#FAFAFC] py-24 lg:py-32 overflow-hidden border-t border-b border-blue-50/50">
        <div className="relative z-10 container">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold tracking-wide uppercase shadow-sm mb-6">
                        Xidmətlərimiz
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black text-blue-950 mb-4 leading-tight">
                        Biznesiniz üçün <br/>
                        <span className="text-blue-600">rəqəmsal güc.</span>
                    </h2>
                </div>
                <div className="max-w-md pb-2">
                    <p className="text-lg text-slate-600 font-medium">
                        Startup-dan korporasiyaya qədər hər ölçüdə biznesə uyğun xüsusi proqram təminatı və IT xidmətləri.
                    </p>
                </div>
            </div>

            {/* Bento Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} service={service} locale={locale} index={index} />
                ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-950 hover:text-blue-600 font-bold rounded-2xl transition-all shadow-sm border border-slate-200 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5"
                >
                    Tam Xidmət Siyahısı <IoArrowForward size={18} />
                </Link>
            </div>
        </div>
    </section>
);

export default ServicesSection;
