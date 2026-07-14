"use client"
import Link from "next/link";
import { MotionArticle } from "@/lib/motion";
import CustomImage from "@/globalComponent/CustomImage";
import { IoArrowForward, IoCalendarOutline } from "react-icons/io5";
import { getTranslated } from "@/lib/api";

// Category Colors
const categoryColors: Record<string, string> = {
    "Yeniliklər": "bg-yellow-100 text-yellow-700",
    "Layihələr": "bg-blue-100 text-blue-700",
    "Xəbərlər": "bg-red-100 text-red-700",
};

export default function LargeNewsCard({ item, locale }: { item: any, locale: string }) {
    const defaultImage = "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800";
    const image = item.cover_image || defaultImage;
    const title = getTranslated(item, 'title', locale);
    const description = getTranslated(item, 'content', locale).replace(/<[^>]+>/g, '').substring(0, 150) + '...';

    // Category might be a related object or string depending on the model
    const categoryValue = item.category ? getTranslated(item.category, 'name', locale) : '';

    // Formatting date
    const dateFormatted = item.created_at ? new Date(item.created_at).toLocaleDateString(locale === 'az' ? 'az-AZ' : locale === 'ru' ? 'ru-RU' : 'en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }) : '';

    const blogLink = `/${locale}/blogs/${item.slug || item.id}`;
    return (
        <MotionArticle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group h-full flex flex-col bg-white rounded-[2.5rem] p-5 lg:p-6 border border-blue-50/50 shadow-[0_20px_50px_rgba(37,99,235,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-500"
        >
            <Link href={blogLink} className="block h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] mb-6 shadow-sm">
                    <CustomImage
                        src={image}
                        title={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between mb-4 px-2">
                    <div className="flex items-center gap-2 text-slate-500 text-[13px] font-medium">
                        <IoCalendarOutline size={16} className="text-blue-600" />
                        {dateFormatted}
                    </div>
                    {categoryValue && (
                        <span
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide uppercase ${categoryColors[categoryValue] || "bg-blue-50 text-blue-600"}`}>
                            {categoryValue}
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="px-2 flex flex-col flex-grow">
                    <h2 className="text-2xl font-black text-blue-950 mb-4 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                        {title}
                    </h2>

                    <p className="text-slate-500 mb-6 line-clamp-3 text-[15px] leading-relaxed flex-grow">
                        {description}
                    </p>

                    {/* Link */}
                    <div className="mt-auto">
                        <span
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-[15px] group-hover:text-blue-600 transition-all bg-slate-50 hover:bg-blue-50 px-5 py-2.5 rounded-xl border border-slate-100 hover:border-blue-100">
                            {locale === 'az' ? 'Daha çox oxu' : locale === 'ru' ? 'Читать далее' : 'Read more'}
                            <IoArrowForward size={18} className="group-hover:translate-x-1.5 transition-transform" />
                        </span>
                    </div>
                </div>
            </Link>
        </MotionArticle>
    );
}
