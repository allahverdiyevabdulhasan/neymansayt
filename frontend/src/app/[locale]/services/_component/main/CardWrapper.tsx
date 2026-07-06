"use client";

import { ServiceCard } from "@/globalComponent/cards/services/ServiceCard";
import { getTranslated } from "@/lib/api";
import { MotionDiv } from "@/lib/motion";
import { FaRocket } from "react-icons/fa6";
import Link from "next/link";

interface ServiceItem {
    id: number;
    title: string;
    description: string;
    slug: string;
}

interface ServicesGridProps {
    services?: ServiceItem[];
    locale: string;
}

export const ServicesGrid = ({ services, locale }: ServicesGridProps) => {
    const displayServices = services && services.length > 0 ? services : [];

    // Grouping based on keywords in title
    const infrastructure: ServiceItem[] = [];
    const growth: ServiceItem[] = [];
    const visual: ServiceItem[] = [];

    displayServices.forEach(service => {
        const title = getTranslated(service, 'title', locale).toLowerCase();
        if (title.includes('seo') || title.includes('texniki') || title.includes('dəstək') || title.includes('server')) {
            growth.push(service);
        } else if (title.includes('dizayn') || title.includes('design') || title.includes('ui') || title.includes('ux')) {
            visual.push(service);
        } else {
            infrastructure.push(service);
        }
    });

    return (
        <section id="services-grid" className="w-full bg-slate-50 py-16 lg:py-24">
            <div className="container space-y-24">
                
                {/* Infrastructure */}
                {infrastructure.length > 0 && (
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b border-gray-200 pb-4">
                            İnfrastruktur Həlləri
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {infrastructure.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    title={getTranslated(service, 'title', locale)}
                                    description={getTranslated(service, 'description', locale)}
                                    slug={service.slug}
                                    locale={locale}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Growth & Support */}
                {growth.length > 0 && (
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b border-gray-200 pb-4">
                            Böyümə & Dəstək Həlləri
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {growth.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    title={getTranslated(service, 'title', locale)}
                                    description={getTranslated(service, 'description', locale)}
                                    slug={service.slug}
                                    locale={locale}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Visualization */}
                {visual.length > 0 && (
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b border-gray-200 pb-4">
                            Vizuallaşdırma
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visual.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    title={getTranslated(service, 'title', locale)}
                                    description={getTranslated(service, 'description', locale)}
                                    slug={service.slug}
                                    locale={locale}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Startup Special Offer Block */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-10 md:p-14 overflow-hidden border border-blue-800 shadow-2xl shadow-blue-900/20"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-300">
                                    <FaRocket size={24} />
                                </div>
                                <span className="text-blue-300 font-bold tracking-widest uppercase text-sm">Tech Partner Modeli</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                                Startap Proyektlərə Endirimli Xidmət
                            </h3>
                            <p className="text-blue-100 text-lg leading-relaxed">
                                Əgər innovativ bir startap ideyanız varsa, biz sizin texniki partnyorunuz ola bilərik. 
                                Xüsusi endirimli paketlərlə MVP-nin yığılması və inkişaf etdirilməsi.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 hover:scale-105 transition-all shadow-xl">
                                İdeyanı Müzakirə Edək
                            </Link>
                        </div>
                    </div>
                </MotionDiv>

            </div>
        </section>
    );
};
