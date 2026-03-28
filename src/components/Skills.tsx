import { skills } from "../../data/portfolio";

export const Skills = () => {
  return (
    <section className="group">
      <h2 className="heading-accent mb-6 text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-200/90 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {skill.name}
            <span className="ml-1 text-blue-500">({skill.level})</span>
          </span>
        ))}
      </div>
    </section>
  );
};
