import PageHero from "@/ui/NavigationBar";
import React from "react";
import { ServiceInfoHero } from "@/app/[locale]/services/_component/detail/ServiceInfoHero";
import { ServiceIncludes } from "@/app/[locale]/services/_component/detail/ServiceIncludes";
import { TechStack } from "@/app/[locale]/services/_component/detail/TechStack";
import { ServiceFAQ } from "@/app/[locale]/services/_component/detail/ServiceFAQ";
import { ServiceCTA } from "@/app/[locale]/services/_component/detail/ServiceCTA";
import { fetchData, getTranslated } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function ServicesDetail({ params }: { params: { locale: string, slug: string } }) {
    const { locale, slug } = await params;
    const service = await fetchData(`services/${slug}`);

    if (!service) {
        notFound();
    }

    const title = getTranslated(service, 'title', locale);
    const description = getTranslated(service, 'description', locale);

    return (
        <>
            <PageHero
                breadcrumbs={[
                    { label: getTranslated(null, 'services', locale) || "Xidmətlər", href: `/${locale}/services` },
                    { label: title },
                ]}
                background="white"
                align="left"
            />

            <ServiceInfoHero
                title={title}
                description={description}
                duration={service.duration || "14-21 gün"}
                priceRange={service.price || "1500₼ - 5000₼"}
                consultation="30 dəqiqə"
            />
            <ServiceIncludes deliverables={getTranslated(service, 'deliverables', locale)} />
            <TechStack techStack={getTranslated(service, 'tech_stack', locale)} />
            <ServiceFAQ faqs={service.faqs || []} locale={locale} />
            <ServiceCTA />
        </>
    );
}
