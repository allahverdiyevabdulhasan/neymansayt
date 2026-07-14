"use client"
import React from "react";
import { MotionArticle } from "@/lib/motion";
import Link from "next/link";
import { IoArrowForward, IoCalendarOutline } from "react-icons/io5";
import CustomImage from "@/globalComponent/CustomImage";
// Category Colors
const categoryColors: Record<string, string> = {
    "Yeniliklər": "bg-yellow-100 text-yellow-700",
    "Layihələr": "bg-blue-100 text-blue-700",
    "Xəbərlər": "bg-red-100 text-red-700",
};

interface NewsItem {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
    image: string;
    slug: string;
}

const SmallNewsCard: React.FC<{ item: NewsItem; index: number; locale: string }> = ({ item, index, locale }) => {
    const blogLink = `/${locale}/blogs/${item.slug || item.id}`;
    return (
        <MotionArticle
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <Link href={blogLink} className="flex gap-4">
                {/* Content - Left */}
                <div className="flex-1 min-w-0">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-2">
                        <span
                            className={`px-2 py-0.5 rounded text-xs font-medium ${categoryColors[item.category] || "bg-gray-100 text-gray-700"}`}>
                            {item.category}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400 text-xs">
                            <IoCalendarOutline size={12} />
                            {item.date}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#2563eb] transition-colors leading-snug">
                        {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm line-clamp-2 mb-2">
                        {item.description}
                    </p>

                    {/* Link */}
                    <span className="inline-flex items-center gap-1 text-[#2563eb] text-sm font-medium">
                        {locale === 'az' ? 'Daha çox oxu' : locale === 'ru' ? 'Читать далее' : locale === 'tr' ? 'Daha fazla oku' : 'Read more'}
                        <IoArrowForward size={14} />
                    </span>
                </div>

                {/* Image - Right */}
                <div className="relative w-32 h-24 sm:w-40 sm:h-28 flex-shrink-0 overflow-hidden rounded-lg">
                    <CustomImage
                        src={item.image}
                        title={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="160px"
                    />
                </div>
            </Link>
        </MotionArticle>
    );
};
export default SmallNewsCard;