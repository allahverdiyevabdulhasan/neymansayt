import MySwiper from "@/lib/swiper";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import React from "react";
import LargeNewsCard from "@/globalComponent/cards/blog/LargeNewsCard";
import { Autoplay } from "@fancyapps/ui";
import { fetchData } from "@/lib/api";

export const RelatedPosts = async ({ currentSlug, locale }: { currentSlug: string, locale: string }) => {
    const allBlogs = await fetchData('blogs') || [];

    // Filter out the current post
    const relatedBlogs = allBlogs.filter((blog: any) => blog.slug !== currentSlug).slice(0, 6);

    if (!relatedBlogs || relatedBlogs.length === 0) return null;

    const title = locale === 'az' ? 'Əlaqəli məqalələr' : locale === 'ru' ? 'Связанные статьи' : 'Related articles';

    return (
        <section className="w-full bg-white pt-8 lg:pb-20 pb-10">
            <div className="container">
                <div className="flex items-center justify-between mb-10">
                    <strong className="text-2xl font-bold text-slate-900">{title}</strong>
                </div>

                <MySwiper
                    modules={[Navigation, Pagination, Autoplay, FreeMode]}
                    spaceBetween={24}
                    slidesPerView="auto"
                    freeMode={true}
                    grabCursor={true}
                    autoplay={true}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1.2, spaceBetween: 16 },
                        640: { slidesPerView: 1.5, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    items={relatedBlogs}
                    slideClassName="!h-auto"
                    renderItem={(project: any) => <LargeNewsCard key={project.id} item={project} locale={locale} />}
                />
            </div>
        </section>
    );
};