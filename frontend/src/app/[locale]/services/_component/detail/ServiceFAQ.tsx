'use client';
import { useState } from 'react';
import {
    FaPlus,
    FaMinus,
    FaCircleQuestion
} from 'react-icons/fa6';
import { getTranslated } from "@/lib/api";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

interface ServiceFAQProps {
    faqs?: FAQItem[];
    locale: string;
}

export const ServiceFAQ = ({ faqs, locale }: ServiceFAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const displayFaqs = faqs && faqs.length > 0 ? faqs : [];

    if (displayFaqs.length === 0) return null;

    return (
        <section className="w-full bg-[#FAFAFC] py-16 lg:py-24 border-t border-slate-100">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                        <FaCircleQuestion className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-blue-950">
                        Tez-tez verilən suallar
                    </h2>
                </div>

                <div className="space-y-4 max-w-4xl mx-auto">
                    {displayFaqs.map((item, index) => (
                        <div
                            key={item.id || index}
                            className={`border rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden transition-all duration-300 ${openIndex === index
                                    ? 'border-blue-200 bg-white shadow-[0_10px_40px_rgba(37,99,235,0.08)]'
                                    : 'border-slate-200 bg-white hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full cursor-pointer flex items-center justify-between p-6 lg:p-8 text-left bg-transparent transition-colors"
                            >
                                <span className={`font-bold text-lg lg:text-xl pr-4 transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-900'}`}>
                                    {getTranslated(item, 'question', locale)}
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index
                                        ? 'bg-blue-600 text-white rotate-180 shadow-md'
                                        : 'bg-slate-50 text-slate-500 border border-slate-200'
                                    }`}>
                                    {openIndex === index ? (
                                        <FaMinus className="w-4 h-4" />
                                    ) : (
                                        <FaPlus className="w-4 h-4" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 lg:p-8 pt-0 text-slate-600 leading-relaxed bg-transparent font-medium text-base lg:text-lg">
                                    {getTranslated(item, 'answer', locale)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};