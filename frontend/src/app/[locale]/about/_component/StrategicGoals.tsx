"use client";
import React from "react";
import { MotionDiv } from "@/lib/motion";
import { getTranslated } from "@/lib/api";

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
      className="relative h-full"
    >
      <div
        className={`rounded-[2.5rem] p-10 lg:p-14 h-full transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${isLight
            ? "bg-white border border-blue-50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] hover:border-blue-100"
            : "bg-gradient-to-br from-blue-600 to-blue-800 shadow-[0_20px_50px_rgba(37,99,235,0.25)] text-white"
          }`}
      >
        {!isLight && (
            <>
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-400/20 blur-[40px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            </>
        )}

        <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-6 mb-10">
                <span
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-2xl font-black ${isLight ? "bg-blue-50 text-blue-600 shadow-sm" : "bg-white/10 text-white backdrop-blur-md border border-white/20"
                    }`}
                >
                    {number}
                </span>
                <span
                    className={`text-sm font-bold tracking-widest uppercase ${isLight ? "text-blue-600" : "text-blue-200"
                    }`}
                >
                    {label}
                </span>
            </div>

            <h3
                className={`text-3xl lg:text-4xl font-black mb-6 leading-tight ${isLight ? "text-blue-950" : "text-white"
                }`}
            >
                {title}
            </h3>

            <p
                className={`text-lg lg:text-xl font-medium leading-relaxed flex-grow ${isLight ? "text-slate-600" : "text-blue-50"
                }`}
            >
                {description}
            </p>
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
      className="mt-24 text-center max-w-4xl mx-auto"
    >
      <blockquote className="relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl text-blue-100 font-serif opacity-50 select-none">"</div>
        <p className="relative z-10 text-2xl lg:text-4xl text-slate-700 font-medium italic leading-relaxed px-4">
          {text}
        </p>
      </blockquote>
      <div className="mt-12 flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 border-4 border-white shadow-md overflow-hidden relative">
             <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-bold text-xl uppercase">
                 {author.charAt(0)}
             </div>
        </div>
        <div className="text-center">
          <div className="font-black text-xl text-blue-950">{author}</div>
          <div className="text-sm font-semibold text-blue-600 uppercase tracking-widest mt-1">{role}</div>
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
      className="text-center mb-20"
    >
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold tracking-wider uppercase shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          {subtitle}
      </div>
      <h2 className="text-4xl lg:text-5xl font-black text-blue-950">
        {title}
      </h2>
    </MotionDiv>
  );
};

interface StrategicGoalsProps {
  stats: any[];
  content: any;
  locale: string;
}

const StrategicGoals: React.FC<StrategicGoalsProps> = ({ stats, content, locale }) => {
  const quoteText = getTranslated(content, "quote_text", locale) || "";
  const quoteAuthor = getTranslated(content, "quote_author", locale) || "";
  const quoteRole = getTranslated(content, "quote_role", locale) || "";

  const t = {
    az: { values: "Dəyərlərimiz", why: "Nə üçün varıq?", visionLabel: "VİZYONUMUZ", missionLabel: "MİSSİYAMIZ", visionTitleDef: "Vizyonumuz", missionTitleDef: "Missiyamız" },
    en: { values: "Our Values", why: "Why do we exist?", visionLabel: "OUR VISION", missionLabel: "OUR MISSION", visionTitleDef: "Our Vision", missionTitleDef: "Our Mission" },
    ru: { values: "Наши Ценности", why: "Зачем мы существуем?", visionLabel: "НАШЕ ВИДЕНИЕ", missionLabel: "НАША МИССИЯ", visionTitleDef: "Наше видение", missionTitleDef: "Наша миссия" },
    tr: { values: "Değerlerimiz", why: "Neden varız?", visionLabel: "VİZYONUMUZ", missionLabel: "MİSYONUMUZ", visionTitleDef: "Vizyonumuz", missionTitleDef: "Misyonumuz" }
  }[locale as 'az'|'en'|'ru'|'tr'] || { values: "Dəyərlərimiz", why: "Nə üçün varıq?", visionLabel: "VİZYONUMUZ", missionLabel: "MİSSİYAMIZ", visionTitleDef: "Vizyonumuz", missionTitleDef: "Missiyamız" };

  const visionTitle = getTranslated(content, "vision_title", locale) || t.visionTitleDef;
  const visionDesc = getTranslated(content, "vision_description", locale) || "";

  const missionTitle = getTranslated(content, "mission_title", locale) || t.missionTitleDef;
  const missionDesc = getTranslated(content, "mission_description", locale) || "";

  return (
    <section className="relative bg-[#FAFAFC] py-20 lg:py-32 overflow-hidden border-t border-slate-100/50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 container">
        <SectionHeader subtitle={t.values} title={t.why} />
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <VisionMissionCard
            number="01"
            label={t.visionLabel}
            title={visionTitle}
            description={visionDesc}
            variant="light"
          />
          <VisionMissionCard
            number="02"
            label={t.missionLabel}
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
          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-12 rounded-[3rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center relative">
                {idx !== 0 && (
                  <div className="hidden md:block absolute top-1/2 -left-4 -translate-y-1/2 w-px h-16 bg-slate-100" />
                )}
                <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-3">{stat.value}</div>
                <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">{getTranslated(stat, 'label', locale)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StrategicGoals;
