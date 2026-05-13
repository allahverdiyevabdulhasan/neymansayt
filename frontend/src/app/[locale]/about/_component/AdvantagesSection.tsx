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

        {/* Grid - Alternating Layout */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden">
          {displayAdvantages.map((item, index) => (
            <MotionDiv
              key={item.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group py-8 px-2 lg:p-10 bg-white hover:bg-gray-50 transition-colors duration-300 ${index === displayAdvantages.length - 1 && displayAdvantages.length % 2 !== 0
                ? "md:col-span-2"
                : ""
                }`}
            >
              <div className="flex items-start gap-6">
                {/* Number */}
                <span className="text-4xl lg:text-5xl font-bold text-gray-200 group-hover:text-[#2563eb] transition-colors duration-300">
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
