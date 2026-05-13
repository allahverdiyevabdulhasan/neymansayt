import PageHero from "@/ui/NavigationBar";
import React from "react";
import { ServicesHero } from "@/app/[locale]/services/_component/main/ServicesHero";
import { ServicesGrid } from "@/app/[locale]/services/_component/main/CardWrapper";
import ContactCTA from "@/ui/ContactCTA";
import { fetchData } from "@/lib/api";

export const dynamic = 'force-dynamic';

export default async function page({ params }: { params: { locale: string } }) {
    const { locale } = await params;
    const services = await fetchData('services');

    return (
        <>
            <PageHero
                title="Xidmətlərimiz"
                subtitle="Startup-dan korporasiyaya qədər hər ölçüdə biznesə uyğun texniki həllər"
                breadcrumbs={[{ label: "Xidmətlər" }]}
                background="blue"
                align="center"
            />
            <ServicesHero />
            <ServicesGrid services={services} locale={locale} />
            <ContactCTA />
        </>
    );
}
