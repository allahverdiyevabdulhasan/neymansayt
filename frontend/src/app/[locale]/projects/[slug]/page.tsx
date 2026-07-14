import PageHero from "@/ui/NavigationBar";
import React from "react";
import { ProjectChallenge } from "@/app/[locale]/projects/_container/detail/ProjectChallenge";
import { PortfolioHero } from "@/app/[locale]/projects/_container/detail/ProjectsDetailHero";
import { ProjectResults } from "@/app/[locale]/projects/_container/detail/ProjectResults";
import { ProjectTech } from "@/app/[locale]/projects/_container/detail/ProjectTech";
import { ProjectGallery } from "@/app/[locale]/projects/_container/detail/ProjectGallery";
import { ProjectTestimonial } from "@/app/[locale]/projects/_container/detail/ProjectTestimonial";
import { fetchData, getTranslated } from "@/lib/api";
import { notFound } from "next/navigation";
import { redirect } from "@/i18n/navigation";

export default async function Page({ params }: { params: { locale: string, slug: string } }) {
    const { locale, slug } = await params;
    const project = await fetchData(`projects/${slug}`);

    if (!project) {
        notFound();
    }

    if (project.slug && project.slug !== slug) {
        // @ts-ignore
        redirect({ href: `/projects/${project.slug}` as any, locale });
    }

    const title = getTranslated(project, 'title', locale);
    const subtitle = getTranslated(project, 'description', locale); // mapping description to subtitle
    const problem = getTranslated(project, 'problem', locale);
    const solution = getTranslated(project, 'solution', locale);
    const technologies = project.technologies ? project.technologies.split(',').map((t: string) => t.trim()).filter((t: string) => t !== '') : [];

    const gallery = [
        { id: 'main', src: project.thumbnail, alt: title, caption: title },
        ...(project.images || []).map((img: any, i: number) => ({
            id: img.id || i,
            src: img.image,
            alt: title,
            caption: ""
        }))
    ];

    return (
        <>
            <PageHero
                breadcrumbs={[
                    { label: getTranslated(null, 'projects', locale) || "Lahiyələr", href: `/${locale}/projects` },
                    { label: title },
                ]}
                background="white"
                align="left"
            />
            <PortfolioHero
                title={title}
                subtitle={subtitle}
                mainImage={project.thumbnail}
                liveUrl={project.website_url}
                category={getTranslated(project.category, 'name', locale) || project.category || "Layihə"}
            />

            <ProjectChallenge
                problem={problem}
                solution={solution}
            />
            <ProjectResults stats={project.stats || []} />

            <ProjectTech technologies={technologies} />

            <ProjectGallery images={gallery} locale={locale} />

            {project.testimonial_quote && (
                <ProjectTestimonial
                    quote={getTranslated(project, 'testimonial_quote', locale)}
                    authorName={project.testimonial_author}
                    authorRole={project.testimonial_role}
                />
            )}
        </>
    );
}
