import { projects } from "../../data/portfolio";

export const Projects = () => {
  return (
    <section>
      <h2 className="mb-6 text-xl font-bold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
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
