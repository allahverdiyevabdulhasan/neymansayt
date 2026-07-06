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
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden border-b border-gray-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[13px] font-bold tracking-wider uppercase">
              Haqqımızda
            </span>

            <h1 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              {title}
            </h1>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            {/* Separator */}
            <div className="w-24 h-1.5 bg-blue-600 rounded-full" />
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -z-10 top-6 left-6 w-full h-full border-2 border-blue-100/50 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
