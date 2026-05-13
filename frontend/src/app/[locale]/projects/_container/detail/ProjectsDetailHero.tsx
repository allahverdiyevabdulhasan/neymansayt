import {FaExternalLinkAlt} from "react-icons/fa";

interface PortfolioHeroProps {
    title: string;
    subtitle: string;
    mainImage: string;
    liveUrl?: string;
    category: string;
}

export const PortfolioHero = ({
                                  title,
                                  subtitle,
                                  mainImage,
                                  liveUrl,
                                  category
                              }: PortfolioHeroProps) => {
    return (
        <section className="w-full bg-white pt-8 pb-12">
            <div className="container">
                <div className="mb-8">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-4">
            {category}
          </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
                        {title}
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl">
                        {subtitle}
                    </p>
                </div>

                {/* Main Image */}
                <div
                    className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
                    {mainImage ? (
                        <img
                            src={mainImage}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-9xl font-bold text-blue-200">M</span>
                        </div>
                    )}

                    {/* Live Preview Button */}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-6 right-6 inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-900 font-semibold rounded-xl transition-all shadow-lg"
                        >
                            <span>Canlı baxış</span>
                            <FaExternalLinkAlt className="w-4 h-4"/>
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};