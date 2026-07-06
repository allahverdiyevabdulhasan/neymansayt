import Link from "next/link";
import { FaArrowUpRightDots } from "react-icons/fa6";

interface ServiceCardProps {
    title: string;
    description: string;
    slug: string;
    locale: string;
}

export const ServiceCard = ({
    title,
    description,
    slug,
    locale
}: ServiceCardProps) => {
    return (
        <Link
            href={`/${locale}/services/${slug}`}
            className="group flex flex-col justify-between h-full p-8 bg-white rounded-3xl border border-slate-100 hover:border-transparent hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300"
        >
            {/* Header with arrow */}
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <div
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <FaArrowUpRightDots className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed">
                {description}
            </p>

            {/* Bottom line animation */}
            <div className="mt-6 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
        </Link>
    );
};