// components/portfolio/ProjectGallery.tsx
'use client';
import {FaExpand} from 'react-icons/fa6';
import ReactFancyBox from "@/lib/fancybox";
import Link from "next/link";

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    caption?: string;
}

interface ProjectGalleryProps {
    images: GalleryImage[];
    locale: string;
}

export const ProjectGallery = ({images, locale}: ProjectGalleryProps) => {

    if (!images || images.length === 0) return null;

    return (
        <section className="w-full bg-slate-50 py-16 lg:py-24">
            <div className="container">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">{locale === 'en' ? 'Project Gallery' : locale === 'ru' ? 'Галерея Проекта' : locale === 'tr' ? 'Proje Galerisi' : 'Layihə Qalereyası'}</h2>

                {/* Grid Gallery */}
                <ReactFancyBox className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {images.map((image, index) => (
                        <Link
                            href={image.src}
                            data-fancybox={'gallery'}
                            key={image.id}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 cursor-zoom-in shadow-sm hover:shadow-[0_15px_40px_rgba(37,99,235,0.15)] transition-all duration-500"
                        >
                            {image.src ? (
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            ) : (
                                <div
                                    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                                    <span className="text-4xl font-bold text-blue-300">{index + 1}</span>
                                </div>
                            )}

                            {/* Premium B2B Overlay */}
                            <div
                                className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-500 delay-75">
                                    <FaExpand className="w-5 h-5 text-blue-600"/>
                                </div>
                            </div>

                            {/* Caption */}
                            {image.caption && (
                                <div
                                    className="absolute bottom-0 left-0 right-0 p-6 pt-12 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white font-medium text-sm lg:text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.caption}</p>
                                </div>
                            )}
                        </Link>
                    ))}
                </ReactFancyBox>
            </div>
        </section>
    );
};