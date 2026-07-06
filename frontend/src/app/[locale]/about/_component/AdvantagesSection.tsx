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
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#2563eb 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 container">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase">
              Niyə Biz?
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Üstünlüklərimiz
            </h2>
          </div>
          <p className="text-gray-600 max-w-md lg:text-right">
            Bizi digər texnologiya şirkətlərindən fərqləndirən əsas amillər.
          </p>
        </MotionDiv>

        {/* Grid - Refined Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayAdvantages.map((item, index) => (
            <MotionDiv
              key={item.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative p-8 lg:p-12 bg-white rounded-3xl border border-slate-100 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden ${index === displayAdvantages.length - 1 && displayAdvantages.length % 2 !== 0
                ? "md:col-span-2"
                : ""
                }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Number */}
                <span className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-100 group-hover:from-blue-600 group-hover:to-indigo-400 transition-all duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2563eb] transition-colors">
                    {getTranslated(item, 'title', locale)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
