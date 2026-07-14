export default function ProjectsMainHero({ locale }: { locale: string }) {
    return (
        <section
            className="relative w-full py-10 lg:py-20 overflow-hidden">
            <div className="container">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            Portfolio
          </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                    Reallasdirdiqimiz lahiyeler
                </h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                    {locale === 'en' ? "Explore our successfully completed projects" : locale === 'ru' ? "Ознакомьтесь с нашими успешно завершенными проектами" : locale === 'tr' ? "Başarıyla tamamladığımız projelerimizi inceleyin" : "Uğurla tamamladığımız layihələrimizlə tanış olun"}
                </p>
            </div>
        </section>
    );
};