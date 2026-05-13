import { ProjectsCard } from "@/globalComponent/cards/projects/ProjectsCard";
import { getTranslated } from "@/lib/api";

interface ProjectsCardWrappersProps {
    projects?: any[];
    locale: string;
}

export default function ProjectsCardWrappers({ projects, locale }: ProjectsCardWrappersProps) {
    const displayProjects = projects && projects.length > 0 ? projects : [];

    return (
        <section className={"pb-10 lg:pb-20"}>
            <div className={'container gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}>
                {displayProjects.map((item, i) => (
                    <ProjectsCard
                        key={item.id || i}
                        project={{
                            ...item,
                            title: getTranslated(item, 'title', locale),
                            category: getTranslated(item?.category, 'name', locale) || getTranslated(item, 'category_name', locale) || "Layihə"
                        }}
                        locale={locale}
                    />
                ))}
            </div>
        </section>
    );
}
