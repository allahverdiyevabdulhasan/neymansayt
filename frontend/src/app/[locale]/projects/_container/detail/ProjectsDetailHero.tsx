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
        <section className="w-full bg-white pt-12 pb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 blur-[150px] rounded-full pointer-events-none" />
            <div className="container relative z-10">
                <div className="max-w-4xl mb-12">
                    <span className="inline-block px-5 py-2 bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider rounded-lg mb-6">
                        {category}
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-blue-950 leading-tight mb-6">
                        {title}
                    </h1>
                    <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
                        {subtitle}
                    </p>
                </div>

                {/* Main Image with Premium Box Shadow and Rounded 3xl */}
                <div
                    className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.1)] border border-blue-100/50">
                    {mainImage ? (
                        <img
                            src={mainImage}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                            <span className="text-9xl font-bold text-blue-200">M</span>
                        </div>
                    )}

                    {/* Live Preview Button */}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-8 right-8 inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(37,99,235,0.4)]"
                        >
                            <span>Canlı baxış</span>
                            <FaExternalLinkAlt className="w-5 h-5"/>
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};