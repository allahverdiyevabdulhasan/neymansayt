import PageHero from "@/ui/NavigationBar";
import React from "react";
import { BlogDetailHero } from "@/app/[locale]/blogs/_container/detail/BlogDetailHero";
import { BlogContent } from "@/app/[locale]/blogs/_container/detail/BlogContent";
import { RelatedPosts } from "@/app/[locale]/blogs/_container/detail/RelatedPosts";
import { fetchData, getTranslated } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
    const blogPost = await fetchData(`blogs/${slug}`);

    if (!blogPost) {
        notFound();
    }

    const title = getTranslated(blogPost, 'title', locale);
    const content = getTranslated(blogPost, 'content', locale);
    // Excerpt might be an explicit field or derived from content
    const excerpt = blogPost.excerpt ? getTranslated(blogPost, 'excerpt', locale) : content.replace(/<[^>]+>/g, '').substring(0, 160) + '...';

    const breadcrumbLabel = locale === 'az' ? 'Bloqlar' : locale === 'ru' ? 'Блоги' : 'Blogs';
    const readTime = blogPost.read_time || "5";
    const category = blogPost.category ? getTranslated(blogPost.category, 'name', locale) : '';

    return (
        <>
            <PageHero
                breadcrumbs={[
                    { label: breadcrumbLabel, href: `/${locale}/blogs` },
                    { label: category || title },
                ]}
                background="white"
                align="left"
            />
            {/* Bloq Detal Hero */}
            <BlogDetailHero
                title={title}
                excerpt={excerpt}
                coverImage={blogPost.cover_image || ''}
                publishDate={blogPost.created_at}
                readTime={readTime}
                category={category}
                locale={locale}
            />
            {/* Məzmun */}
            <BlogContent
                content={content}
                title={title}
            />
            <RelatedPosts currentSlug={slug} locale={locale} />
        </>
    );
}
