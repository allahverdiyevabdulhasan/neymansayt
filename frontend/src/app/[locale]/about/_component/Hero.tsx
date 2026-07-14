import React from "react";
import Image from "next/image";
import { getTranslated } from "@/lib/api";

interface AboutHeroProps {
  content: any;
  locale: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ content, locale }) => {
  const title = getTranslated(content, "hero_title", locale) || "Haqqımızda";
  const description = getTranslated(content, "hero_description", locale) || "";
  const imageUrl = content?.hero_image || "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800";

  return (
    <section className="relative bg-[#FAFAFC] py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold tracking-wider uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              {locale === 'en' ? 'About Us' : locale === 'ru' ? 'О Нас' : locale === 'tr' ? 'Hakkımızda' : 'Haqqımızda'}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 leading-tight tracking-tight">
              {title}
            </h1>

            <div className="space-y-4 text-slate-600 text-xl font-medium leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            {/* Separator */}
            <div className="w-24 h-2 bg-blue-600 rounded-full" />
          </div>

          {/* Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] lg:aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.15)] group">
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full rounded-[2.5rem] bg-blue-50 border border-blue-100" />
            <div className="absolute -z-20 top-12 -right-12 w-full h-full rounded-[2.5rem] bg-white border border-slate-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
