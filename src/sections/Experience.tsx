import { ProjectCard } from "../components/ProjectCard";
import data from "../data/experience.json";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center px-8 py-24 snap-start snap-always add-bg md:px-32 lg:py-32"
    >
      <div className="flex flex-col items-center justify-center max-w-xl">
        <p className="mb-6 text-3xl font-bold md:text-4xl">Experience</p>
        <div className="flex w-full">
          <div className="mr-4 border border-gray-400 border-2-2"></div>
          <div className="w-full">
            {data.map((project : any, id: number) => {
              return (
                <ProjectCard
                  key={id}
                  title={project.title}
                  desc={project.desc}
                  company={project.company}
                  date={project.date}
                  code={project.code}
                  gallery={project.gallery}
                  live={project.live}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
