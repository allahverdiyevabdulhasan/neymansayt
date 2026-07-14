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

    const t = {
        az: { infra: "İnfrastruktur Həlləri", growth: "Böyümə & Dəstək Həlləri", visual: "Vizuallaşdırma", startupBadge: "Tech Partner Modeli", startupTitle: "Startap Proyektlərə Endirimli Xidmət", startupDesc: "Əgər innovativ bir startap ideyanız varsa, biz sizin texniki partnyorunuz ola bilərik. Xüsusi endirimli paketlərlə MVP-nin yığılması və inkişaf etdirilməsi.", startupBtn: "İdeyanı Müzakirə Edək" },
        en: { infra: "Infrastructure Solutions", growth: "Growth & Support", visual: "Visualization", startupBadge: "Tech Partner Model", startupTitle: "Discounted Service for Startups", startupDesc: "If you have an innovative startup idea, we can be your technical partner. Building and developing MVP with special discounted packages.", startupBtn: "Let's Discuss the Idea" },
        ru: { infra: "Инфраструктурные решения", growth: "Рост и поддержка", visual: "Визуализация", startupBadge: "Модель Tech Partner", startupTitle: "Скидки для стартап-проектов", startupDesc: "Если у вас есть инновационная идея стартапа, мы можем стать вашим техническим партнером. Создание и развитие MVP по специальным пакетам.", startupBtn: "Обсудить идею" },
        tr: { infra: "Altyapı Çözümleri", growth: "Büyüme ve Destek", visual: "Görselleştirme", startupBadge: "Tech Partner Modeli", startupTitle: "Girişimler İçin İndirimli Hizmet", startupDesc: "Yenilikçi bir girişim fikriniz varsa, teknik ortağınız olabiliriz. Özel indirimli paketlerle MVP oluşturma ve geliştirme.", startupBtn: "Fikri Tartışalım" }
    }[locale as 'az'|'en'|'ru'|'tr'] || { infra: "İnfrastruktur Həlləri", growth: "Böyümə & Dəstək Həlləri", visual: "Vizuallaşdırma", startupBadge: "Tech Partner Modeli", startupTitle: "Startap Proyektlərə Endirimli Xidmət", startupDesc: "Əgər innovativ bir startap ideyanız varsa, biz sizin texniki partnyorunuz ola bilərik. Xüsusi endirimli paketlərlə MVP-nin yığılması və inkişaf etdirilməsi.", startupBtn: "İdeyanı Müzakirə Edək" };

    return (
        <section id="services-grid" className="w-full bg-slate-50 py-16 lg:py-24">
            <div className="container space-y-24">
                
                {/* Infrastructure */}
                {infrastructure.length > 0 && (
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b border-gray-200 pb-4">
                            {t.infra}
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
                            {t.growth}
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
                            {t.visual}
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
                    className="relative bg-[#FAFAFC] rounded-[2.5rem] p-10 md:p-14 overflow-hidden border border-blue-50/50 shadow-[0_20px_50px_rgba(37,99,235,0.06)]"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 blur-[100px] rounded-full pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-[1.2rem] bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
                                    <FaRocket size={24} />
                                </div>
                                <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">{t.startupBadge}</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-4 leading-tight">
                                {t.startupTitle}
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                {t.startupDesc}
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-[0_8px_30px_rgba(37,99,235,0.2)]">
                                {t.startupBtn}
                            </Link>
                        </div>
                    </div>
                </MotionDiv>

            </div>
        </section>
    );
};
