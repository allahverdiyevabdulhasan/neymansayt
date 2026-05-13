// components/portfolio/ProjectTech.tsx
interface ProjectTechProps {
    technologies?: string[];
}

export const ProjectTech = ({
    technologies = []
}: ProjectTechProps) => {
    return (
        <section className="w-full bg-white py-12">
            <div className="container">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    İstifadə olunan texnologiyalar
                </h2>
                <div className="flex flex-wrap gap-3">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-5 py-2.5 bg-blue-50 text-blue-700 font-medium rounded-full hover:bg-blue-100 transition-colors cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};