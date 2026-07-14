"use client";

import React from "react";
import Link from "next/link";
import LargeNewsCard from "@/globalComponent/cards/blog/LargeNewsCard";
import SmallNewsCard from "@/globalComponent/cards/blog/SmallNewsCard";

// Types
interface NewsItem {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
    image: string;
    slug: string;
}

interface BlogProps {
    blogs: NewsItem[];
    locale: string;
}

// Main Component
const NewsSection: React.FC<BlogProps> = ({ blogs, locale }) => {
    if (!blogs || blogs.length === 0) return null;

    const [mainNews, ...sideNews] = blogs;

    const t = {
        az: { title: "Son Bloqlar", all: "Bütün xəbərlər" },
        en: { title: "Latest Blogs", all: "All news" },
        ru: { title: "Последние Блоги", all: "Все новости" },
        tr: { title: "Son Bloglar", all: "Tüm haberler" }
    }[locale] || { title: "Son Bloqlar", all: "Bütün xəbərlər" };

    return (
        <section className="bg-white py-16">
            <div className="container">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
                    <Link
                        href={`/${locale}/blogs`}
                        className="text-gray-500 hover:text-[#2563eb] transition-colors text-sm border-b border-gray-300 hover:border-[#2563eb]"
                    >
                        {t.all}
                    </Link>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <LargeNewsCard item={mainNews} locale={locale} />
                    <div className="space-y-6">
                        {sideNews.map((item, index) => (
                            <div key={item.id}>
                                <SmallNewsCard item={item} index={index} locale={locale} />
                                {index < sideNews.length - 1 && (
                                    <hr className="mt-6 border-gray-100" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;