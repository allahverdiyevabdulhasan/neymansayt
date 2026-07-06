import React from "react";
import HeroSection from "@/app/[locale]/(home)/_components/Hero";
import PartnersSection from "@/app/[locale]/(home)/_components/PartnersSection";
import { QuickNavSection } from "@/app/[locale]/(home)/_components/QuickNavSection";
import ProjectsSection from "@/app/[locale]/(home)/_components/ProjectsSection";
import ProjectTracking from "@/app/[locale]/(home)/_components/ProjectTracking";
import { MonthlySupportSection } from "@/app/[locale]/(home)/_components/MonthlySupportSection";
import { fetchData } from "@/lib/api";

export default async function HomePage({ params }: { params: { locale: string } }) {
    const locale = params.locale;

    // Fetch data for dynamic sections
    let heroData, partnersData, projectsData;

    try {
        [heroData, partnersData, projectsData] = await Promise.all([
            fetchData('home/hero'),
            fetchData('home/partners'),
            fetchData('projects')
        ]);
    } catch (error) {
        console.error("Error fetching home page data:", error);
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Hero Section */}
            <HeroSection data={heroData} locale={locale} />

            {/* 2. Trust Block (Partners) */}
            <PartnersSection partners={partnersData || []} locale={locale} />

            {/* 3. Quick Navigation (Categories) */}
            <QuickNavSection />

            {/* 4. Selected Works */}
            <ProjectsSection projects={projectsData || []} locale={locale} />

            {/* 5. Project Tracking */}
            <ProjectTracking locale={locale} />

            {/* 6. Monthly Support Pitch */}
            <MonthlySupportSection />
        </main>
    );
}
