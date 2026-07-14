import PageHero from "@/ui/NavigationBar";
import React from "react";
import BlogCardContainer from "@/app/[locale]/blogs/_container/main/BlogCardContainer";
import { fetchData } from "@/lib/api";

export default async function BlogPage({ params }: { params: { locale: string } }) {
    const { locale } = await params;
    const blogs = await fetchData('blogs') || [];

    const title = locale === 'az' ? 'Bloq' 
                : locale === 'ru' ? 'Блог' 
                : locale === 'tr' ? 'Blog' 
                : 'Blog';
                
    const subtitle = locale === 'az' ? 'Texnologiya, dizayn və biznes dünyasından ən son xəbərlər'
        : locale === 'ru' ? 'Последние новости из мира технологий, дизайна и бизнеса'
        : locale === 'tr' ? 'Teknoloji, tasarım ve iş dünyasından en son haberler'
        : 'Latest news from the world of technology, design and business';

    return (
        <>
            <PageHero
                title={title}
                subtitle={subtitle}
                breadcrumbs={[{ label: title }]}
                background="white"
                align="left"
            />
            <BlogCardContainer blogs={blogs} locale={locale} />
        </>
    );
}
