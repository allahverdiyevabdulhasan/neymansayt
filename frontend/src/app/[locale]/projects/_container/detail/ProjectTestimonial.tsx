// components/portfolio/ProjectTestimonial.tsx
import { FaQuoteLeft } from 'react-icons/fa6';

interface ProjectTestimonialProps {
    quote: string;
    authorName: string;
    authorRole: string;
    authorAvatar?: string;
}

export const ProjectTestimonial = ({
                                       quote,
                                       authorName,
                                       authorRole,
                                       authorAvatar
                                   }: ProjectTestimonialProps) => {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="container">
                <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
                    <FaQuoteLeft className="w-10 h-10 text-blue-200 mb-6" />

                    <blockquote className="text-xl lg:text-2xl text-slate-800 leading-relaxed mb-8">
                        "{quote}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                        {authorAvatar ? (
                            <img
                                src={authorAvatar}
                                alt={authorName}
                                className="w-14 h-14 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">
                  {authorName.charAt(0)}
                </span>
                            </div>
                        )}
                        <div>
                            <div className="font-bold text-slate-900">{authorName}</div>
                            <div className="text-slate-500 text-sm">{authorRole}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};