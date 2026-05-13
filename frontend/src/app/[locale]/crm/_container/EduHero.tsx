// components/educrm/EduHero.tsx
import { FaArrowRight, FaPlay, FaGraduationCap } from 'react-icons/fa6';
import { getTranslated } from '@/lib/api';

interface EduHeroProps {
    title: string;
    highlight: string;
    description: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    mockupImage?: string;
    stats?: any;
    locale?: string;
}

export const EduHero = ({
    title,
    highlight,
    description,
    primaryCta = { label: "Sistemə Daxil Ol", href: "#login" },
    secondaryCta = { label: "Demo İstə", href: "#demo" },
    mockupImage,
    stats,
    locale = "az"
}: EduHeroProps) => {
    return (
        <section className="w-full bg-white pt-8 pb-16 lg:pb-24 overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                            <FaGraduationCap className="w-4 h-4" />
                            <span>Təhsil CRM Sistemi</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            {title}
                            <span className="text-blue-600">{highlight}</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={primaryCta.href}
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
                            >
                                <span>{primaryCta.label}</span>
                                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href={secondaryCta.href}
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-blue-300 transition-all duration-300"
                            >
                                <FaPlay className="w-4 h-4 text-blue-600" />
                                <span>{secondaryCta.label}</span>
                            </a>
                        </div>
                    </div>

                    {/* Right - Mockup */}
                    <div className="relative">
                        <div
                            className="relative aspect-4/3 bg-linear-to-br from-blue-100 to-indigo-100 rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50">
                            {mockupImage ? (
                                <img
                                    src={mockupImage}
                                    alt="EduCRM Dashboard"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <div
                                        className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4">
                                        <FaGraduationCap className="w-12 h-12 text-blue-600" />
                                    </div>
                                    <div className="text-2xl font-bold text-blue-600">EduCRM</div>
                                    <div className="text-blue-400 text-sm mt-2">Təhsil İdarəetmə Sistemi</div>
                                </div>
                            )}
                        </div>

                        {/* Floating Stats */}
                        {stats && (
                            <div
                                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">📈</span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">{stats.main_percentage}</div>
                                        <div className="text-sm text-slate-500">{getTranslated(stats, 'label', locale)}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};