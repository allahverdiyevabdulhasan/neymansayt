'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { getTranslated } from '@/lib/api';

interface FAQItem {
    id?: number;
    question_az?: string;
    question_en?: string;
    question_ru?: string;
    answer_az?: string;
    answer_en?: string;
    answer_ru?: string;
    question?: string;
    answer?: string;
}

interface ContactFAQSectionProps {
    faqs: FAQItem[];
    locale: string;
}

export default function ContactFAQSection({ faqs, locale }: ContactFAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const title = locale === 'az' ? 'Tez-tez Verilən Suallar' : locale === 'ru' ? 'Часто Задаваемые Вопросы' : 'Frequently Asked Questions';
    const subtitle = locale === 'az' ? 'Xidmətlərimiz haqqında ən çox verilən sualların cavabları.' : locale === 'ru' ? 'Ответы на самые частые вопросы о наших услугах.' : 'Find answers to the most common questions about our services.';

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                        <FaQuestionCircle />
                        {title}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-600">
                        {subtitle}
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id || index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full cursor-pointer flex items-center justify-between p-6 lg:p-8 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-lg text-gray-900 pr-4">
                                    {getTranslated(faq, 'question', locale)}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"
                                >
                                    <FaChevronDown size={16} />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className="px-6 lg:px-8 pb-8 text-gray-600 leading-relaxed pt-2"
                                            dangerouslySetInnerHTML={{ __html: getTranslated(faq, 'answer', locale) }}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}