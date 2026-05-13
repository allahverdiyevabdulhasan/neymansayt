// Types
import LargeNewsCard from "@/globalComponent/cards/blog/LargeNewsCard";
import React from "react";

export default function BlogCardContainer({ blogs, locale }: { blogs: any[], locale: string }) {
    if (!blogs || blogs.length === 0) {
        return (
            <section className={"py-10 lg:py-20"}>
                <div className={'container text-center text-gray-500'}>
                    {locale === 'az' ? 'Heç bir bloq tapılmadı' : locale === 'ru' ? 'Блоги не найдены' : 'No blogs found'}
                </div>
            </section>
        );
    }

    return (
        <section className={"py-10 lg:py-20"}>
            <div className={'container gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}>
                {blogs.map((item, i) => (
                    <LargeNewsCard key={item.id || i} item={item} locale={locale} />
                ))}
            </div>
        </section>
    );
}
