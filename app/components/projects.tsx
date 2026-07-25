const projects = [
  {
    name: "Spattro",
    dates: "Jun 2025 – Present",
    description:
      "A digital healthcare platform connecting patients with healthcare professionals through online consultations.",
    contributions: [
      "Built both frontend and backend using React, Node.js, and MongoDB.",
      "Designed and integrated RESTful APIs to support core platform functionality.",
      "Managed cloud deployment and CI/CD on Microsoft Azure with Docker and Bitbucket Pipelines.",
    ],
    stack: ["React", "Node.js", "MongoDB", "Azure", "Docker", "Bitbucket Pipelines"],
  },
  {
    name: "LawCentr",
    dates: "Jan 2026 – Present",
    description:
      "A legal technology platform connecting users with legal services through a modern digital experience.",
    contributions: [
      "Developed and maintained the frontend application using Next.js.",
      "Built responsive, reusable UI components for desktop and mobile.",
      "Collaborated with designers and backend developers to integrate APIs.",
    ],
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
  },
  {
    name: "Koloso",
    dates: "Ongoing",
    description: "An education technology platform for students and institutions.",
    contributions: [
      "Built frontend and backend features with React, Node.js, and MongoDB.",
      "Collaborated through Bitbucket in an Agile development environment.",
    ],
    stack: ["React", "Node.js", "MongoDB"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="mt-20 border-t border-white/10 pt-10">
      <p className="text-sm font-semibold uppercase text-[#e4db55]">
        Projects
      </p>
      <h2 className="mt-5 max-w-160 text-3xl font-medium leading-tight text-white sm:text-4xl">
        Platforms I&apos;ve helped build at Yamfumu Technologies.
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="border border-white/10 bg-zinc-950/70 p-5 md:p-7"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-xl font-medium text-white">
                {project.name}
              </h3>
              <span className="text-xs text-zinc-500">{project.dates}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              {project.description}
            </p>
            <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
              {project.contributions.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-zinc-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#e4db55]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-semibold uppercase text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
