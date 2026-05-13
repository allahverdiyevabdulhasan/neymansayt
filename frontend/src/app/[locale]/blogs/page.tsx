import PageHero from "@/ui/NavigationBar";
import React from "react";
import BlogCardContainer from "@/app/[locale]/blogs/_container/main/BlogCardContainer";
import ContactCTA from "@/ui/ContactCTA";
import { fetchData } from "@/lib/api";

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
    const blogs = await fetchData('blogs') || [];

    const title = locale === 'az' ? 'Bloq' : locale === 'ru' ? 'Блог' : 'Blog';
    const subtitle = locale === 'az' ? 'Texnologiya, dizayn və biznes dünyasından ən son xəbərlər'
        : locale === 'ru' ? 'Последние новости из мира технологий, дизайна и бизнеса'
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
            <ContactCTA />
        </>
    );
}
