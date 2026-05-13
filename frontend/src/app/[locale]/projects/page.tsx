import PageHero from "@/ui/NavigationBar";
import React from "react";
import { ProjectsMainHero } from "@/app/[locale]/projects/_container/main/ProjectsMainHero";
import ProjectsCardWrappers from "@/app/[locale]/projects/_container/main/ProjectsCardWrappers";
import { fetchData } from "@/lib/api";

export default async function page({ params }: { params: { locale: string } }) {
    const { locale } = await params;
    const projects = await fetchData('projects');

    return (
        <>
            <PageHero
                title="Lahiyələrimiz"
                subtitle="Uğurla tamamladığımız layihələrimizlə tanış olun"
                breadcrumbs={[{ label: "Lahiyələrimiz" }]}
                background="gradient"
                align="center"
            />
            <ProjectsMainHero />
            <ProjectsCardWrappers projects={projects} locale={locale} />
        </>
    );
}
