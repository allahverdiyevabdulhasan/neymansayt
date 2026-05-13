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
        <section className="w-full bg-white py-10">
            <div className="container">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaCircleQuestion className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Tez-tez verilən suallar
                    </h2>
                </div>

                <div className="space-y-4">
                    {displayFaqs.map((item, index) => (
                        <div
                            key={item.id || index}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                    ? 'border-blue-200 bg-blue-50/30 shadow-sm'
                                    : 'border-slate-200 hover:border-blue-200'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full cursor-pointer flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-semibold text-slate-900 text-lg pr-4">
                                    {getTranslated(item, 'question', locale)}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index
                                        ? 'bg-blue-600 text-white rotate-180'
                                        : 'bg-slate-100 text-slate-500'
                                    }`}>
                                    {openIndex === index ? (
                                        <FaMinus className="w-3 h-3" />
                                    ) : (
                                        <FaPlus className="w-3 h-3" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="p-6  text-slate-600 leading-relaxed bg-white">
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