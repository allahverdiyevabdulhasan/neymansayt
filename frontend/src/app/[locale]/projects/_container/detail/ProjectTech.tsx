// components/portfolio/ProjectTech.tsx
interface ProjectTechProps {
    technologies?: string[];
}

export const ProjectTech = ({
    technologies = []
}: ProjectTechProps) => {
    if (!technologies || technologies.length === 0) return null;

    return (
        <section className="w-full bg-white py-12 relative">
            <div className="container relative z-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">
                    İstifadə olunan texnologiyalar
                </h2>
                <div className="flex flex-wrap gap-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-6 py-3 bg-white text-slate-700 font-semibold rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-blue-200 hover:shadow-[0_8px_20px_rgba(37,99,235,0.08)] hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};