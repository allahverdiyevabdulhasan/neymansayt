"use client";
import ReactFancyBox from "@/lib/fancybox";
import CustomImage from "@/globalComponent/CustomImage";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

interface ProjectImage {
    src: string;
    alt: string;
}

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    images?: { src: string; alt: string }[];
    slug?: string;
}

export function ProjectsCard({ project, locale }: { project: Project, locale: string }) {
    const projectLink = `/${locale}/projects/${project.slug || project.id}`;
    const thumbnail = project.image || "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg";

    return (
        <div className="group h-full w-full flex flex-col bg-white">
            <ReactFancyBox>
                <div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-5 cursor-zoom-in shadow-sm">

                    <a href={thumbnail}
                        data-fancybox={`gallery-${project.id}`}
                        className="block w-full h-full relative cursor-pointer"
                    >
                        <CustomImage
                            src={thumbnail}
                            title={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 350px"
                        />
                        <div
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div
                                className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-gray-700 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </div>
                    </a>

                    {project.images && project.images.slice(1).map((img, i) => (
                        <a key={i} href={img.src} data-fancybox={`gallery-${project.id}`} className="hidden">
                            <img src={img.src} alt={img.alt} />
                        </a>
                    ))}
                </div>
            </ReactFancyBox>

            <div className="space-y-3 px-1 flex-grow">
                <span
                    className="inline-block px-2.5 py-1 rounded bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                    {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                </h3>
                <Link
                    href={projectLink}
                    className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-sm group/link cursor-pointer hover:underline"
                >
                    Layihəyə bax
                    <IoArrowForward className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    )
        ;
}
