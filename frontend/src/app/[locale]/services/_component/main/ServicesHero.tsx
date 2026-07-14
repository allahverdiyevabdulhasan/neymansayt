"use client";
import { MotionDiv } from "@/lib/motion";

export default function ServicesHero({ locale }: { locale: string }) {
    const t = {
        az: { title: "Xidmətlərimiz", desc: "Biznesinizin rəqəmsal transformasiyası üçün lazım olan bütün xidmətləri bir yerdə toplayırıq.", heading1: "Hər ehtiyacınıza uyğun", heading2: "texniki həllər" },
        en: { title: "Our Services", desc: "We gather all the services you need for your business's digital transformation in one place.", heading1: "Technical solutions", heading2: "for every need" },
        ru: { title: "Наши Услуги", desc: "Мы собрали все необходимые услуги для цифровой трансформации вашего бизнеса в одном месте.", heading1: "Технические решения", heading2: "для любых потребностей" },
        tr: { title: "Hizmetlerimiz", desc: "İşletmenizin dijital dönüşümü için gereken tüm hizmetleri tek bir yerde topluyoruz.", heading1: "Her ihtiyacınıza uygun", heading2: "teknik çözümler" }
    }[locale as 'az'|'en'|'ru'|'tr'] || { title: "Xidmətlərimiz", desc: "Biznesinizin rəqəmsal transformasiyası üçün lazım olan bütün xidmətləri bir yerdə toplayırıq.", heading1: "Hər ehtiyacınıza uyğun", heading2: "texniki həllər" };

    return (
        <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-[#FAFAFC]">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/60 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{
                    backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container relative z-10 text-center max-w-4xl mx-auto">
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold tracking-wider uppercase shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        {t.title}
                    </div>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-blue-950 mb-6 leading-tight">
                        {t.heading1} <br />
                        <span className="text-blue-600">{t.heading2}</span>
                    </h1>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
                >
                    {t.desc}
                </MotionDiv>
            </div>
            
            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
};