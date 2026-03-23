import { skills } from "../../data/portfolio";

export const Skills = () => {
  return (
    <section>
      <h2 className="mb-6 text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
          >
            {skill.name}
            <span className="ml-1 text-blue-500">({skill.level})</span>
          </span>
        ))}
      </div>
    </section>
  );
};
