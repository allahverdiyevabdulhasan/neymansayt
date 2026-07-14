import PageHero from "@/ui/NavigationBar";
import React from "react";
import { ServiceInfoHero } from "@/app/[locale]/services/_component/detail/ServiceInfoHero";
import { ServiceIncludes } from "@/app/[locale]/services/_component/detail/ServiceIncludes";
import { TechStack } from "@/app/[locale]/services/_component/detail/TechStack";
import { ServiceFAQ } from "@/app/[locale]/services/_component/detail/ServiceFAQ";
import { ServiceCTA } from "@/app/[locale]/services/_component/detail/ServiceCTA";
import { fetchData, getTranslated } from "@/lib/api";
import { notFound } from "next/navigation";
import { redirect } from "@/i18n/navigation";

export default async function ServicesDetail({ params }: { params: { locale: string, slug: string } }) {
    const { locale, slug } = await params;
    const service = await fetchData(`services/${slug}`);

    if (!service) {
        notFound();
    }

    if (service.slug && service.slug !== slug) {
        // @ts-ignore
        redirect({ href: `/services/${service.slug}` as any, locale });
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
                title={getTranslated(service, 'title', locale)}
                description={getTranslated(service, 'description', locale)}
                duration={service.duration}
                priceRange={service.price}
                locale={locale}
            />
            <ServiceIncludes deliverables={getTranslated(service, 'deliverables', locale)} locale={locale} />
            <TechStack techStack={getTranslated(service, 'tech_stack', locale)} />
            <ServiceFAQ faqs={service.faqs || []} locale={locale} />
            <ServiceCTA locale={locale} />
        </>
    );
}
