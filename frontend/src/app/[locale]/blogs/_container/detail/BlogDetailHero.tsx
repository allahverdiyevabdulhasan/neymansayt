import { FaCalendar, FaClock, } from 'react-icons/fa6';
import { BlogShareButtons } from "@/app/[locale]/blogs/_container/detail/atoms/BlogShareButtons";
import CustomImage from "@/globalComponent/CustomImage";

interface BlogDetailHeroProps {
    title: string;
    excerpt: string;
    coverImage: string;
    publishDate: string;
    readTime: string;
    category: string;
    locale: string;
}

export const BlogDetailHero = ({
    title,
    excerpt,
    coverImage,
    publishDate,
    readTime,
    category,
    locale
}: BlogDetailHeroProps) => {

    const dateFormatted = publishDate ? new Date(publishDate).toLocaleDateString(locale === 'az' ? 'az-AZ' : locale === 'ru' ? 'ru-RU' : 'en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }) : '';

    return (
        <section className="w-full bg-white py-8">
            <div className="container">
                {category && (
                    <div className="mb-6">
                        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                            {category}
                        </span>
                    </div>
                )}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 max-w-4xl">
                    {title}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl">
                    {excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-slate-200">
                    <div className="flex items-center gap-2 text-slate-500">
                        <FaCalendar className="w-4 h-4" />
                        <span>{dateFormatted}</span>
                    </div>
                    {/* Optionally add read time if needed */}
                </div>
                <BlogShareButtons title={title} />

                <div className="relative aspect-[21/9] lg:aspect-[21/8] rounded-[2.5rem] overflow-hidden mt-12 bg-slate-100 shadow-2xl shadow-blue-900/10 border border-slate-100">
                    {coverImage ? (
                        <>
                            <CustomImage
                                src={coverImage}
                                title={title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </>
                    ) : (
                        <div
                            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                            <span className="text-6xl text-blue-300 font-black">Neyman</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};