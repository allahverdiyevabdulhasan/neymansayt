"use client";
import React from "react";
import { MotionDiv } from "@/lib/motion";
interface VisionMissionCardProps {
  number: string;
  label: string;
  title: string;
  description: string;
  variant: "light" | "dark";
  delay?: number;
}

interface QuoteProps {
  text: string;
  author: string;
  role: string;
  delay?: number;
}
export const VisionMissionCard: React.FC<VisionMissionCardProps> = ({
  number,
  label,
  title,
  description,
  variant,
  delay = 0,
}) => {
  const isLight = variant === "light";

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <div
        className={`rounded-3xl p-8 lg:p-10 shadow-xl h-full ${isLight
            ? "bg-white shadow-gray-100 border border-gray-100"
            : "bg-[#2563eb] shadow-blue-900/20 text-white"
          }`}
      >
        <div className="absolute -top-4 left-8">
          <span
            className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold ${isLight ? "bg-[#2563eb] text-white" : "bg-white text-[#2563eb]"
              }`}
          >
            {number}
          </span>
        </div>

        <div className="pt-6">
          <span
            className={`text-sm font-semibold tracking-wider uppercase ${isLight ? "text-[#2563eb]" : "text-blue-200"
              }`}
          >
            {label}
          </span>

          <h3
            className={`text-2xl lg:text-3xl font-bold mt-4 mb-6 leading-tight ${isLight ? "text-gray-900" : "text-white"
              }`}
          >
            {title}
          </h3>

          <p
            className={`leading-relaxed ${isLight ? "text-gray-600" : "text-blue-100"
              }`}
          >
            {description}
          </p>
          <div
            className={`mt-8 h-1 w-20 rounded-full ${isLight ? "bg-[#2563eb]" : "bg-white/50"
              }`}
          />
        </div>
      </div>
    </MotionDiv>
  );
};
export const QuoteBlock: React.FC<QuoteProps> = ({
  text,
  author,
  role,
  delay = 0,
}) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mt-16 text-center max-w-3xl mx-auto"
    >
      <blockquote className="relative">
        <p className="text-xl lg:text-2xl text-gray-600 italic leading-relaxed">
          {text}
        </p>
      </blockquote>
      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div className="text-left">
          <div className="font-bold text-gray-900">{author}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </MotionDiv>
  );
};

// Section Header Component
export const SectionHeader: React.FC<{
  subtitle: string;
  title: string;
}> = ({ subtitle, title }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase">
        {subtitle}
      </span>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
        {title}
      </h2>
    </MotionDiv>
  );
};
import { getTranslated } from "@/lib/api";

interface StrategicGoalsProps {
  stats: any[];
  content: any;
  locale: string;
}

const StrategicGoals: React.FC<StrategicGoalsProps> = ({ stats, content, locale }) => {
  const visionTitle = getTranslated(content, "vision_title", locale) || "Vizyonumuz";
  const visionDesc = getTranslated(content, "vision_description", locale) || "";

  const missionTitle = getTranslated(content, "mission_title", locale) || "Missiyamız";
  const missionDesc = getTranslated(content, "mission_description", locale) || "";

  const quoteText = getTranslated(content, "quote_text", locale) || "";
  const quoteAuthor = getTranslated(content, "quote_author", locale) || "";
  const quoteRole = getTranslated(content, "quote_role", locale) || "";

  return (
    <section className="relative bg-white py-10 lg:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50" />

      <div className="relative z-10 container">
        <SectionHeader subtitle="Dəyərlərimiz" title="Nə üçün varıq?" />
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <VisionMissionCard
            number="01"
            label="Vizyonumuz"
            title={visionTitle}
            description={visionDesc}
            variant="light"
          />
          <VisionMissionCard
            number="02"
            label="Missiyamız"
            title={missionTitle}
            description={missionDesc}
            variant="dark"
            delay={0.2}
          />
        </div>

        {quoteText && (
          <QuoteBlock
            text={quoteText}
            author={quoteAuthor}
            role={quoteRole}
            delay={0.4}
          />
        )}

        {/* Stats Section */}
        {stats && stats.length > 0 && (
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">{getTranslated(stat, 'label', locale)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StrategicGoals;
