// components/portfolio/ProjectGallery.tsx
'use client';
import {useState} from 'react';
import {FaExpand, FaXmark, FaChevronLeft, FaChevronRight} from 'react-icons/fa6';
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
}

export const ProjectGallery = ({images}: ProjectGalleryProps) => {

    return (
        <section className="w-full bg-slate-50 py-16 lg:py-24">
            <div className="container">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Layihə şəkilləri</h2>

                {/* Grid Gallery */}
                <ReactFancyBox className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <Link
                            href={image.src}
                            data-fancybox={'gallery'}
                            key={image.id}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 cursor-pointer"
                        >
                            {image.src ? (
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div
                                    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                                    <span className="text-4xl font-bold text-blue-300">{index + 1}</span>
                                </div>
                            )}

                            {/* Overlay */}
                            <div
                                className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <FaExpand className="w-5 h-5 text-slate-900"/>
                                </div>
                            </div>

                            {/* Caption */}
                            {image.caption && (
                                <div
                                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-sm">{image.caption}</p>
                                </div>
                            )}
                        </Link>
                    ))}
                </ReactFancyBox>
            </div>
        </section>
    );
};