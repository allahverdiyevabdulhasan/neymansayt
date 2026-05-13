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
    <section className="relative bg-white py-10 lg:py-20 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase">
              Haqqımızda
            </span>

            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            {/* Separator */}
            <div className="w-20 h-1 bg-[#2563eb] rounded-full" />
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-4/3 rounded-lg overflow-hidden">
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
            <div className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-blue-100 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
