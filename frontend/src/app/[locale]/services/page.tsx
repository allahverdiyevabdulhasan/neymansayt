import PageHero from "@/ui/NavigationBar";
import React from "react";
import { ServicesGrid } from "@/app/[locale]/services/_component/main/CardWrapper";
import ServicesHero from "@/app/[locale]/services/_component/main/ServicesHero";
import { fetchData } from "@/lib/api";

export const dynamic = 'force-dynamic';

export default async function page({ params }: { params: { locale: string } }) {
    const { locale } = await params;
    const services = await fetchData('services');

    const title = locale === 'az' ? 'Xidmətlərimiz' 
                : locale === 'ru' ? 'Наши Услуги' 
                : locale === 'tr' ? 'Hizmetlerimiz' 
                : 'Our Services';
                
    const subtitle = locale === 'az' ? 'Startup-dan korporasiyaya qədər hər ölçüdə biznesə uyğun texniki həllər'
                : locale === 'ru' ? 'Технические решения для бизнеса любого масштаба, от стартапов до корпораций'
                : locale === 'tr' ? 'Girişimlerden kurumsal firmalara kadar her boyuttaki işletmeye uygun teknik çözümler'
                : 'Technical solutions for businesses of all sizes, from startups to corporations';

    const breadcrumbLabel = locale === 'az' ? 'Xidmətlər' 
                : locale === 'ru' ? 'Услуги' 
                : locale === 'tr' ? 'Hizmetler' 
                : 'Services';

    return (
        <>
            <PageHero
                title={title}
                subtitle={subtitle}
                breadcrumbs={[{ label: breadcrumbLabel }]}
                background="white"
                align="left"
            />
            <ServicesHero locale={locale} />
            <ServicesGrid services={services} locale={locale} />
        </>
    );
}
