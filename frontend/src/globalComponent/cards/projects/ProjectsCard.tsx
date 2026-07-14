"use client";
import ReactFancyBox from "@/lib/fancybox";
import CustomImage from "@/globalComponent/CustomImage";
import { Link } from "@/i18n/navigation";
import { IoArrowForward } from "react-icons/io5";

interface ProjectImage {
    src: string;
    alt: string;
}

interface Project {
    id: number;
    title: string;
    category: string;
    image?: string;
    thumbnail?: string;
    images?: { src: string; alt: string }[];
    slug?: string;
}

export function ProjectsCard({ project, locale }: { project: Project, locale: string }) {
    const projectLink = `/projects/${project.slug || project.id}`;
    let thumbnail = project.thumbnail || project.image || "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg";
    
    // Fix relative image URLs from Django API
    if (thumbnail.startsWith('/')) {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'https://api.neymantech.com';
        thumbnail = `${baseUrl}${thumbnail}`;
    }

    return (
        <div className="group relative h-[420px] w-full rounded-[2rem] overflow-hidden bg-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:-translate-y-1.5 transition-all duration-500 border border-slate-100">
            {/* Background Image Area */}
            <ReactFancyBox>
                <div className="absolute inset-0 cursor-zoom-in">
                    <a href={thumbnail} data-fancybox={`gallery-${project.id}`} className="block w-full h-full relative">
                        <CustomImage
                            src={thumbnail}
                            title={project.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 380px"
                        />
                        {/* Soft Gradient Overlay for text readability at the bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    </a>
                    
                    {/* Extra Images for Fancybox Gallery */}
                    {project.images && project.images.slice(1).map((img: any, i) => {
                        const imgSrc = img.image || img.src || '';
                        if (!imgSrc) return null;
                        const finalSrc = imgSrc.startsWith('/') ? `https://api.neymantech.com${imgSrc}` : imgSrc;
                        return (
                            <a key={i} href={finalSrc} data-fancybox={`gallery-${project.id}`} className="hidden">
                                <img src={finalSrc} alt={img.alt || project.title} />
                            </a>
                        );
                    })}
                </div>
            </ReactFancyBox>

            {/* Top Left: Floating Category Pill */}
            <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {project.category}
                </span>
            </div>

            {/* Bottom Section: Title & Button */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4 pointer-events-none">
                
                {/* Title */}
                <div className="flex-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white leading-tight line-clamp-2">
                        {project.title}
                    </h3>
                </div>

                {/* Circular Action Button */}
                <div className="pointer-events-auto shrink-0 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <Link
                        // @ts-ignore
                        href={projectLink as any}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-slate-900 hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-lg"
                        aria-label={`View ${project.title}`}
                    >
                        <IoArrowForward size={22} className="transform group-hover:-rotate-45 transition-transform duration-300" />
                    </Link>
                </div>
                
            </div>
        </div>
    );
}
