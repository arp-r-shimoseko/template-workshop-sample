import { projects } from "../../data/portfolio";

export const Projects = () => {
  return (
    <section className="group">
      <h2 className="heading-accent mb-6 text-xl font-bold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/card block origin-center rounded-lg border border-gray-200/80 bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-blue-200/60 hover:shadow-lg focus-visible:z-10 focus-visible:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:scale-100"
          >
            <h3 className="text-lg font-semibold transition-colors duration-200 group-hover/card:text-blue-900">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
