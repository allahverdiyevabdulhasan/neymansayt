import PageHero from "@/ui/NavigationBar";
import React from "react";
import ProjectsCardWrappers from "@/app/[locale]/projects/_container/main/ProjectsCardWrappers";
import ProjectsMainHero from "@/app/[locale]/projects/_container/main/ProjectsMainHero";
import { fetchData } from "@/lib/api";

export default async function page({ params }: { params: { locale: string } }) {
    const { locale } = await params;
    const projects = await fetchData('projects');

    const title = locale === 'az' ? 'Layihələrimiz' 
                : locale === 'ru' ? 'Наши Проекты' 
                : locale === 'tr' ? 'Projelerimiz' 
                : 'Our Projects';
                
    const subtitle = locale === 'az' ? 'Uğurla tamamladığımız layihələrimizlə tanış olun'
                : locale === 'ru' ? 'Познакомьтесь с нашими успешно завершенными проектами'
                : locale === 'tr' ? 'Başarıyla tamamladığımız projelerimizle tanışın'
                : 'Meet our successfully completed projects';

    const breadcrumbLabel = locale === 'az' ? 'Layihələr' 
                : locale === 'ru' ? 'Проекты' 
                : locale === 'tr' ? 'Projeler' 
                : 'Projects';

    return (
        <>
            <PageHero
                title={title}
                subtitle={subtitle}
                breadcrumbs={[{ label: breadcrumbLabel }]}
                background="white"
                align="left"
            />
            <ProjectsMainHero locale={locale} />
            <ProjectsCardWrappers projects={projects} locale={locale} />
        </>
    );
}
