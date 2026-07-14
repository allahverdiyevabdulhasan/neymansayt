// components/services/ServiceDetail/ServiceIncludes.tsx
import {
    FaListCheck
} from 'react-icons/fa6';
import { FaCheckCircle } from "react-icons/fa";

interface ServiceIncludesProps {
    deliverables?: string;
    locale: string;
}

export const ServiceIncludes = ({
    deliverables,
    locale
}: ServiceIncludesProps) => {
    const t = {
        az: { title: "Nələr daxildir?" },
        en: { title: "What is included?" },
        ru: { title: "Что включено?" },
        tr: { title: "Neler dahil?" }
    }[locale as 'az'|'en'|'ru'|'tr'] || { title: "Nələr daxildir?" };

    const items = deliverables ? deliverables.split('\n').filter(i => i.trim() !== '') : [];

    if (items.length === 0) return null;

    return (
        <section className="w-full bg-white py-16 lg:py-20 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 blur-[80px] rounded-full pointer-events-none" />
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Deliverables Bento */}
                    <div className="bg-[#FAFAFC] rounded-[2.5rem] p-10 lg:p-14 border border-blue-50 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.06)] transition-all duration-500">
                        <div className="flex items-center gap-5 mb-10">
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center">
                                <FaListCheck className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-black text-blue-950">
                                {t.title}
                            </h2>
                        </div>
                        <ul className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {items.map((item, index) => (
                                <li key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors duration-300">
                                    <FaCheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};