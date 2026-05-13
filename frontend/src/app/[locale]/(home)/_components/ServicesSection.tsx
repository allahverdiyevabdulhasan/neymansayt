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

const ServiceCard: React.FC<{ service: Service, locale: string }> = ({ service, locale }) => (
    <Link
        href={`/${locale}/services/${service.slug || service.id}`}
        className="group block p-6 sm:p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#2563eb] hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
    >
        <div className="flex items-start justify-between">
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">
                    {service.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                    {service.description}
                </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300 flex-shrink-0 ml-4">
                <IoArrowForward size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
        </div>
    </Link>
);

const ServicesSection: React.FC<ServicesProps> = ({ services, locale }) => (
    <section className="relative bg-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(#2563eb 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />
        </div>

        <div className="relative z-10 container">
            {/* Header */}
            <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#2563eb] text-sm font-medium mb-6">
                    Xidmətlərimiz
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Biznesiniz üçün <span className="text-[#2563eb]">texniki həllər</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Startup-dan korporasiyaya qədər hər ölçüdə biznesə uyğun xüsusi software xidmətləri təqdim edirik.
                </p>
            </div>

            {/* Dynamic Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} locale={locale} />
                ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
                <p className="text-gray-500 mb-4">
                    Xüsusi ehtiyaclarınız üçün bizimlə əlaqə saxlayın
                </p>
                <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:gap-3 transition-all"
                >
                    Bizimlə əlaqə saxla
                    <IoArrowForward size={18} />
                </Link>
            </div>
        </div>
    </section>
);

export default ServicesSection;
