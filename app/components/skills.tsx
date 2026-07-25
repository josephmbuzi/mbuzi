const skills = [
  "Microsoft Azure",
  "Azure Container Registry",
  "Docker",
  "CI/CD",
  "DevOps",
  "React",
  "Node.js",
  "Next.js",
  "MongoDB",
  "REST APIs",
  "Git",
  "Bitbucket Pipelines",
];

export function Skills() {
  return (
    <section id="skills" className="mt-20 border-t border-white/10 pt-10">
      <p className="text-sm font-semibold uppercase text-[#e4db55]">
        Skills
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
