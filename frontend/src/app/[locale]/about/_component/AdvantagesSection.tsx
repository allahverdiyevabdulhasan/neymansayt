"use client";
import React from "react";
import { MotionDiv } from "@/lib/motion";
import { getTranslated } from "@/lib/api";

interface AdvantageItem {
  id: number;
  title: string;
  description: string;
  order: number;
}

interface AdvantagesSectionProps {
  advantages: AdvantageItem[];
  locale: string;
}

const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ advantages, locale }) => {
  const displayAdvantages = advantages && advantages.length > 0 ? advantages : [];

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden border-t border-slate-100">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FAFAFC] border border-blue-100 text-blue-600 text-sm font-bold tracking-wider uppercase shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                {locale === 'en' ? 'Why Us?' : locale === 'ru' ? 'Почему Мы?' : locale === 'tr' ? 'Neden Biz?' : 'Niyə Biz?'}
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-blue-950 leading-tight">
              {locale === 'en' ? 'Our Advantages' : locale === 'ru' ? 'Наши Преимущества' : locale === 'tr' ? 'Avantajlarımız' : 'Üstünlüklərimiz'}
            </h2>
          </div>
          <p className="text-slate-600 text-lg lg:text-xl font-medium max-w-lg lg:text-right">
            {locale === 'en' ? 'The main factors that distinguish us from other technology companies.' : locale === 'ru' ? 'Основные факторы, отличающие нас от других технологических компаний.' : locale === 'tr' ? 'Bizi diğer teknoloji şirketlerinden ayıran temel faktörler.' : 'Bizi digər texnologiya şirkətlərindən fərqləndirən əsas amillər.'}
          </p>
        </MotionDiv>

        {/* Grid - Refined Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayAdvantages.map((item, index) => (
            <MotionDiv
              key={item.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative p-8 lg:p-12 bg-[#FAFAFC] rounded-[2.5rem] border border-blue-50 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden ${index === displayAdvantages.length - 1 && displayAdvantages.length % 2 !== 0
                ? "md:col-span-2"
                : ""
                }`}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100/50 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Number */}
                <div className="flex items-center justify-center w-24 h-24 rounded-[2rem] bg-white border border-slate-100 shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 shrink-0 group-hover:shadow-[0_8px_30px_rgba(37,99,235,0.3)]">
                    <span className="text-4xl font-black text-slate-300 group-hover:text-white transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                    </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-700 transition-colors">
                    {getTranslated(item, 'title', locale)}
                  </h3>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed">
                    {getTranslated(item, 'description', locale)}
                  </p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
