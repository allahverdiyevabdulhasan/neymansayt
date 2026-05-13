import { ServiceCard } from "@/globalComponent/cards/services/ServiceCard";
import { getTranslated } from "@/lib/api";

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

    return (
        <section id="services-grid" className="w-full bg-slate-50 py-16 lg:py-24">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayServices.map((service) => (
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
        </section>
    );
};
