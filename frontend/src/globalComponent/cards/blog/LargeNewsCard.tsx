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
            className="group h-full"
        >
            <Link href={blogLink} className="block h-full">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5 shadow-sm">
                    <CustomImage
                        src={image}
                        title={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <IoCalendarOutline size={16} />
                        {dateFormatted}
                    </div>
                    {categoryValue && (
                        <span
                            className={`px-3 py-1 rounded text-xs font-medium ${categoryColors[categoryValue] || "bg-gray-100 text-gray-700"}`}>
                            {categoryValue}
                        </span>
                    )}
                </div>

                {/* Content */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                    {title}
                </h2>

                <p className="text-slate-500 mb-5 line-clamp-3 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Link */}
                <span
                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                    {locale === 'az' ? 'Daha çox oxu' : locale === 'ru' ? 'Читать далее' : 'Read more'}
                    <IoArrowForward size={16} />
                </span>
            </Link>
        </MotionArticle>
    );
}
