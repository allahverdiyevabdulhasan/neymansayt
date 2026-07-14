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
            className="group flex flex-col justify-between h-full p-8 lg:p-10 bg-white rounded-[2.5rem] border border-blue-50/60 hover:border-blue-100 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
        >
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header with arrow */}
                <div className="flex items-start justify-between mb-8">
                    <h3 className="text-2xl font-black text-blue-950 group-hover:text-blue-700 transition-colors pr-4">
                        {title}
                    </h3>
                    <div
                        className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-600/30">
                        <FaArrowUpRightDots className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                    {description}
                </p>

                {/* Bottom line animation / CTA */}
                <div className="mt-auto">
                    <div className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                        Ətraflı Məlumat <div className="h-px bg-blue-600 w-0 group-hover:w-8 transition-all duration-500 ml-2" />
                    </div>
                </div>
            </div>
        </Link>
    );
};