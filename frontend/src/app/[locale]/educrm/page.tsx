import PageHero from "@/ui/NavigationBar";
import React from "react";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const { locale } = await params;
    const titles: Record<string, string> = { az: "Neyman Edu CRM | NeymanTech", en: "Neyman Edu CRM | NeymanTech", ru: "Neyman Edu CRM | NeymanTech" };
    return { title: titles[locale] || titles["az"] };
}

export default async function Page({ params }: { params: { locale: string } }) {
    const { locale } = await params;
    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title="EDU CRM"
                subtitle="Kurslar və tədris mərkəzləri üçün rəqəmsal ekosistem"
                breadcrumbs={[{ label: "Məhsullar", href: `/${locale}/products` }, { label: "EDU CRM" }]}
                background="blue"
                align="center"
            />
            <div className="container py-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Tezliklə...</h2>
                <p className="text-gray-600">Səhifə yenilənir</p>
            </div>
        </main>
    );
}